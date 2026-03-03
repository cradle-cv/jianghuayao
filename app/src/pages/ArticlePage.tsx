import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'
import { allICHContent, ichCategories } from '../data/ichContent'
import { Badge } from '@/components/ui/badge'

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>()
  const article = allICHContent.find(item => item.id === id)
  
  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">文章未找到</h1>
          <p className="text-gray-600 mb-6">抱歉，您访问的文章不存在或已被删除。</p>
          <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  const category = ichCategories.find(c => c.id === article.category)
  
  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      artwork: '文化拾珠',
      news: '动态资讯',
      technique: '古法技艺',
      story: '传承故事',
      festival: '节庆活动'
    }
    return labels[type] || type
  }

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      artwork: 'bg-purple-100 text-purple-800',
      news: 'bg-blue-100 text-blue-800',
      technique: 'bg-green-100 text-green-800',
      story: 'bg-amber-100 text-amber-800',
      festival: 'bg-red-100 text-red-800'
    }
    return colors[type] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link 
            to="/" 
            className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回首页
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className={getTypeColor(article.type)}>
              {getTypeLabel(article.type)}
            </Badge>
            {category && (
              <Badge variant="outline" style={{ borderColor: category.color, color: category.color }}>
                {category.name}
              </Badge>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            {article.date && (
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {article.date}
              </div>
            )}
            {article.author && (
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {article.author}
              </div>
            )}
            {article.source && (
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                来源：{article.source}
              </div>
            )}
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-10">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/placeholder.jpg'
            }}
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
              {article.content}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">相关内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allICHContent
              .filter(item => item.category === article.category && item.id !== article.id)
              .slice(0, 3)
              .map(item => (
                <Link
                  key={item.id}
                  to={`/article/${item.id}`}
                  className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/placeholder.jpg'
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <Badge className={`text-xs mb-2 ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">© 2024 江华非遗文旅网 版权所有</p>
        </div>
      </footer>
    </div>
  )
}
