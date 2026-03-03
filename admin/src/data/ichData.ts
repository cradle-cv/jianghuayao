// 从主项目导入数据
export const ichCategories = [
  {
    id: 'changguwu',
    name: '瑶族长鼓舞',
    level: '国家级非物质文化遗产',
    description: '瑶族长鼓舞是江华最具代表性的民族舞蹈，瑶语称"播公"，已有上千年历史。',
    icon: 'Drum',
    color: '#8B4513',
    coverImage: '/images/categories/changguwu-cover.jpg',
  },
  {
    id: 'zhijin',
    name: '瑶族织锦技艺',
    level: '省级非物质文化遗产',
    description: '瑶族织锦被誉为"穿在身上的史诗"，以"通经断纬"技法织就繁复图案。',
    icon: 'Scissors',
    color: '#D2691E',
    coverImage: '/images/categories/zhijin-cover.jpg',
  },
  {
    id: 'panwangjie',
    name: '瑶族盘王节',
    level: '省级非物质文化遗产',
    description: '农历十月十六日是瑶族盘王节，源于瑶民"漂洋过海还盘王愿"的传说。',
    icon: 'Calendar',
    color: '#CD853F',
    coverImage: '/images/categories/panwangjie-cover.jpg',
  },
  {
    id: 'minyao',
    name: '瑶族民歌',
    level: '国家级/省级非物质文化遗产',
    description: '瑶族民歌包括《盘王大歌》、蝴蝶歌、锦田寨山歌等多种流派。',
    icon: 'Music',
    color: '#228B22',
    coverImage: '/images/categories/minyao-cover.jpg',
  },
  {
    id: 'yaoyiyao',
    name: '瑶医药',
    level: '省级非物质文化遗产',
    description: '瑶医药以"风、寒、湿、热、毒"五症理论为基础，擅长使用草药浴、火灸等疗法。',
    icon: 'Heart',
    color: '#2E8B57',
    coverImage: '/images/categories/yaoyiyao-cover.jpg',
  },
]

// 模拟数据 - 实际使用时应该从API获取
export const allICHContent = [
  {
    id: 'cgw-001',
    title: '《盘古长鼓舞》经典演绎',
    category: 'changguwu',
    type: 'artwork',
    content: '盘古长鼓舞流传于江华蔚竹口一带，是祭祀盘王"还愿"仪式中的经典舞蹈。',
    image: '/images/changguwu/cgw-001-pangu.jpg',
    date: '2024-10-16',
    author: '李根普',
  },
  {
    id: 'cgw-002',
    title: '《芦笙长鼓舞》山野风情',
    category: 'changguwu',
    type: 'artwork',
    content: '芦笙长鼓舞流传于江华高滩一带，由七人表演，动作粗犷，场面热烈。',
    image: '/images/changguwu/cgw-002-lusheng.jpg',
    date: '2024-08-15',
    author: '赵雄',
  },
  {
    id: 'cgw-003',
    title: '《羊角短鼓舞》平地瑶特色',
    category: 'changguwu',
    type: 'artwork',
    content: '羊角短鼓舞流传于江华平地瑶地区，由七人表演，气氛热烈。',
    image: '/images/changguwu/cgw-003-yangjiao.jpg',
    date: '2024-06-06',
    author: '赵明华',
  },
  {
    id: 'zj-001',
    title: '《繁花似锦》金奖作品',
    category: 'zhijin',
    type: 'artwork',
    content: '《繁花似锦》是江华瑶族织锦传承人黄翠兰的创新之作，荣获全省首届少数民族传统手工艺品展演金奖。',
    image: '/images/zhijin/zj-001-fanhua.jpg',
    date: '2018-09-15',
    author: '黄翠兰',
  },
  {
    id: 'zj-002',
    title: '传统八宝被精品',
    category: 'zhijin',
    type: 'artwork',
    content: '八宝被是瑶族织锦的瑰宝，制作一床八宝被需历经30余道工序。',
    image: '/images/zhijin/zj-002-babao.jpg',
    date: '2024-05-20',
    author: '黎柳娥',
  },
]

// 更多模拟数据...
for (let i = 4; i <= 40; i++) {
  allICHContent.push({
    id: `cgw-${String(i).padStart(3, '0')}`,
    title: `长鼓舞内容 ${i}`,
    category: 'changguwu',
    type: ['artwork', 'news', 'technique', 'story'][Math.floor(Math.random() * 4)] as any,
    content: `这是长鼓舞的第${i}条内容描述...`,
    image: `/images/changguwu/cgw-${String(i).padStart(3, '0')}.jpg`,
    date: '2024-01-01',
    author: '传承人',
  })
}

for (let i = 3; i <= 40; i++) {
  allICHContent.push({
    id: `zj-${String(i).padStart(3, '0')}`,
    title: `织锦技艺内容 ${i}`,
    category: 'zhijin',
    type: ['artwork', 'news', 'technique', 'story'][Math.floor(Math.random() * 4)] as any,
    content: `这是织锦技艺的第${i}条内容描述...`,
    image: `/images/zhijin/zj-${String(i).padStart(3, '0')}.jpg`,
    date: '2024-01-01',
    author: '传承人',
  })
}
