import { useState, useEffect } from 'react';
import { 
  Routes, Route, Link
} from 'react-router-dom';
import { 
  Drum, Scissors, Calendar, Music, Heart, 
  MapPin, Phone, Mail, ChevronRight, Menu, X,
  Search, ArrowLeft, Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ichCategories } from './data/ichContent';
import ArticlePage from './pages/ArticlePage';
import './App.css';

// 内容数据接口
interface ICHItem {
  id: string;
  title: string;
  category: string;
  categoryName: string;
  type: 'artwork' | 'news' | 'technique' | 'story' | 'festival';
  typeName: string;
  content: string;
  image: string;
  date?: string;
  author?: string;
  source?: string;
  updatedAt: string;
}

// 首页组件
function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [allContent, setAllContent] = useState<ICHItem[]>([]);
// 在 HomePage 组件里，useEffect 上方加这个工具函数
const withBase = (p: string) => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;

  // 允许 p 是：
  // images/a.jpg
  // ./images/a.jpg
  // /images/a.jpg
  const cleanPath = p.replace(/^[./]+/, '').replace(/^\/+/, '');
  return `${cleanBase}${cleanPath}`;
};
  // 从JSON文件加载数据
  useEffect(() => {
    const loadContent = async () => {
      try {
        // 首先尝试从localStorage加载（如果有后台更新的数据）
        const localData = localStorage.getItem('jianghua_ich_content');
        if (localData) {
          const parsed = JSON.parse(localData);
          setAllContent(parsed);
        } else {
          // 从JSON文件加载默认数据 (路径改为相对路径 ./)
          const response = await fetch(withBase('data/content.json'));
const data = await response.json();
setAllContent(data.content);
        }
      } catch (error) {
        console.error('加载数据失败:', error);
      }
    };
    loadContent();
  }, []);

  // 获取图标组件
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Drum': return <Drum className="w-6 h-6" />;
      case 'Scissors': return <Scissors className="w-6 h-6" />;
      case 'Calendar': return <Calendar className="w-6 h-6" />;
      case 'Music': return <Music className="w-6 h-6" />;
      case 'Heart': return <Heart className="w-6 h-6" />;
      default: return <Drum className="w-6 h-6" />;
    }
  };

  // 获取类别内容
  const getCategoryContent = (categoryId: string) => {
    return allContent.filter(item => item.category === categoryId);
  };

  // 过滤内容并按更新时间倒序排列
  const getFilteredContent = () => {
    let content = selectedCategory 
      ? getCategoryContent(selectedCategory) 
      : [...allContent];
    
    if (searchQuery) {
      content = content.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (activeTab !== 'all') {
      content = content.filter(item => item.type === activeTab);
    }
    
    // 按更新时间倒序排列（最新的在前面）
    return content.sort((a, b) => {
      const dateA = new Date(a.updatedAt || '2000-01-01');
      const dateB = new Date(b.updatedAt || '2000-01-01');
      return dateB.getTime() - dateA.getTime();
    });
  };

  // 获取类型标签
  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      artwork: '文化拾珠',
      news: '动态资讯',
      technique: '古法技艺',
      story: '传承故事',
      festival: '节庆活动'
    };
    return labels[type] || type;
  };

  // 获取类型颜色
  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      artwork: 'bg-purple-100 text-purple-800',
      news: 'bg-blue-100 text-blue-800',
      technique: 'bg-green-100 text-green-800',
      story: 'bg-amber-100 text-amber-800',
      festival: 'bg-red-100 text-red-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">瑶</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent hidden sm:block">
                江华瑶族非物质文化遗产教学资源库系统
              </span>
              <span className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent sm:hidden">
                江华非遗资源库
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">首页</a>
              <a href="#categories" className="text-gray-700 hover:text-amber-600 transition-colors">非遗类别</a>
              <a href="#content" className="text-gray-700 hover:text-amber-600 transition-colors">内容展示</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">关于我们</a>
              <a 
                href="./admin/index.html"  // 改为相对路径
                target="_blank"
                className="flex items-center text-gray-700 hover:text-amber-600 transition-colors"
              >
                <Settings className="w-4 h-4 mr-1" />
                后台管理
              </a>
            </div>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700">首页</a>
              <a href="#categories" className="block py-2 text-gray-700">非遗类别</a>
              <a href="#content" className="block py-2 text-gray-700">内容展示</a>
              <a href="#about" className="block py-2 text-gray-700">关于我们</a>
              <a 
                href="./admin/index.html"  // 改为相对路径
                target="_blank"
                className="block py-2 text-gray-700 flex items-center"
              >
                <Settings className="w-4 h-4 mr-2" />
                后台管理
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero区域 */}
      <section id="home" className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: `url(${withBase('images/hero-bg.jpg')})` }}        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <Badge className="mb-4 bg-amber-500/80 text-white border-0">
              神州瑶都 · 文化江华
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              探索江华瑶族
              <span className="block text-amber-400">非物质文化遗产</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              江华瑶族自治县是全国瑶族人口最多的自治县，被誉为"神州瑶都"。
              这里拥有2项国家级非遗、6项省级非遗、16项市级非遗，
              是瑶族文化的富集地和活态传承典范。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
              >
                探索非遗 <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}
              >
                浏览内容
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 非遗类别 */}
      <section id="categories" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">五大非遗类别</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              江华拥有丰富的非物质文化遗产，涵盖舞蹈、技艺、节庆、音乐、医药等多个领域
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ichCategories.map((category) => (
              <Card 
                key={category.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={() => {
                  setSelectedCategory(category.id);
                  document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div 
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{
  backgroundImage: `url(${withBase(category.coverImage)})`
}}  // 注意：这里依赖 ichContent.ts 中的路径
                />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: category.color + '20', color: category.color }}
                    >
                      {getIcon(category.icon)}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {category.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mt-4">{category.name}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full text-amber-600 hover:text-amber-700 hover:bg-amber-50">
                    查看内容 <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 内容展示 */}
      <section id="content" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">非遗内容展示</h2>
            <p className="text-lg text-gray-600">
              {selectedCategory 
                ? `浏览${ichCategories.find(c => c.id === selectedCategory)?.name}的精彩内容`
                : '浏览全部200条非遗内容，包括文艺作品、新闻动态、技法知识、传承故事'
              }
            </p>
          </div>

          {/* 筛选和搜索 */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="搜索非遗内容..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              {selectedCategory && (
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  查看全部类别
                </Button>
              )}
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full md:w-auto">
                <TabsTrigger value="all">全部</TabsTrigger>
                <TabsTrigger value="artwork">文化拾珠</TabsTrigger>
                <TabsTrigger value="technique">古法技艺</TabsTrigger>
                <TabsTrigger value="story">传承故事</TabsTrigger>
                <TabsTrigger value="festival">节庆活动</TabsTrigger>
                <TabsTrigger value="news">动态资讯</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* 内容网格 - 点击跳转到文章页面 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredContent().map((item) => (
              <Link 
                key={item.id}
                to={`/article/${item.id}`}
                className="block"
              >
                <Card className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden h-full">
                  <div 
                    className="h-40 bg-cover bg-center"
                    style={{
  backgroundImage: `url(${withBase(item.image)})`,
  backgroundColor: '#f3f4f6'
}}
                  />
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={`text-xs ${getTypeColor(item.type)}`}>
                        {getTypeLabel(item.type)}
                      </Badge>
                      {item.date && (
                        <span className="text-xs text-gray-500">{item.date}</span>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {getFilteredContent().length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500">没有找到相关内容，请尝试其他搜索条件</p>
            </div>
          )}
        </div>
      </section>

      {/* 数据统计 */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2</div>
              <div className="text-amber-100">国家级非遗</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6</div>
              <div className="text-amber-100">省级非遗</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">16</div>
              <div className="text-amber-100">市级非遗</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-amber-100">精彩内容</div>
            </div>
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">关于江华非遗文旅网</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                江华瑶族自治县位于湖南省最南端，是全国瑶族人口最多、湖南省唯一的瑶族自治县，
                被誉为"神州瑶都"。这里拥有丰富多彩的非物质文化遗产，是瑶族文化的富集地。
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                本网站致力于展示江华非遗的独特魅力，为游客提供全面的文旅信息服务。
                通过图文并茂的内容，让更多人了解和喜爱瑶族文化，推动非遗的传承与发展。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-medium">地址</div>
                    <div className="text-sm text-gray-600">湖南省永州市江华瑶族自治县</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-medium">咨询电话</div>
                    <div className="text-sm text-gray-600">0746-1234567</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-medium">电子邮箱</div>
                    <div className="text-sm text-gray-600">info@jianghua-ich.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
  src={withBase('images/categories/changguwu-cover.jpg')}
  alt="瑶族长鼓舞"
  className="rounded-lg shadow-lg"
/>
<img
  src={withBase('images/categories/zhijin-cover.jpg')}
  alt="瑶族织锦"
  className="rounded-lg shadow-lg mt-8"
/>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">瑶</span>
                </div>
                <span className="text-lg font-bold text-white">江华瑶族非物质文化遗产教学资源库系统</span>
              </div>
              <p className="text-sm text-gray-400">
                探索神州瑶都的非物质文化遗产，感受千年瑶族文化的独特魅力。
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-amber-400 transition-colors">首页</Link></li>
                <li><a href="#categories" className="hover:text-amber-400 transition-colors">非遗类别</a></li>
                <li><a href="#content" className="hover:text-amber-400 transition-colors">内容展示</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition-colors">关于我们</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">非遗类别</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="hover:text-amber-400 transition-colors cursor-pointer">瑶族长鼓舞</span></li>
                <li><span className="hover:text-amber-400 transition-colors cursor-pointer">瑶族织锦技艺</span></li>
                <li><span className="hover:text-amber-400 transition-colors cursor-pointer">瑶族盘王节</span></li>
                <li><span className="hover:text-amber-400 transition-colors cursor-pointer">瑶族民歌</span></li>
                <li><span className="hover:text-amber-400 transition-colors cursor-pointer">瑶医药</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">联系我们</h4>
              <ul className="space-y-2 text-sm">
                <li>湖南省永州市江华瑶族自治县</li>
                <li>电话：0746-1234567</li>
                <li>邮箱：info@jianghua-ich.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 江华瑶族非物质文化遗产教学资源库系统 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// 主App组件
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article/:id" element={<ArticlePage />} />
    </Routes>
  );
}

export default App;