// 江华非遗内容数据 - 5个类别，每个40条

export interface ICHItem {
  id: string;
  title: string;
  category: string;
  type: 'artwork' | 'news' | 'technique' | 'story' | 'festival';
  content: string;
  image: string;
  date?: string;
  author?: string;
  source?: string;
}

export const ichCategories = [
  {
    id: 'changguwu',
    name: '瑶族长鼓舞',
    level: '国家级非物质文化遗产',
    description: '瑶族长鼓舞是江华最具代表性的民族舞蹈，瑶语称"播公"，已有上千年历史。长鼓以空桐木为身，两端蒙牛羊皮，舞姿粗犷奔放，展现了瑶族人民的生产生活和民族精神。',
    icon: 'Drum',
    color: '#8B4513',
    coverImage: './images/categories/changguwu-cover.jpg'
  },
  {
    id: 'zhijin',
    name: '瑶族织锦技艺',
    level: '省级非物质文化遗产',
    description: '瑶族织锦被誉为"穿在身上的史诗"，以"通经断纬"技法织就繁复图案。八宝被制作技艺是其中的瑰宝，承载着瑶族人民的生活智慧与审美精神。',
    icon: 'Scissors',
    color: '#D2691E',
    coverImage: './images/categories/zhijin-cover.jpg'
  },
  {
    id: 'panwangjie',
    name: '瑶族盘王节',
    level: '省级非物质文化遗产',
    description: '农历十月十六日是瑶族盘王节，源于瑶民"漂洋过海还盘王愿"的传说。这是瑶族最盛大的传统节日，集祭祀、歌舞、庆典于一体。',
    icon: 'Calendar',
    color: '#CD853F',
    coverImage: './images/categories/panwangjie-cover.jpg'
  },
  {
    id: 'minyao',
    name: '瑶族民歌',
    level: '国家级/省级非物质文化遗产',
    description: '瑶族民歌包括《盘王大歌》、蝴蝶歌、锦田寨山歌等多种流派，是瑶族人民口传心授的文化瑰宝，承载着民族的历史记忆与情感表达。',
    icon: 'Music',
    color: '#228B22',
    coverImage: './images/categories/minyao-cover.jpg'
  },
  {
    id: 'yaoyiyao',
    name: '瑶医药',
    level: '省级非物质文化遗产',
    description: '瑶医药以"风、寒、湿、热、毒"五症理论为基础，擅长使用草药浴、火灸、药酒等疗法。江华瑶医药资源丰富，是民族医药宝库中的璀璨明珠。',
    icon: 'Heart',
    color: '#2E8B57',
    coverImage: './images/categories/yaoyiyao-cover.jpg'
  }
];

// 瑶族长鼓舞 - 40条内容
export const changguwuContent: ICHItem[] = [
  // 文艺作品类（1-12）
  {
    id: 'cgw-001',
    title: '《盘古长鼓舞》经典演绎',
    category: 'changguwu',
    type: 'artwork',
    content: '盘古长鼓舞流传于江华蔚竹口一带，是祭祀盘王"还愿"仪式中的经典舞蹈。舞蹈分"请愿"和"围愿"两段，舞步舒缓持重，有锣鼓伴奏，展现了瑶族人民对祖先的崇敬之情。',
    image: './images/changguwu/cgw-001-pangu.jpg',
    date: '2024-10-16',
    author: '李根普'
  },
  {
    id: 'cgw-002',
    title: '《芦笙长鼓舞》山野风情',
    category: 'changguwu',
    type: 'artwork',
    content: '芦笙长鼓舞流传于江华高滩一带，由七人表演，一人手执朝笏领舞，二人吹芦笙，二人打长鼓，一人打锣。全舞分"迎圣"、"起拜"、"行路"、"梅花"、"欢鼓"五段，动作粗犷，场面热烈。',
    image: './images/changguwu/cgw-002-lusheng.jpg',
    date: '2024-08-15',
    author: '赵雄'
  },
  {
    id: 'cgw-003',
    title: '《羊角短鼓舞》平地瑶特色',
    category: 'changguwu',
    type: 'artwork',
    content: '羊角短鼓舞流传于江华平地瑶地区，由七人表演，一人拿朝笏或牛角领头，两人拿羊角，四人执短鼓。舞者载歌载舞，唱着"野羊撬"之歌，互相穿插，气氛热烈。',
    image: './images/changguwu/cgw-003-yangjiao.jpg',
    date: '2024-06-06',
    author: '赵明华'
  },
  {
    id: 'cgw-004',
    title: '《锣笙长鼓舞》集体狂欢',
    category: 'changguwu',
    type: 'artwork',
    content: '锣笙长鼓舞是江华岭东瑶族调庙时跳的集体舞蹈。二人打长鼓，二人吹芦笙，一人打锣，其余各执小旗、纸币、铜铃等道具，六位姑娘打着花伞，边唱边舞，场面壮观。',
    image: './images/changguwu/cgw-004-luosheng.jpg',
    date: '2024-03-03',
    author: '李根普'
  },
  {
    id: 'cgw-005',
    title: '《桌上长鼓舞》绝技表演',
    category: 'changguwu',
    type: 'artwork',
    content: '桌上长鼓舞流行于江华大圩镇等地，舞者在方桌上表演长鼓舞，动作惊险优美，需要极高的平衡能力和舞技，是瑶族长鼓舞中的绝技表演形式。',
    image: './images/changguwu/cgw-005-zhuoshang.jpg',
    date: '2024-11-20',
    author: '李根普'
  },
  {
    id: 'cgw-006',
    title: '长鼓舞《造屋》组舞',
    category: 'changguwu',
    type: 'artwork',
    content: '《造屋》组舞是长鼓舞中最具特色的表演之一，包含二十多个专门表现建造木屋的动作，从寻屋地、找树、砍树、锯树，到上梁、盖屋，真实反映了瑶族频繁迁徙的生活历史。',
    image: './images/changguwu/cgw-006-zaowu.jpg',
    date: '2024-09-10',
    author: '赵雄'
  },
  {
    id: 'cgw-007',
    title: '《金鸡展翅》模仿舞',
    category: 'changguwu',
    type: 'artwork',
    content: '《金鸡展翅》是长鼓舞中模仿禽兽动作的经典舞姿，舞者模仿金鸡展翅高飞的姿态，动作矫健优美，展现了瑶族人民对自然界的细致观察和热爱。',
    image: './images/changguwu/cgw-007-jinji.jpg',
    date: '2024-07-22',
    author: '赵明华'
  },
  {
    id: 'cgw-008',
    title: '《山羊反臂》技巧展示',
    category: 'changguwu',
    type: 'artwork',
    content: '《山羊反臂》是长鼓舞中难度较高的技巧动作，舞者模仿山羊反臂跳跃的姿态，动作灵活敏捷，需要极强的身体协调性和舞蹈功底。',
    image: './images/changguwu/cgw-008-shanyang.jpg',
    date: '2024-05-18',
    author: '李根普'
  },
  {
    id: 'cgw-009',
    title: '《古树盘根》造型舞',
    category: 'changguwu',
    type: 'artwork',
    content: '《古树盘根》是长鼓舞中模仿植物的经典造型，舞者身体盘曲如古树盘根，姿态优美而富有力量感，象征着瑶族文化的深厚根基。',
    image: './images/changguwu/cgw-009-gushu.jpg',
    date: '2024-04-12',
    author: '赵雄'
  },
  {
    id: 'cgw-010',
    title: '《扫地梅花》群舞',
    category: 'changguwu',
    type: 'artwork',
    content: '《扫地梅花》是长鼓舞中优美的群舞形式，舞者们手持长鼓，动作如梅花扫地般轻盈飘逸，队形变换丰富，视觉效果极佳。',
    image: './images/changguwu/cgw-010-meihua.jpg',
    date: '2024-02-28',
    author: '赵明华'
  },
  {
    id: 'cgw-011',
    title: '长鼓舞《庆丰收》',
    category: 'changguwu',
    type: 'artwork',
    content: '《庆丰收》是长鼓舞中表现喜庆场合的经典节目，舞者们敲打着欢快的鼓点，动作热烈奔放，表达瑶族人民丰收后的喜悦心情。',
    image: './images/changguwu/cgw-011-fengshou.jpg',
    date: '2024-10-01',
    author: '李根普'
  },
  {
    id: 'cgw-012',
    title: '《雪花压顶》高难度动作',
    category: 'changguwu',
    type: 'artwork',
    content: '《雪花压顶》是长鼓舞中极具挑战性的动作，舞者需要在蹲姿状态下完成复杂的鼓点敲击，动作如雪花压顶般轻盈而有力。',
    image: './images/changguwu/cgw-012-xuehua.jpg',
    date: '2024-12-20',
    author: '赵雄'
  },
  // 新闻类（13-24）
  {
    id: 'cgw-013',
    title: '江华举行千人长鼓舞展演献礼国庆',
    category: 'changguwu',
    type: 'news',
    content: '2024年国庆前夕，江华瑶族自治县举行震撼人心的千人长鼓舞展演活动。各族群众精神抖擞，鼓舞前行，队伍中既有长鼓舞协会成员，又有朝气蓬勃的小学生，最长者年过七旬，最小者年仅十岁。',
    image: './images/changguwu/cgw-013-qianren.jpg',
    date: '2024-09-28',
    source: '江华新闻网'
  },
  {
    id: 'cgw-014',
    title: '长鼓舞亮相央视重阳特别节目',
    category: 'changguwu',
    type: 'news',
    content: '2024年10月29日，江华瑶族长鼓舞亮相中央广播电视总台重阳特别节目《霞光满天山河颂》。老中青三代舞者同台演绎，长鼓舞与街舞创新交融，展现出刚柔并济的韵律。',
    image: './images/changguwu/cgw-014-yangshi.jpg',
    date: '2024-10-29',
    source: '央视网'
  },
  {
    id: 'cgw-015',
    title: '长鼓舞传承人赵雄获国家级认定',
    category: 'changguwu',
    type: 'news',
    content: '江华瑶族长鼓舞传承人赵雄老师近日获评国家级非物质文化遗产代表性传承人。赵雄老师从瑶山少年成长为长鼓舞守脉者，与时光共舞，为长鼓舞的传承发展做出了突出贡献。',
    image: './images/changguwu/cgw-015-zhaoxiong.jpg',
    date: '2024-11-15',
    source: '湖南日报'
  },
  {
    id: 'cgw-016',
    title: '沱江镇第一小学长鼓操进校园18年',
    category: 'changguwu',
    type: 'news',
    content: '江华沱江镇第一小学将国家级非物质文化遗产"瑶族长鼓舞"引入校园已18年，并将其改编成长鼓操，融入大课间活动，让"人人会唱瑶歌、个个能跳瑶舞"成为校园新风尚。',
    image: './images/changguwu/cgw-016-zhizuo.jpg',
    date: '2024-09-01',
    source: '永州新闻网'
  },
  {
    id: 'cgw-017',
    title: '江华发放8000余个长鼓推动非遗传承',
    category: 'changguwu',
    type: 'news',
    content: '为推动长鼓舞传承，江华县向10所中小学校发放长鼓8000余个，将长鼓舞纳入学校课程。如今全县长鼓舞爱好者已近万人，这项传统民俗正逐渐成为各年龄段群众喜爱的文化时尚。',
    image: './images/changguwu/cgw-017-chengshi.jpg',
    date: '2024-08-20',
    source: '江华县政府网'
  },
  {
    id: 'cgw-018',
    title: '长鼓舞亮相盘王节开幕式',
    category: 'changguwu',
    type: 'news',
    content: '2024年瑶族盘王节开幕式上，来自江华各地的长鼓舞表演队献上精彩演出。激昂的鼓点、粗犷的舞姿，展现了瑶族文化的独特魅力，赢得现场观众阵阵掌声。',
    image: './images/changguwu/cgw-018-wenwu.jpg',
    date: '2024-10-16',
    source: '江华文旅局'
  },
  {
    id: 'cgw-019',
    title: '"长鼓王"李根普的鼓点人生',
    category: 'changguwu',
    type: 'news',
    content: '76岁的李根普老人被誉为"长鼓王"，9岁学打鼓，学了四个师傅才出师。他掌握长鼓舞七十二套程式，是江华长鼓舞活态传承的宝贵财富。',
    image: './images/changguwu/cgw-019-bufa.jpg',
    date: '2024-07-10',
    source: '湖南日报'
  },
  {
    id: 'cgw-020',
    title: '长鼓舞走进湖南旅发大会',
    category: 'changguwu',
    type: 'news',
    content: '江华瑶族长鼓舞作为永州文化旅游的重要名片，精彩亮相湖南省旅游发展大会。独特的民族风情和精湛的表演技艺，吸引了众多游客和媒体记者的关注。',
    image: './images/changguwu/cgw-020-gaoai.jpg',
    date: '2024-09-15',
    source: '湖南省文旅厅'
  },
  {
    id: 'cgw-021',
    title: '长鼓舞与街舞跨界融合创新',
    category: 'changguwu',
    type: 'news',
    content: '江华青年舞者尝试将传统长鼓舞与现代街舞融合，创作出《锦绣瑶都》等创新作品。古老鼓点与青春节拍碰撞出时代火花，彰显瑶族风情鲜活的生命力。',
    image: './images/changguwu/cgw-021-yinyue.jpg',
    date: '2024-11-08',
    source: '永州新闻网'
  },
  {
    id: 'cgw-022',
    title: '桐冲口村成立长鼓舞传承基地',
    category: 'changguwu',
    type: 'news',
    content: '千年瑶寨桐冲口村成立长鼓舞传承基地，近百人的千年勉瑶古寨醉喜多艺术团定期展演长鼓舞，成为永州市非遗示范村，带动当地文化旅游发展。',
    image: './images/changguwu/cgw-022-danren.jpg',
    date: '2024-06-18',
    source: '大公网'
  },
  {
    id: 'cgw-023',
    title: '长鼓舞助力江华70周年县庆',
    category: 'changguwu',
    type: 'news',
    content: '江华瑶族自治县成立70周年庆祝活动中，长鼓舞作为重要表演节目精彩呈现。各族群众以最具民族特色的方式，展示70年来民族团结进步的丰硕成果。',
    image: './images/changguwu/cgw-023-fushi.jpg',
    date: '2025-12-02',
    source: '湖南日报'
  },
  {
    id: 'cgw-024',
    title: '长鼓舞非遗展演活动年超150场',
    category: 'changguwu',
    type: 'news',
    content: '江华依托瑶医药节、盘王节等节庆，每年开展各类长鼓舞展演活动超过150场。长鼓舞已成为江华文化旅游的标志性项目，吸引众多游客前来观赏体验。',
    image: './images/changguwu/cgw-024-qingshen.jpg',
    date: '2024-12-01',
    source: '江华文旅局'
  },
  // 技法类（25-36）
  {
    id: 'cgw-025',
    title: '长鼓制作工艺详解',
    category: 'changguwu',
    type: 'technique',
    content: '长鼓以空桐木为身，两端蒙牛羊皮并饰龙凤纹。制作一面上好的长鼓需要经过选木、挖空、蒙皮、装饰等十余道工序，每道工序都蕴含着匠人的智慧和经验。',
    image: './images/changguwu/cgw-025-shijia.jpg',
    author: '李根普'
  },
  {
    id: 'cgw-026',
    title: '长鼓舞七十二套程式',
    category: 'changguwu',
    type: 'technique',
    content: '传统长鼓舞共有七十二套程式，每套分"起堂"、"移堂"等环节。常用的有拜、承、大、小、打、置、架、斢等十五套，其他程式因传承原因逐渐失传。',
    image: './images/changguwu/pangu-changguwu.jpg',
    author: '赵雄'
  },
  {
    id: 'cgw-027',
    title: '文打法与武打法区别',
    category: 'changguwu',
    type: 'technique',
    content: '长鼓舞击鼓有文打武打之分。文打动作柔和缓慢，武打粗犷豪放。过山瑶以武打为多，土瑶以文打为多。不同打法展现不同的民族风情和地域特色。',
    image: './images/changguwu/wenwu-dafa.jpg',
    author: '赵明华'
  },
  {
    id: 'cgw-028',
    title: '长鼓舞基本步法教学',
    category: 'changguwu',
    type: 'technique',
    content: '长鼓舞基本步法包括弓步、马步、虚步等，配合鼓点节奏进行。舞者需保持"曲"的身姿和"拧"的换位，展示动人的曲线美，这是长鼓舞的精髓所在。',
    image: './images/changguwu/gaoai-zhuang.jpg',
    author: '李根普'
  },
  {
    id: 'cgw-029',
    title: '高桩与矮桩技法对比',
    category: 'changguwu',
    type: 'technique',
    content: '长鼓舞不同地区打法有高桩矮桩之分。矮桩需要蹲下来打，动作优雅，更有民族风味；高桩站立而舞，动作舒展大方。两种技法各有千秋，都是瑶族文化的瑰宝。',
    image: './images/changguwu/gaoai-zhuang.jpg',
    author: '赵雄'
  },
  {
    id: 'cgw-030',
    title: '长鼓舞音乐伴奏特点',
    category: 'changguwu',
    type: 'technique',
    content: '长鼓舞的音乐伴奏以唢呐为主奏，辅以奏鼓。有"大吹大打"和"小吹小打"之分。笛、芦演奏与号子声形成多部和声，高亢激昂、振奋人心。',
    image: './images/changguwu/lusheng-changguwu.jpg',
    author: '赵明华'
  },
  {
    id: 'cgw-031',
    title: '单人舞表演技巧',
    category: 'changguwu',
    type: 'technique',
    content: '长鼓舞单人舞注重个人技艺展示，舞者需要熟练掌握各种击鼓动作和步法，动作要粗犷、勇猛、奔放、雄劲、洒脱，节奏明快敏捷。',
    image: './images/changguwu/jinji-zhanchi.jpg',
    author: '李根普'
  },
  {
    id: 'cgw-032',
    title: '群舞队形编排要领',
    category: 'changguwu',
    type: 'technique',
    content: '长鼓舞群舞需要精心编排队形，常见的有圆圈、方阵、梅花等队形。队形变换要与鼓点节奏配合，舞者们动作整齐划一，场面壮观热烈。',
    image: './images/changguwu/qunwu-duixing.jpg',
    author: '赵雄'
  },
  {
    id: 'cgw-033',
    title: '长鼓舞服饰搭配',
    category: 'changguwu',
    type: 'technique',
    content: '长鼓舞表演需穿着传统瑶族服饰，男子头戴瑶帽，身穿对襟短衣，腰系彩带；女子头戴银饰，身穿绣花衣裙，佩戴银项圈、手镯等饰品，色彩艳丽。',
    image: './images/changguwu/pangu-changguwu.jpg',
    author: '赵明华'
  },
  {
    id: 'cgw-034',
    title: '长鼓保养与维护',
    category: 'changguwu',
    type: 'technique',
    content: '长鼓需要妥善保养，避免阳光直射和潮湿环境。鼓皮要保持干燥，定期用牛油擦拭。不用时应放在神台上或干燥通风处，这是瑶族人民对祖先的敬重。',
    image: './images/changguwu/ligenpu-guwang.jpg',
    author: '李根普'
  },
  {
    id: 'cgw-035',
    title: '长鼓舞表演前的请神仪式',
    category: 'changguwu',
    type: 'technique',
    content: '传统长鼓舞表演前要进行请神仪式，舞者面向神台或东方，焚香祷告，祈求盘王保佑。这一仪式体现了瑶族人民对祖先的崇敬和感恩之情。',
    image: './images/changguwu/panwang-chuanshuo.jpg',
    author: '赵雄'
  },
  {
    id: 'cgw-036',
    title: '长鼓舞教学传承方法',
    category: 'changguwu',
    type: 'technique',
    content: '长鼓舞教学采用口传心授的方式，师傅带徒弟，手把手传授。学习者需要从基本功开始，循序渐进，通常需要数年才能掌握精髓，出师独立表演。',
    image: './images/changguwu/xuexiao-changguwu.jpg',
    author: '李根普'
  },
  // 故事类（37-40）
  {
    id: 'cgw-037',
    title: '盘王与长鼓的传说',
    category: 'changguwu',
    type: 'story',
    content: '相传瑶族祖先盘王喜欢狩猎，一天到山上去打猎，不幸被野山羊撞死在空桐树下。他儿子抓住山羊，剥开山羊皮，砍了空桐树做成长鼓来敲打，以示为祖先报仇。从此长鼓舞成为纪念盘王的重要方式。',
    image: './images/changguwu/panwang-chuanshuo.jpg'
  },
  {
    id: 'cgw-038',
    title: '长鼓舞传承世家',
    category: 'changguwu',
    type: 'story',
    content: '江华有许多长鼓舞传承世家，世代相传，守护着这一文化瑰宝。李根普家族四代跳长鼓舞，从祖父到孙子，长鼓的鼓点声从未中断，成为瑶族文化传承的生动写照。',
    image: './images/changguwu/ligenpu-guwang.jpg'
  },
  {
    id: 'cgw-039',
    title: '从瑶山走向世界的长鼓舞',
    category: 'changguwu',
    type: 'story',
    content: '江华瑶族长鼓舞从深山瑶寨走向全国舞台，再到国际文化交流，经历了漫长而辉煌的历程。如今，长鼓舞已成为中国民族舞蹈的重要代表，在世界舞台上绽放光彩。',
    image: './images/changguwu/yangshi-chongyang.jpg'
  },
  {
    id: 'cgw-040',
    title: '长鼓舞与瑶族identity',
    category: 'changguwu',
    type: 'story',
    content: '长鼓舞不仅是瑶族人民的艺术表现形式，更是民族认同的重要标志。每当长鼓响起，瑶胞们便会聚集在一起，在鼓点中感受民族的凝聚力和文化的传承。',
    image: './images/changguwu/qunwu-duixing.jpg'
  }
];

// 瑶族织锦技艺 - 40条内容
export const zhijinContent: ICHItem[] = [
  // 文艺作品类（1-12）
  {
    id: 'zj-001',
    title: '《繁花似锦》金奖作品',
    category: 'zhijin',
    type: 'artwork',
    content: '《繁花似锦》是江华瑶族织锦传承人黄翠兰的创新之作，荣获全省首届少数民族传统手工艺品展演金奖。作品打破瑶锦单竹签挑单层经线单色的传统技艺，用单签把底面两层经线来回挑起，双色搭配，一盘素色细花，意为瑶锦华而朴实，前程似锦。',
    image: './images/zhijin/zj-001-fanhua.jpg',
    date: '2018-09-15',
    author: '黄翠兰'
  },
  {
    id: 'zj-002',
    title: '传统八宝被精品',
    category: 'zhijin',
    type: 'artwork',
    content: '八宝被是瑶族织锦的瑰宝，制作一床八宝被需历经纺纱、染色、挑花等30余道工序，耗时数月。纹样包含"丹凤朝阳"、"麒麟送子"等八种寓意吉祥的图腾，是瑶族姑娘出嫁时的必备嫁妆。',
    image: './images/zhijin/zj-002-babao.jpg',
    date: '2024-05-20',
    author: '黎柳娥'
  },
  {
    id: 'zj-003',
    title: '瑶族婚礼四件套',
    category: 'zhijin',
    type: 'artwork',
    content: '黄翠兰创作的"瑶族婚礼四件套"将瑶锦元素融入家居装饰，包括床罩、枕套、被面等。传统纹样与现代设计完美结合，让非遗走进千家万户，深受市场欢迎。',
    image: './images/zhijin/zj-003-hunli.jpg',
    date: '2023-10-01',
    author: '黄翠兰'
  },
  {
    id: 'zj-004',
    title: '瑶嘟嘟祈福香囊',
    category: 'zhijin',
    type: 'artwork',
    content: '"瑶嘟嘟"小挂件是黄翠兰为抗疫战士特别制作的祈福香囊，将瑶锦传统工艺与现代审美相结合，小巧精致，寓意吉祥，深受人们喜爱，成为江华非遗文创的明星产品。',
    image: './images/zhijin/zj-004-yaodudu.jpg',
    date: '2020-03-15',
    author: '黄翠兰'
  },
  {
    id: 'zj-005',
    title: '盘王印纹织锦挂毯',
    category: 'zhijin',
    type: 'artwork',
    content: '盘王印是瑶族最重要的图腾之一，象征着祖先的庇佑。这款织锦挂毯以盘王印为核心纹样，周围环绕八角花纹，色彩艳丽，工艺精湛，是瑶族文化的重要载体。',
    image: './images/zhijin/zj-005-panwangyin.jpg',
    date: '2024-08-08',
    author: '黎柳娥'
  },
  {
    id: 'zj-006',
    title: '八角花纹围巾系列',
    category: 'zhijin',
    type: 'artwork',
    content: '八角花纹是瑶族织锦的经典纹样，象征着吉祥如意。这款围巾系列采用传统八角花纹，配色典雅，既保留了传统工艺的精髓，又符合现代时尚审美，是江华旅游的热门纪念品。',
    image: './images/zhijin/zj-006-tiaohua.jpg',
    date: '2024-11-11',
    author: '黄翠兰'
  },
  {
    id: 'zj-007',
    title: '挑花工艺手提包',
    category: 'zhijin',
    type: 'artwork',
    content: '这款手提包将瑶族挑花工艺与现代包型设计相结合，包身采用传统几何纹样，配色大胆，工艺精细。既实用又具有浓厚的民族文化特色，深受年轻消费者喜爱。',
    image: './images/zhijin/zj-007-ranse.jpg',
    date: '2024-06-18',
    author: '黎柳娥'
  },
  {
    id: 'zj-008',
    title: '粘膏染蓝白挂饰',
    category: 'zhijin',
    type: 'artwork',
    content: '粘膏染是瑶族独特的染色工艺，以粘膏树汁为防染剂，在布料上勾勒图案，经蓝靛浸染后煮去粘膏，露出素白纹样，呈现出蓝白相间的古拙之美。这款挂饰展现了粘膏染的独特魅力。',
    image: './images/zhijin/nangao-fangran.jpg',
    date: '2024-04-22',
    author: '黄翠兰'
  },
  {
    id: 'zj-009',
    title: '数纱绣锦桌旗',
    category: 'zhijin',
    type: 'artwork',
    content: '数纱是瑶族织锦的核心技法之一，需要精确计算经纬线的数量来确定图案位置。这款桌旗采用数纱技法绣制，图案规整精美，是瑶族织锦技艺的精品之作。',
    image: './images/zhijin/shusha-jifa.jpg',
    date: '2024-09-01',
    author: '黎柳娥'
  },
  {
    id: 'zj-010',
    title: '瑶族服饰复原系列',
    category: 'zhijin',
    type: 'artwork',
    content: '江华职中服装专业师生深入瑶寨调研，收集整理传统瑶族服饰资料，复原制作了多个支系的瑶族传统服饰。这些服饰保留了传统纹样和剪裁工艺，是研究和传承瑶族服饰文化的重要资料。',
    image: './images/zhijin/liuliuer-jinxiao.jpg',
    date: '2024-07-15',
    author: '江华职中'
  },
  {
    id: 'zj-011',
    title: '现代瑶锦时装设计',
    category: 'zhijin',
    type: 'artwork',
    content: '设计师黎秋亿将传统瑶锦纹样应用于时装设计，创作出独具特色的抹胸长裙等现代服饰。瑶锦元素与国际时尚完美融合，让瑶锦在国际舞台上大放异彩。',
    image: './images/zhijin/fanhuasishui.jpg',
    date: '2024-12-05',
    author: '黎秋亿'
  },
  {
    id: 'zj-012',
    title: '瑶锦元素家居饰品',
    category: 'zhijin',
    type: 'artwork',
    content: '将瑶锦元素融入抱枕、桌布、窗帘等家居饰品，传统纹样与现代生活方式相结合。这些产品既保留了瑶族文化的独特魅力，又满足了现代人对品质生活的追求。',
    image: './images/zhijin/wenchuang-rexiao.jpg',
    date: '2024-10-20',
    author: '江华旅鼎文化'
  },
  // 新闻类（13-24）
  {
    id: 'zj-013',
    title: '瑶族织锦传承人黎柳娥进校园',
    category: 'zhijin',
    type: 'news',
    content: '2025年职业教育活动周期间，瑶族织锦非遗传承人黎柳娥走进江华职中，向师生详细介绍瑶族织锦的历史渊源与文化内涵，并现场演示挑花工艺，指导学生动手体验。',
    image: './images/zhijin/liuliuer-jinxiao.jpg',
    date: '2025-05-19',
    source: '湖南教育新闻网'
  },
  {
    id: 'zj-014',
    title: '江华职中将瑶族织锦纳入课程体系',
    category: 'zhijin',
    type: 'news',
    content: '江华职中将瑶族织锦纳入服装专业课程体系，开设《瑶族服饰设计与制作》《瑶族文化与传统技艺》等课程，通过"技艺+文化"的双轨教学，培养既有专业技能又有文化底蕴的新时代工匠。',
    image: './images/zhijin/zhijin-kekeng.jpg',
    date: '2024-09-01',
    source: '华声教育'
  },
  {
    id: 'zj-015',
    title: '黄翠兰创办瑶锦研习基地',
    category: 'zhijin',
    type: 'news',
    content: '江华瑶锦传承人黄翠兰在白芒营镇创办瑶族织锦研习基地，培养小小非遗传承人。基地还计划发展成为扶贫车间，开发更多受欢迎的瑶族织锦产品，助力乡村振兴。',
    image: './images/zhijin/huangcuilan-jidi.jpg',
    date: '2020-06-13',
    source: '永州新闻网'
  },
  {
    id: 'zj-016',
    title: '瑶族织锦文创产品年销售额超千万',
    category: 'zhijin',
    type: 'news',
    content: '江华旅鼎文化创意有限公司与职中合作开发瑶锦文创产品，年销售额超千万元。传统技艺与现代设计碰撞出火花，瑶锦产品远销北上广，成为江华文旅产业的亮点。',
    image: './images/zhijin/wenchuang-rexiao.jpg',
    date: '2024-12-15',
    source: '搜狐网'
  },
  {
    id: 'zj-017',
    title: '江华职中校服融入瑶族织锦元素',
    category: 'zhijin',
    type: 'news',
    content: '江华职中自2014年起为全校学生设计制作校服，巧妙融入瑶族"盘王印"和"八角花纹"等织锦元素。全校近6000套校服从设计到生产均由服装专业师生完成，颇具民族特色。',
    image: './images/zhijin/zhijin-kekeng.jpg',
    date: '2024-09-10',
    source: '搜狐网'
  },
  {
    id: 'zj-018',
    title: '瑶族织锦专题视频拍摄完成',
    category: 'zhijin',
    type: 'news',
    content: '江华县完成瑶族织锦专题视频拍摄工作，全面采集和记录了全县各流派的织锦技艺。这些珍贵影像资料将用于非遗保护传承和数字化保存，为后人留下宝贵的文化财富。',
    image: './images/zhijin/huangcuilan-jidi.jpg',
    date: '2024-08-30',
    source: '江华文旅局'
  },
  {
    id: 'zj-019',
    title: '瑶锦作品亮相省少数民族工艺品展',
    category: 'zhijin',
    type: 'news',
    content: '江华瑶族织锦作品在湖南省少数民族传统手工艺品展演中大放异彩，黄翠兰的《繁花似锦》斩获金奖。江华织锦以其精湛的工艺和独特的民族风格赢得评委和观众的一致好评。',
    image: './images/zhijin/fanhuasishui.jpg',
    date: '2018-09-20',
    source: '湖南省民宗委'
  },
  {
    id: 'zj-020',
    title: '数字化技术保存瑶族织锦纹样',
    category: 'zhijin',
    type: 'news',
    content: '江华职中联合湖南科技学院建立少数民族服饰资源库，用数字化技术保存瑶锦纹样。传统技艺与现代科技相结合，为瑶锦的保护传承和创新发展提供了新的可能。',
    image: './images/zhijin/tiaohua-gongyi.jpg',
    date: '2024-11-05',
    source: '湖南科技学院'
  },
  {
    id: 'zj-021',
    title: '瑶族织锦非遗工坊挂牌成立',
    category: 'zhijin',
    type: 'news',
    content: '江华瑶族织锦非遗工坊正式挂牌成立，通过校企合作、产教融合模式，为织娘提供稳定的就业平台，同时开发更多符合市场需求的瑶锦产品，助力非遗活态传承。',
    image: './images/zhijin/liuliuer-jinxiao.jpg',
    date: '2024-10-08',
    source: '江华县政府网'
  },
  {
    id: 'zj-022',
    title: '瑶锦产品入驻电商平台',
    category: 'zhijin',
    type: 'news',
    content: '江华瑶锦产品在淘宝、京东等电商平台开设网店，将织锦元素融入箱包、家居饰品等现代商品。线上销售渠道的开拓，让传统瑶锦走向更广阔的市场。',
    image: './images/zhijin/wenchuang-rexiao.jpg',
    date: '2024-06-01',
    source: '永州新闻网'
  },
  {
    id: 'zj-023',
    title: '瑶族织锦技艺入选省级非遗',
    category: 'zhijin',
    type: 'news',
    content: '江华瑶族织锦（八宝被制作技艺）入选第四批省级非物质文化遗产代表性项目名录。这一认定是对瑶族织锦文化价值的肯定，也为技艺的保护传承提供了更有力的支持。',
    image: './images/zhijin/babao-bei.jpg',
    date: '2016-12-30',
    source: '湖南省文旅厅'
  },
  {
    id: 'zj-024',
    title: '瑶锦传承人在非遗展示会获好评',
    category: 'zhijin',
    type: 'news',
    content: '黄翠兰在非遗展示会上向参观者介绍瑶族织锦，现场演示挑花工艺，吸引众多观众驻足观看。她耐心讲解每道工序的要点，让更多人了解和喜爱这项传统技艺。',
    image: './images/zhijin/huangcuilan-jidi.jpg',
    date: '2024-09-25',
    source: '江华新闻网'
  },
  // 技法类（25-36）
  {
    id: 'zj-025',
    title: '织锦工具：腰式斜织机',
    category: 'zhijin',
    type: 'technique',
    content: '瑶族织锦使用木制腰式斜织机，这是瑶族妇女世代相传的织布工具。织机结构简单但功能完善，由机架、综框、踏板、梭子等部件组成，操作时需要手脚协调配合。',
    image: './images/zhijin/tiaohua-gongyi.jpg',
    author: '黎柳娥'
  },
  {
    id: 'zj-026',
    title: '"通经断纬"技法详解',
    category: 'zhijin',
    type: 'technique',
    content: '"通经断纬"是瑶族织锦的核心技法，以棉、麻、丝为原料，经线为底，纬线起花。织娘根据图案设计，在需要显花的位置插入不同颜色的纬线，形成精美的图案。',
    image: './images/zhijin/shusha-jifa.jpg',
    author: '黄翠兰'
  },
  {
    id: 'zj-027',
    title: '挑花工艺步骤',
    category: 'zhijin',
    type: 'technique',
    content: '挑花是瑶锦制作的关键工序，需要用竹签按图案设计要求，将经线挑起，然后穿入纬线。挑花要求眼准手稳，一经一纬、一丝一线都需全神贯注，不允许任何差错。',
    image: './images/zhijin/tiaohua-gongyi.jpg',
    author: '黎柳娥'
  },
  {
    id: 'zj-028',
    title: '数纱技法要点',
    category: 'zhijin',
    type: 'technique',
    content: '数纱是瑶锦制作的基础技法，需要精确计算经纬线的数量来确定图案位置。织娘们心算如飞，不用画图就能织出复杂的几何图案，这种技艺需要长期的练习和经验积累。',
    image: './images/zhijin/shusha-jifa.jpg',
    author: '黄翠兰'
  },
  {
    id: 'zj-029',
    title: '植物染色工艺',
    category: 'zhijin',
    type: 'technique',
    content: '瑶族织锦善用植物染料，以蓝靛、青靛为主，辅以黑、红等色。染色时需要掌握温度、时间、浓度等因素，才能染出色泽鲜艳、持久不褪的颜色。',
    image: './images/zhijin/zhiwu-ranse.jpg',
    author: '黎柳娥'
  },
  {
    id: 'zj-030',
    title: '粘膏染防染技术',
    category: 'zhijin',
    type: 'technique',
    content: '粘膏染是瑶族独特的防染技术，以粘膏树汁为防染剂，在布料上勾勒图案。经蓝靛浸染后煮去粘膏，露出素白纹样，呈现出蓝白相间的古拙之美。',
    image: './images/zhijin/nangao-fangran.jpg',
    author: '黄翠兰'
  },
  {
    id: 'zj-031',
    title: '配色原则与审美',
    category: 'zhijin',
    type: 'technique',
    content: '瑶族织锦配色讲究"黑配白，哪里得"、"红配黄，放光芒"，善用高纯度对比色，形成强烈的视觉冲击。配色既要符合传统审美，又要体现个人创意。',
    image: './images/zhijin/peise-yuanze.jpg',
    author: '黎柳娥'
  },
  {
    id: 'zj-032',
    title: '绣锦与织锦的区别',
    category: 'zhijin',
    type: 'technique',
    content: '瑶锦分为织锦与绣锦两类。织锦用织机织造，图案规整；绣锦以针代笔，以丝线为墨，通过平绣、侧绣等技法自由创作，更显灵动。两种技法各有特色，相辅相成。',
    image: './images/zhijin/tiaohua-gongyi.jpg',
    author: '黄翠兰'
  },
  {
    id: 'zj-033',
    title: '八宝被制作流程',
    category: 'zhijin',
    type: 'technique',
    content: '制作一床八宝被需历经纺纱、染色、挑花、织造等30余道工序，耗时数月。每道工序都有严格的要求，从原料选择到成品检验，都体现着匠人的用心。',
    image: './images/zhijin/babao-bei.jpg',
    author: '黎柳娥'
  },
  {
    id: 'zj-034',
    title: '单签挑双色织法创新',
    category: 'zhijin',
    type: 'technique',
    content: '黄翠兰创新"单签挑双色"织法，用单签把底面两层经线来回挑起，实现双色搭配。这一创新打破了瑶锦单色的传统，为织锦艺术开辟了新的可能。',
    image: './images/zhijin/fanhuasishui.jpg',
    author: '黄翠兰'
  },
  {
    id: 'zj-035',
    title: '纹样设计原理',
    category: 'zhijin',
    type: 'technique',
    content: '瑶锦纹样设计源于自然和生活，有动物纹、植物纹、几何纹等多种类型。设计时需要考虑图案的寓意、对称性、连续性等因素，体现了瑶族人民的智慧和审美。',
    image: './images/zhijin/peise-yuanze.jpg',
    author: '黎柳娥'
  },
  {
    id: 'zj-036',
    title: '织锦保养与收藏',
    category: 'zhijin',
    type: 'technique',
    content: '瑶锦制品需要妥善保养，避免阳光直射和潮湿环境。清洗时应使用中性洗涤剂，轻柔手洗，避免用力搓揉。收藏时应折叠整齐，放置在干燥通风处。',
    image: './images/zhijin/babao-bei.jpg',
    author: '黄翠兰'
  },
  // 故事类（37-40）
  {
    id: 'zj-037',
    title: '织锦与瑶族姑娘的嫁妆',
    category: 'zhijin',
    type: 'story',
    content: '在瑶族传统中，姑娘出嫁时必须带上自己织制的八宝被作为嫁妆。这不仅是对新娘手工技艺的检验，更承载着母亲对女儿的祝福和期盼。一床精美的八宝被，是瑶族姑娘勤劳和智慧的象征。',
    image: './images/zhijin/babao-bei.jpg'
  },
  {
    id: 'zj-038',
    title: '织娘黄翠兰的传承之路',
    category: 'zhijin',
    type: 'story',
    content: '黄翠兰从小跟随母亲学习织锦，几十年如一日坚守这门技艺。她不仅熟练掌握传统技法，还大胆创新，将瑶锦融入现代生活。她的故事激励着更多年轻人投身非遗传承事业。',
    image: './images/zhijin/huangcuilan-jidi.jpg'
  },
  {
    id: 'zj-039',
    title: '穿在身上的史诗',
    category: 'zhijin',
    type: 'story',
    content: '瑶族织锦被誉为"穿在身上的史诗"，每一幅图案都记录着瑶族的历史传说、宗教信仰和生活场景。织锦是瑶族无文字时代的"史书"，承载着民族的记忆和文化基因。',
    image: './images/zhijin/fanhuasishui.jpg'
  },
  {
    id: 'zj-040',
    title: '从瑶寨到世界的织锦',
    category: 'zhijin',
    type: 'story',
    content: '瑶族织锦从深山瑶寨走向全国乃至世界舞台，经历了从传统到现代的华丽转身。如今，瑶锦不仅是民族文化的象征，更成为时尚设计的重要元素，在国际舞台上绽放光彩。',
    image: './images/zhijin/fanhuasishui.jpg'
  }
];

// 瑶族盘王节 - 40条内容
export const panwangjieContent: ICHItem[] = [
  // 节庆活动类（1-12）
  {
    id: 'pwj-001',
    title: '2024年瑶族盘王节盛大开幕',
    category: 'panwangjie',
    type: 'festival',
    content: '2024年11月16日至17日，第十八届中国瑶族盘王节在江华瑶族自治县盛大举行。来自湖南、广西、广东、云南、贵州等五省（区）的瑶族代表及社会各界人士万余人参加，共同祭祀祖先、欢庆佳节。',
    image: './images/panwangjie/pwj-001-kaimu.jpg',
    date: '2024-11-16',
    source: '江华新闻网'
  },
  {
    id: 'pwj-002',
    title: '盘王祭典仪式',
    category: 'panwangjie',
    type: 'festival',
    content: '盘王祭典是盘王节的核心活动，包括请愿、落马、开天门、点兵、诉师、分段、除苗、围愿等程序。祭典上，瑶族同胞身着节日盛装，焚香祷告，祈求盘王保佑风调雨顺、五谷丰登。',
    image: './images/panwangjie/pwj-002-jidian.jpg',
    date: '2024-10-16',
    source: '江华文旅局'
  },
  {
    id: 'pwj-003',
    title: '炫彩非遗瑶服出行巡游',
    category: 'panwangjie',
    type: 'festival',
    content: '盘王节期间，来自国内外的近千名瑶胞身着五彩斑斓、各具特色的非遗瑶服，围绕水口镇主街道进行巡游。精致的刺绣、独特的图案、绚丽的色彩，如同流动的画卷，展现各地瑶族服饰的奇妙演变。',
    image: './images/panwangjie/pwj-003-changzhuo.jpg',
    date: '2024-11-16',
    source: '江华县政府网'
  },
  {
    id: 'pwj-004',
    title: '瑶族风情才艺展演',
    category: 'panwangjie',
    type: 'festival',
    content: '在水口镇灵犀广场上，各地区瑶族同胞带来的节目轮番上演。长鼓舞、盘王大歌、蝴蝶歌等传统节目精彩纷呈，让游客和市民沉浸在浓郁的民族风情之中。',
    image: './images/panwangjie/pwj-004-gouhuo.jpg',
    date: '2024-11-17',
    source: '江华文旅局'
  },
  {
    id: 'pwj-005',
    title: '海内外瑶胞寻根之旅',
    category: 'panwangjie',
    type: 'festival',
    content: '来自湖南、广东、广西、云南、海南等省份以及老挝、泰国、越南等国家的瑶族同胞齐聚江华，共同探寻瑶族悠久的历史、领略非遗瑶服的独特魅力，感受传承千年的民族记忆与文化底蕴。',
    image: './images/panwangjie/xungen-zhilv.jpg',
    date: '2024-11-16',
    source: '江华新闻网'
  },
  {
    id: 'pwj-006',
    title: '还盘王愿大典',
    category: 'panwangjie',
    type: 'festival',
    content: '"还盘王愿"是盘王节最重要的仪式，三年一小愿，十二年一大愿。小愿打长鼓三天三夜，大愿则打七天七夜。仪式庄重肃穆，表达了瑶族人民对祖先盘王的感恩和敬仰。',
    image: './images/panwangjie/huanyuan-dadian.jpg',
    date: '2024-10-16',
    source: '江华民宗局'
  },
  {
    id: 'pwj-007',
    title: '盘王节长桌宴',
    category: 'panwangjie',
    type: 'festival',
    content: '盘王节期间，瑶族同胞摆设长桌宴，招待远道而来的客人。桌上摆满瑶家特色美食：腊肉、糍粑、瓜箪酒等，大家围坐一起，畅饮美酒，共叙民族情谊。',
    image: './images/panwangjie/changzhuo-yan.jpg',
    date: '2024-10-16',
    source: '江华文旅局'
  },
  {
    id: 'pwj-008',
    title: '瑶族服饰大赛',
    category: 'panwangjie',
    type: 'festival',
    content: '盘王节新增瑶族服饰大赛，各地瑶族同胞展示本支系的特色服饰。比赛不仅展示服饰的精美工艺，更通过服饰讲述瑶族的历史文化和迁徙故事。',
    image: './images/panwangjie/yaofu-xunyou.jpg',
    date: '2024-11-17',
    source: '江华文旅局'
  },
  {
    id: 'pwj-009',
    title: '文旅博览会',
    category: 'panwangjie',
    type: 'festival',
    content: '盘王节期间举办文旅博览会，展示瑶家美食、瑶医药、瑶族服饰、织锦、文创产品、非遗产品、农产品等。给广大游客带来一场精彩的民族文化盛宴。',
    image: './images/panwangjie/lvbo-hui.jpg',
    date: '2024-11-16',
    source: '江华商务局'
  },
  {
    id: 'pwj-010',
    title: '篝火晚会',
    category: 'panwangjie',
    type: 'festival',
    content: '夜幕降临，盘王节篝火晚会点燃。瑶族同胞与游客手拉手，围着篝火跳起欢快的舞蹈，火光映红笑脸，歌声响彻夜空，共同庆祝这一盛大节日。',
    image: './images/panwangjie/gouhuo-wanhui.jpg',
    date: '2024-10-16',
    source: '江华文旅局'
  },
  {
    id: 'pwj-011',
    title: '桐冲口村盘王节分会场',
    category: 'panwangjie',
    type: 'festival',
    content: '千年瑶寨桐冲口村作为盘王节分会场，举办丰富多彩的庆祝活动。近百人的千年勉瑶古寨醉喜多艺术团献上精彩演出，让游客深度体验瑶族文化。',
    image: './images/panwangjie/tongchongkou-fenhui.jpg',
    date: '2024-11-17',
    source: '桐冲口村委会'
  },
  {
    id: 'pwj-012',
    title: '湘粤桂鄂瑶学会文化座谈会',
    category: 'panwangjie',
    type: 'festival',
    content: '盘王节期间举办湘粤桂鄂瑶学会瑶族文化"两创"工作座谈会，来自四省区的瑶族专家学者齐聚一堂，共同探讨瑶族文化的创造性转化和创新性发展。',
    image: './images/panwangjie/xungen-zhilv.jpg',
    date: '2024-11-17',
    source: '江华瑶族研究会'
  },
  // 新闻类（13-24）
  {
    id: 'pwj-013',
    title: '瑶族盘王节入选国家级非遗',
    category: 'panwangjie',
    type: 'news',
    content: '2021年6月，瑶族盘王节（还盘王愿）入选第五批民俗类国家级非物质文化遗产代表性项目名录扩展项目名录。这一认定标志着盘王节的文化价值得到国家层面的认可。',
    image: './images/panwangjie/panwang-dian.jpg',
    date: '2021-06-10',
    source: '国务院'
  },
  {
    id: 'pwj-014',
    title: '江华盘王节吸引万余名瑶胞参加',
    category: 'panwangjie',
    type: 'news',
    content: '第十八届中国瑶族盘王节在江华成功举办，来自五省（区）的瑶族代表及社会各界人士万余人参加。活动规模盛大，影响深远，成为江华文化旅游的亮丽名片。',
    image: './images/panwangjie/2024-shengda-kaimu.jpg',
    date: '2024-11-18',
    source: '湖南日报'
  },
  {
    id: 'pwj-015',
    title: '盘王节成为江华文旅融合品牌',
    category: 'panwangjie',
    type: 'news',
    content: '江华精心打造盘王节文旅融合品牌，通过"政府补贴+市场运作"的模式，让古老节庆成为连接民族情感、助推乡村振兴的纽带。每年吸引数十万游客前来参与。',
    image: './images/panwangjie/yaofu-xunyou.jpg',
    date: '2024-10-20',
    source: '江华文旅局'
  },
  {
    id: 'pwj-016',
    title: '海外瑶胞首次参加江华盘王节',
    category: 'panwangjie',
    type: 'news',
    content: '来自老挝、泰国、越南等国家的海外瑶族同胞首次组团参加江华盘王节，寻根问祖，共叙亲情。这标志着江华盘王节的国际影响力不断提升。',
    image: './images/panwangjie/xungen-zhilv.jpg',
    date: '2024-11-17',
    source: '江华外侨办'
  },
  {
    id: 'pwj-017',
    title: '盘王节带动江华旅游收入增长',
    category: 'panwangjie',
    type: 'news',
    content: '据统计，2024年盘王节期间，江华接待游客超过50万人次，实现旅游收入近亿元。盘王节已成为推动江华经济发展的重要引擎。',
    image: './images/panwangjie/lvbo-hui.jpg',
    date: '2024-11-20',
    source: '江华统计局'
  },
  {
    id: 'pwj-018',
    title: '盘王节非遗传承人获表彰',
    category: 'panwangjie',
    type: 'news',
    content: '盘王节期间，江华表彰了一批在盘王节传承保护工作中做出突出贡献的非遗传承人。他们的坚守和付出，让这一千年节庆得以薪火相传。',
    image: './images/panwangjie/huanyuan-dadian.jpg',
    date: '2024-10-16',
    source: '江华文旅局'
  },
  {
    id: 'pwj-019',
    title: '盘王节与瑶医药节同期举办',
    category: 'panwangjie',
    type: 'news',
    content: '江华将盘王节与瑶医药节同期举办，推出"瑶药理疗+瑶家药膳"的沉浸式康养线路，让"看瑶景、享瑶疗、品瑶味"成为健康养老的新风尚。',
    image: './images/panwangjie/changzhuo-yan.jpg',
    date: '2024-10-18',
    source: '江华民政局'
  },
  {
    id: 'pwj-020',
    title: '盘王节开幕式直播观看破百万',
    category: 'panwangjie',
    type: 'news',
    content: '2024年盘王节开幕式通过网络直播，吸引超过百万人次在线观看。这一千年传统节庆借助现代传播手段，影响力不断扩大。',
    image: './images/panwangjie/2024-shengda-kaimu.jpg',
    date: '2024-11-16',
    source: '江华融媒体'
  },
  {
    id: 'pwj-021',
    title: '盘王节入选全国春季村晚示范点',
    category: 'panwangjie',
    type: 'news',
    content: '江华沱江镇被评为2025年全国春季"村晚"示范点，"大地欢歌·惊蛰赶鸟"瑶歌会成为重点打造的文旅融合发展品牌，盘王节的影响力进一步扩大。',
    image: './images/panwangjie/tongchongkou-fenhui.jpg',
    date: '2025-03-16',
    source: '文旅部'
  },
  {
    id: 'pwj-022',
    title: '盘王殿成为江华文化地标',
    category: 'panwangjie',
    type: 'news',
    content: '被誉为"中国瑶族第一殿"的江华盘王殿，是盘王节祭祀活动的核心场所。殿内供奉盘王神像，是瑶族同胞的精神家园，也是江华重要的文化地标。',
    image: './images/panwangjie/panwang-dian.jpg',
    date: '2024-10-01',
    source: '江华住建局'
  },
  {
    id: 'pwj-023',
    title: '盘王节传承保护工作获省级表彰',
    category: 'panwangjie',
    type: 'news',
    content: '江华在盘王节传承保护工作中的突出表现获得省级表彰。县文旅局相关负责人表示，将继续加大保护力度，让这一千年节庆焕发新的生机。',
    image: './images/panwangjie/panwang-dian.jpg',
    date: '2024-12-10',
    source: '湖南省文旅厅'
  },
  {
    id: 'pwj-024',
    title: '盘王节文创产品热销',
    category: 'panwangjie',
    type: 'news',
    content: '盘王节期间，以盘王形象、瑶族图腾为元素的文创产品热销。从T恤、包包到饰品、文具，这些文创产品让盘王文化以新的形式走进现代生活。',
    image: './images/panwangjie/lvbo-hui.jpg',
    date: '2024-11-18',
    source: '江华商务局'
  },
  // 故事传说类（25-36）
  {
    id: 'pwj-025',
    title: '盘王出世传说',
    category: 'panwangjie',
    type: 'story',
    content: '相传盘王出世在福江，是瑶族人民的共同祖先。盘王教会瑶民狩猎、农耕，带领瑶族先民漂洋过海，寻找安居之地。瑶胞世代传唱的《盘王大歌》，记述了盘王的丰功伟绩。',
    image: './images/panwangjie/panwang-jidian.jpg'
  },
  {
    id: 'pwj-026',
    title: '漂洋过海还盘王愿',
    category: 'panwangjie',
    type: 'story',
    content: '传说瑶族先民在迁徙途中遭遇大风浪，船只几乎倾覆。众人向盘王许愿，如能平安渡海，定当年年祭祀。后来果然风平浪静，先民安全抵达。从此，瑶族人民信守承诺，每年农历十月十六日举行盘王节，还盘王愿。',
    image: './images/panwangjie/piaoyang-guohai.jpg'
  },
  {
    id: 'pwj-027',
    title: '盘王与三公主的爱情故事',
    category: 'panwangjie',
    type: 'story',
    content: '传说盘王原是一条龙犬，因帮助平王杀敌立功，被赐婚三公主。盘王与三公主结为夫妻，生下六男六女，成为瑶族十二姓的祖先。这一传说体现了瑶族人民的祖先崇拜和民族认同。',
    image: './images/panwangjie/aqing-gushi.jpg'
  },
  {
    id: 'pwj-028',
    title: '盘王节的千年传承',
    category: 'panwangjie',
    type: 'story',
    content: '盘王节已有1700多年历史，从早期的宗族祭祀发展到今天的民族盛会，经历了漫长的传承历程。无论时代如何变迁，瑶族人民对祖先的敬仰和对文化的坚守从未改变。',
    image: './images/panwangjie/panwang-dian.jpg'
  },
  {
    id: 'pwj-029',
    title: '桐冲口村的盘王记忆',
    category: 'panwangjie',
    type: 'story',
    content: '桐冲口村是千年瑶寨，早在春秋战国时期就有瑶族先民在此居住。村里的盘王殿见证了无数代人的祭祀活动，每一块石头、每一根梁柱都承载着深厚的历史记忆。',
    image: './images/panwangjie/tongchongkou-fenhui.jpg'
  },
  {
    id: 'pwj-030',
    title: '盘王歌的传说',
    category: 'panwangjie',
    type: 'story',
    content: '《盘王大歌》是瑶族人民的史诗，记述了瑶族的起源、迁徙、生产生活、历史人物等。传说这首歌是盘王亲自传授给瑶民的，世代传唱，成为瑶族文化的根基。',
    image: './images/panwangjie/panwang-jidian.jpg'
  },
  {
    id: 'pwj-031',
    title: '盘王节与瑶族identity',
    category: 'panwangjie',
    type: 'story',
    content: '盘王节是瑶族人民最重要的民族节日，无论身在何处，瑶胞都会在十月十六日这一天聚集在一起，祭祀祖先、共叙亲情。盘王节是瑶族identity的重要标志，是民族团结的精神纽带。',
    image: './images/panwangjie/xungen-zhilv.jpg'
  },
  {
    id: 'pwj-032',
    title: '从传统到现代的盘王节',
    category: 'panwangjie',
    type: 'story',
    content: '传统的盘王节主要是祭祀活动，现代的盘王节则融入了更多文化展示、旅游体验等元素。这种转变既保留了传统文化的核心，又赋予了节庆新的活力，让盘王节在新时代焕发光彩。',
    image: './images/panwangjie/2024-shengda-kaimu.jpg'
  },
  {
    id: 'pwj-033',
    title: '盘王节的仪式变迁',
    category: 'panwangjie',
    type: 'story',
    content: '盘王节的仪式随着时代发展不断变迁。从早期的宗族祭祀到村为单位组织，从单纯的宗教仪式到文化展示活动，盘王节在传承中创新，在创新中发展。',
    image: './images/panwangjie/huanyuan-dadian.jpg'
  },
  {
    id: 'pwj-034',
    title: '海外瑶胞的盘王情结',
    category: 'panwangjie',
    type: 'story',
    content: '分布在老挝、泰国、越南等国家的海外瑶胞，虽然远离故土，但始终保持着对盘王的虔诚敬仰。每年盘王节，他们都会尽可能回国参加祭祀，或者在当地举行庆祝活动，传承民族文化。',
    image: './images/panwangjie/xungen-zhilv.jpg'
  },
  {
    id: 'pwj-035',
    title: '盘王节与乡村振兴',
    category: 'panwangjie',
    type: 'story',
    content: '江华县将盘王节与乡村振兴相结合，通过节庆活动带动乡村旅游、农产品销售等产业发展。盘王节成为推动地方经济发展、促进农民增收的重要平台。',
    image: './images/panwangjie/tongchongkou-fenhui.jpg'
  },
  {
    id: 'pwj-036',
    title: '盘王节的未来展望',
    category: 'panwangjie',
    type: 'story',
    content: '随着非遗保护工作的深入推进，盘王节的传承发展迎来新的机遇。江华县计划进一步挖掘盘王节的文化内涵，提升节庆活动的品质和影响力，让这一千年节庆在新时代绽放更加绚丽的光彩。',
    image: './images/panwangjie/panwang-dian.jpg'
  },
  // 知识类（37-40）
  {
    id: 'pwj-037',
    title: '盘王节的时间与意义',
    category: 'panwangjie',
    type: 'technique',
    content: '农历十月十六日是瑶族盘王节，这一天是盘王的诞辰，也是瑶族人民祭祀祖先、庆祝丰收的重要日子。盘王节承载着瑶族人民的历史记忆、宗教信仰和民族情感。',
    image: './images/panwangjie/panwang-jidian.jpg',
    author: '江华瑶族研究会'
  },
  {
    id: 'pwj-038',
    title: '盘王节的祭祀流程',
    category: 'panwangjie',
    type: 'technique',
    content: '盘王节祭祀包括请神、上供、诵经、跳舞、还愿等环节。祭祀仪式庄重肃穆，由德高望重的师公主持，全体参与者虔诚礼拜，表达对祖先的崇敬和感恩。',
    image: './images/panwangjie/huanyuan-dadian.jpg',
    author: '江华民宗局'
  },
  {
    id: 'pwj-039',
    title: '盘王节的饮食习俗',
    category: 'panwangjie',
    type: 'technique',
    content: '盘王节期间，瑶族人民会准备丰盛的节日食品，包括糯米糍粑、腊肉、瓜箪酒等。这些食品不仅美味可口，更承载着深厚的文化内涵和美好寓意。',
    image: './images/panwangjie/changzhuo-yan.jpg',
    author: '江华文旅局'
  },
  {
    id: 'pwj-040',
    title: '盘王节的服饰要求',
    category: 'panwangjie',
    type: 'technique',
    content: '参加盘王节需要穿着传统瑶族服饰，男子穿对襟短衣、长裤，戴瑶帽；女子穿绣花衣裙，佩戴银饰。服饰的颜色和纹样因支系而异，体现了瑶族文化的多样性。',
    image: './images/panwangjie/yaofu-xunyou.jpg',
    author: '江华瑶族研究会'
  }
];

// 瑶族民歌 - 40条内容
export const minyaoContent: ICHItem[] = [
  // 文艺作品类（1-12）
  {
    id: 'my-001',
    title: '《盘王大歌》史诗演唱',
    category: 'minyao',
    type: 'artwork',
    content: '《盘王大歌》是瑶族人民的史诗，2014年列入第四批国家级非物质文化遗产名录。歌曲记述了瑶族的起源、迁徙、生产生活、历史人物等，堪称瑶族的"荷马史诗"，由国家级传承人赵庚妹等传唱。',
    image: './images/minyao/my-001-panwangdage.jpg',
    date: '2024-10-16',
    author: '赵庚妹'
  },
  {
    id: 'my-002',
    title: '《木龙歌》原生态演唱',
    category: 'minyao',
    type: 'artwork',
    content: '《木龙歌》是江华瑶族民歌的经典曲目，在"福泽潇湘·歌声飘过70年"瑶之声合唱音乐会上精彩呈现。歌曲旋律优美，歌词质朴，表达了瑶族人民对美好生活的向往。',
    image: './images/minyao/my-002-guoshan.jpg',
    date: '2025-11-21',
    author: '江华瑶之声合唱团'
  },
  {
    id: 'my-003',
    title: '《天堂怎比我瑶家》',
    category: 'minyao',
    type: 'artwork',
    content: '"长鼓声声传神话，瑶歌阵阵飘山崖。明月吊脚楼上住，天堂怎比我瑶家……"这首歌曲在2025年"大地欢歌·惊蛰赶鸟"瑶歌会上唱响，表达了瑶族人民对家乡的热爱之情。',
    image: './images/minyao/my-003-hudie.jpg',
    date: '2025-03-16',
    author: '江华民歌队'
  },
  {
    id: 'my-004',
    title: '《寨山号子》混声合唱',
    category: 'minyao',
    type: 'artwork',
    content: '《寨山号子》是瑶之声合唱音乐会的开场曲目，演员们精神饱满，高亢嘹亮的歌声铿锵有力，节奏明快激昂，瞬间点燃现场氛围，展现了瑶族音乐的独特魅力。',
    image: './images/minyao/guoshan-yaoge.jpg',
    date: '2025-11-21',
    author: '江华瑶之声合唱团'
  },
  {
    id: 'my-005',
    title: '过山瑶山歌对唱',
    category: 'minyao',
    type: 'artwork',
    content: '过山瑶山歌是江华瑶族民歌的重要流派，歌声高亢嘹亮，旋律优美动听。在瑶歌会上，民间歌手们以原生态的曲调进行对唱，展现了过山瑶独特的音乐风格。',
    image: './images/minyao/guoshan-yaoge.jpg',
    date: '2025-03-16',
    author: '江华过山瑶歌队'
  },
  {
    id: 'my-006',
    title: '平地瑶山歌展演',
    category: 'minyao',
    type: 'artwork',
    content: '平地瑶山歌与过山瑶山歌风格迥异，歌声清亮婉转，旋律舒缓优美。在瑶之声合唱音乐会上，平地瑶山歌的特色曲目接连登台，让观众领略到瑶族音乐的丰富内涵。',
    image: './images/minyao/pingdi-yaoge.jpg',
    date: '2025-11-21',
    author: '江华平地瑶歌队'
  },
  {
    id: 'my-007',
    title: '蝴蝶歌小组唱',
    category: 'minyao',
    type: 'artwork',
    content: '蝴蝶歌是江华市级非物质文化遗产，以其独特的演唱方式和优美的旋律深受喜爱。在瑶歌会上，女声小组唱的蝴蝶歌如蝴蝶翩翩起舞，轻盈灵动。',
    image: './images/minyao/hudie-xiaozu.jpg',
    date: '2025-03-16',
    author: '江华蝴蝶歌队'
  },
  {
    id: 'my-008',
    title: '锦田寨山歌原生态演唱',
    category: 'minyao',
    type: 'artwork',
    content: '锦田寨山歌是江华特有的民歌流派，保留了最原始的瑶族音乐元素。在"大地欢歌·惊蛰赶鸟"瑶歌会上，锦田寨山歌的原生态演唱让观众仿佛置身于千年瑶寨。',
    image: './images/minyao/jintian-yaoge.jpg',
    date: '2025-03-16',
    author: '锦田寨民歌队'
  },
  {
    id: 'my-009',
    title: '《盛世欢歌》原创歌曲',
    category: 'minyao',
    type: 'artwork',
    content: '《盛世欢歌》是江华为庆祝自治县成立70周年创作的原创歌曲，融合了瑶族传统音乐元素和现代作曲技法，表达了瑶族人民在新时代的幸福生活和对未来的美好憧憬。',
    image: './images/minyao/shouci-yinyuehui.jpg',
    date: '2025-03-16',
    author: '江华歌舞团'
  },
  {
    id: 'my-010',
    title: '梧州歌传统演唱',
    category: 'minyao',
    type: 'artwork',
    content: '梧州歌是江华瑶族民歌的重要分支，流传于梧州一带。歌曲旋律古朴，歌词内容丰富，涉及历史传说、生产生活、爱情婚姻等多个方面，是研究瑶族文化的珍贵资料。',
    image: './images/minyao/pingdi-yaoge.jpg',
    date: '2025-03-16',
    author: '江华梧州歌队'
  },
  {
    id: 'my-011',
    title: '七都歌、八都歌联唱',
    category: 'minyao',
    type: 'artwork',
    content: '七都歌、八都歌是江华特有的民歌类型，分别流传于七都、八都地区。两种歌曲风格各异，在瑶歌会上联唱，展现了江华瑶族音乐的多样性和丰富性。',
    image: './images/minyao/jintian-yaoge.jpg',
    date: '2025-03-16',
    author: '江华七都八都歌队'
  },
  {
    id: 'my-012',
    title: '《讴莎腰》情歌对唱',
    category: 'minyao',
    type: 'artwork',
    content: '"讴莎腰"在瑶语中是指山歌对唱，也是排瑶男女之间表达爱意的方式。在得金石广场上，男女青年通过对歌寻找知音，歌声、笑声与掌声不断，现场气氛热烈。',
    image: './images/minyao/oushayao-qingge.jpg',
    date: '2024-08-15',
    author: '江华青年歌队'
  },
  // 新闻类（13-24）
  {
    id: 'my-013',
    title: '湖南首次举办瑶族民歌合唱音乐会',
    category: 'minyao',
    type: 'news',
    content: '2025年11月21日，湖南省内首次举办的瑶族民歌合唱音乐会在江华民族文化宫精彩上演。音乐会历经两年精心筹备，既坚守瑶歌原生态本真特色，又融入合唱艺术的丰富表现力。',
    image: './images/minyao/shouci-yinyuehui.jpg',
    date: '2025-11-22',
    source: '江华新闻网'
  },
  {
    id: 'my-014',
    title: '湘粤桂鄂四省瑶胞同台飙歌',
    category: 'minyao',
    type: 'news',
    content: '2025年"大地欢歌·惊蛰赶鸟"瑶歌会上，来自湘粤桂鄂四地的28支瑶歌表演队同台飙歌。300多名民间歌手以原生态的瑶歌曲调，共同唱响增强各民族交往交流交融的新瑶歌。',
    image: './images/minyao/shouci-yinyuehui.jpg',
    date: '2025-03-17',
    source: '人民网湖南频道'
  },
  {
    id: 'my-015',
    title: '赵庚妹：盘王大歌传承人',
    category: 'minyao',
    type: 'news',
    content: '赵庚妹是国家级非遗项目《盘王大歌》的代表性传承人，她在社区、学校和旅游景点设立瑶歌传习所，将瑶族文化中关于忠贞、孝道、互助的故事编成歌曲，寓教于乐，传递和谐家庭的价值观。',
    image: './images/minyao/zhaogengmei-chuancheng.jpg',
    date: '2025-08-28',
    source: '今日女报'
  },
  {
    id: 'my-016',
    title: '江华被评为全国春季村晚示范点',
    category: 'minyao',
    type: 'news',
    content: '江华瑶族自治县沱江镇被评为2025年全国春季"村晚"示范点。"大地欢歌·惊蛰赶鸟"瑶歌会是江华重点打造的文旅融合发展品牌，每年吸引上万名观众现场观看。',
    image: './images/minyao/shouci-yinyuehui.jpg',
    date: '2025-03-16',
    source: '中国文化馆协会'
  },
  {
    id: 'my-017',
    title: '瑶歌合唱融入现代元素',
    category: 'minyao',
    type: 'news',
    content: '江华瑶之声合唱团在保留瑶歌原生态特色的基础上，融入合唱艺术的丰富表现力，创新呈现瑶族音乐的别样风采。指导老师杨美英表示，希望让更多人了解、接受并喜爱瑶歌音乐。',
    image: './images/minyao/xiandai-yuansu.jpg',
    date: '2025-11-24',
    source: '央视网'
  },
  {
    id: 'my-018',
    title: '瑶歌会带动江华文旅发展',
    category: 'minyao',
    type: 'news',
    content: '"大地欢歌·惊蛰赶鸟"瑶歌会已成为江华文旅的知名品牌，每年吸引数万游客前来参与。活动期间还组织瑶家美食、瑶医药、瑶族服饰、织锦等展销展示，带动当地经济发展。',
    image: './images/minyao/shouci-yinyuehui.jpg',
    date: '2025-03-18',
    source: '永州新闻网'
  },
  {
    id: 'my-019',
    title: '盘王大歌传承人获国家级认定',
    category: 'minyao',
    type: 'news',
    content: '赵庚妹老师近日获评国家级非物质文化遗产代表性传承人，这是对她在《盘王大歌》传承工作中所做贡献的肯定。她表示将继续努力，让这一瑶族史诗代代相传。',
    image: './images/minyao/zhaogengmei-chuancheng.jpg',
    date: '2024-11-15',
    source: '湖南省文旅厅'
  },
  {
    id: 'my-020',
    title: '瑶歌进校园活动蓬勃开展',
    category: 'minyao',
    type: 'news',
    content: '江华40余所中小学将瑶歌引入校园，通过课堂教学、兴趣小组等形式，让学生学唱瑶族民歌。这一举措既丰富了校园文化生活，又为瑶歌传承培养了后备力量。',
    image: './images/minyao/shouci-yinyuehui.jpg',
    date: '2024-09-01',
    source: '江华教育局'
  },
  {
    id: 'my-021',
    title: '桐冲口村成为瑶歌传承基地',
    category: 'minyao',
    type: 'news',
    content: '千年瑶寨桐冲口村成立《盘王大歌》传承基地，近百人的千年勉瑶古寨醉喜多艺术团定期展演瑶族民歌。这里成为永州市非遗示范村，吸引众多游客前来体验。',
    image: './images/minyao/panwang-dage.jpg',
    date: '2024-06-18',
    source: '大公网'
  },
  {
    id: 'my-022',
    title: '瑶歌与家庭教育融合',
    category: 'minyao',
    type: 'news',
    content: '江华县妇联挖掘《盘王大歌》等非遗中蕴藏的家风家教元素，推动传统文化与现代家庭教育深度融合。很多瑶歌本身就蕴含着治家智慧，教歌的同时也在传递和谐家庭的价值观。',
    image: './images/minyao/zhaogengmei-chuancheng.jpg',
    date: '2025-08-28',
    source: '今日女报'
  },
  {
    id: 'my-023',
    title: '瑶歌数字化保护工作启动',
    category: 'minyao',
    type: 'news',
    content: '江华县启动瑶族民歌数字化保护工作，对全县各流派的瑶歌进行录音录像，建立数字档案。这一工作将有效保护瑶歌这一珍贵的文化遗产，为后人留下宝贵资料。',
    image: './images/minyao/panwang-dage.jpg',
    date: '2024-08-30',
    source: '江华文旅局'
  },
  {
    id: 'my-024',
    title: '瑶歌在国际舞台绽放光彩',
    category: 'minyao',
    type: 'news',
    content: '江华瑶族民歌多次走出国门，在国际文化交流活动中精彩亮相。独特的民族风格和深厚的文化内涵，让瑶歌在国际舞台上赢得广泛赞誉，成为中华文化的重要代表。',
    image: './images/minyao/shouci-yinyuehui.jpg',
    date: '2024-12-15',
    source: '湖南省外侨办'
  },
  // 技法知识类（25-36）
  {
    id: 'my-025',
    title: '瑶族民歌的分类',
    category: 'minyao',
    type: 'technique',
    content: '瑶族民歌按流派可分为过山瑶山歌、平地瑶山歌、蝴蝶歌、锦田寨山歌、梧州歌、七都歌、八都歌等；按内容可分为祭祀歌、劳动歌、情歌、叙事歌等。不同流派风格各异，共同构成瑶族音乐的宝库。',
    image: './images/minyao/panwang-dage.jpg',
    author: '江华文化馆'
  },
  {
    id: 'my-026',
    title: '过山瑶山歌演唱技巧',
    category: 'minyao',
    type: 'technique',
    content: '过山瑶山歌以高亢嘹亮为主要特点，演唱时需要运用假声和真声的转换，声音要穿透力强，能够传得很远。歌手通常站在山头对唱，歌声在山谷间回荡，别有一番风味。',
    image: './images/minyao/guoshan-yaoge.jpg',
    author: '赵庚妹'
  },
  {
    id: 'my-027',
    title: '平地瑶山歌的特点',
    category: 'minyao',
    type: 'technique',
    content: '平地瑶山歌旋律舒缓优美，歌声清亮婉转，多采用真声演唱。歌词内容丰富，涉及生产生活、爱情婚姻、历史传说等多个方面，是平地瑶人民情感表达的重要方式。',
    image: './images/minyao/pingdi-yaoge.jpg',
    author: '江华民歌协会'
  },
  {
    id: 'my-028',
    title: '蝴蝶歌的演唱方式',
    category: 'minyao',
    type: 'technique',
    content: '蝴蝶歌以其独特的演唱方式著称，歌手在演唱时会模仿蝴蝶飞舞的动作，歌声轻盈灵动，如同蝴蝶翩翩起舞。这种歌曲多用于节日庆典和娱乐场合。',
    image: './images/minyao/hudie-yanchang.jpg',
    author: '江华蝴蝶歌队'
  },
  {
    id: 'my-029',
    title: '盘王大歌的演唱程式',
    category: 'minyao',
    type: 'technique',
    content: '《盘王大歌》演唱有严格的程式，通常由德高望重的歌师领唱，众人附和。全歌分为多个章节，演唱时需要按照顺序进行，不能随意更改。一场完整的演唱可能持续数小时甚至数天。',
    image: './images/minyao/panwang-dage.jpg',
    author: '赵庚妹'
  },
  {
    id: 'my-030',
    title: '瑶歌的歌词创作',
    category: 'minyao',
    type: 'technique',
    content: '瑶歌歌词多采用比兴手法，借物抒情，寓意深刻。歌词结构多为七言或五言，讲究押韵和对仗。优秀的歌手往往能够即兴创作，根据场景和情感现场编词演唱。',
    image: './images/minyao/hudie-yanchang.jpg',
    author: '江华文化馆'
  },
  {
    id: 'my-031',
    title: '瑶歌的传承方式',
    category: 'minyao',
    type: 'technique',
    content: '瑶歌传承采用口传心授的方式，由老歌手带年轻歌手，通过反复听唱、模仿练习来掌握。这种传承方式虽然效率较低，但能够保证歌曲的原汁原味，是保护非遗的重要方式。',
    image: './images/minyao/zhaogengmei-chuancheng.jpg',
    author: '赵庚妹'
  },
  {
    id: 'my-032',
    title: '瑶歌与乐器的配合',
    category: 'minyao',
    type: 'technique',
    content: '瑶歌演唱常与长鼓、芦笙、唢呐等乐器配合，形成丰富的音乐效果。不同场合使用不同的乐器组合，如祭祀场合多用长鼓，喜庆场合多用芦笙和唢呐。',
    image: './images/minyao/hudie-xiaozu.jpg',
    author: '江华民乐团'
  },
  {
    id: 'my-033',
    title: '瑶歌的调式特点',
    category: 'minyao',
    type: 'technique',
    content: '瑶族民歌多采用五声音阶，调式以羽调式和徵调式为主。旋律进行多为级进，跳进较少，整体风格平和流畅。不同流派的瑶歌在调式上有所差异，形成各自独特的风格。',
    image: './images/minyao/pingdi-yaoge.jpg',
    author: '江华文化馆'
  },
  {
    id: 'my-034',
    title: '情歌对唱的礼仪',
    category: 'minyao',
    type: 'technique',
    content: '瑶族情歌对唱有严格的礼仪规范，男女青年通过对歌表达爱意时，需要遵循一定的程序。对歌成功后会互赠"拿篮子"、"送蛋子"等作为定情信物，体现了瑶族人民对爱情的尊重。',
    image: './images/minyao/oushayao-qingge.jpg',
    author: '江华民协'
  },
  {
    id: 'my-035',
    title: '瑶歌的录音保存技术',
    category: 'minyao',
    type: 'technique',
    content: '现代技术为瑶歌保护提供了新的手段。通过高清录音、视频拍摄等方式，可以完整记录瑶歌的演唱过程。建立数字档案库，实现瑶歌的永久保存和广泛传播。',
    image: './images/minyao/panwang-dage.jpg',
    author: '江华文旅局'
  },
  {
    id: 'my-036',
    title: '瑶歌的创新发展',
    category: 'minyao',
    type: 'technique',
    content: '在保护传承的基础上，瑶歌也在不断创新。将传统瑶歌与现代音乐元素结合，创作出既保留民族特色又符合现代审美的新作品，让瑶歌在新时代焕发新的生命力。',
    image: './images/minyao/shouci-yinyuehui.jpg',
    author: '江华歌舞团'
  },
  // 故事类（37-40）
  {
    id: 'my-037',
    title: '歌仙刘三妹的传说',
    category: 'minyao',
    type: 'story',
    content: '相传瑶族歌仙刘三妹嗓音甜脆，歌喉婉转。她用甜美的歌声吸引鸟雀，保住了庄稼，赢得了丰收。为了纪念她，瑶族人民在赶鸟节对歌，这一传统延续至今。',
    image: './images/minyao/hudie-xiaozu.jpg'
  },
  {
    id: 'my-038',
    title: '瑶歌与瑶族迁徙史',
    category: 'minyao',
    type: 'story',
    content: '瑶族是一个迁徙民族，瑶歌中记录了大量关于迁徙的历史信息。从瑶歌中，我们可以了解到瑶族先民从北方南迁，辗转进入江华的过程，以及他们在迁徙中的艰辛和坚韧。',
    image: './images/minyao/panwang-dage.jpg'
  },
  {
    id: 'my-039',
    title: '从口头到文字的瑶歌',
    category: 'minyao',
    type: 'story',
    content: '瑶族历史上没有文字，瑶歌全靠口耳相传。直到近代，学者们开始用文字记录整理瑶歌，使这一珍贵的文化遗产得以保存。如今，瑶歌既有口头传承，也有文字记录，保护方式更加多元。',
    image: './images/minyao/panwang-dage.jpg'
  },
  {
    id: 'my-040',
    title: '瑶歌在新时代的使命',
    category: 'minyao',
    type: 'story',
    content: '在新时代，瑶歌不仅是娱乐方式，更承担着传承文化、凝聚民族、促进交流的重要使命。通过瑶歌，瑶族人民表达对美好生活的向往，展示民族文化的独特魅力，为中华文化多样性做出贡献。',
    image: './images/minyao/shouci-yinyuehui.jpg'
  }
];

// 瑶医药 - 40条内容
export const yaoyiyaoContent: ICHItem[] = [
  // 技法疗法类（1-12）
  {
    id: 'yyy-001',
    title: '七箭刺风疗法',
    category: 'yaoyiyao',
    type: 'technique',
    content: '七箭刺风疗法是江华省级非遗项目李氏七箭刺风疗法的核心技术，由传承人李珍清掌握。该疗法通过针刺特定穴位，配合瑶药外敷，治疗风湿骨痛有独特疗效。',
    image: './images/yaoyiyao/yyy-001-huanglanying.jpg',
    author: '李珍清'
  },
  {
    id: 'yyy-002',
    title: '贴丹灵疗法',
    category: 'yaoyiyao',
    type: 'technique',
    content: '贴丹灵是罗振宏瑶医的独门绝技，将特制瑶药制成膏药贴于患处，通过皮肤吸收发挥药效。该疗法对跌打损伤、筋骨疼痛有显著疗效，深受患者好评。',
    image: './images/yaoyiyao/qijian-cifeng.jpg',
    author: '罗振宏'
  },
  {
    id: 'yyy-003',
    title: '瑶医滚蛋疗法',
    category: 'yaoyiyao',
    type: 'technique',
    content: '滚蛋疗法是瑶医独特的治疗方法，将煮熟的鸡蛋去壳，在患处滚动，利用鸡蛋的温热和吸附作用，将体内寒湿邪气吸出。该疗法简单有效，在民间广泛应用。',
    image: './images/yaoyiyao/gundan-liaofa.jpg',
    author: '江华民医协会'
  },
  {
    id: 'yyy-004',
    title: '穴位放血疗法',
    category: 'yaoyiyao',
    type: 'technique',
    content: '瑶医穴位放血疗法通过在特定穴位刺破皮肤放出少量血液，达到疏通经络、活血化瘀的目的。该疗法对高热、中暑、高血压等急症有快速疗效。',
    image: './images/yaoyiyao/qijian-cifeng.jpg',
    author: '江华中医院'
  },
  {
    id: 'yyy-005',
    title: '刮骨接骨疗法',
    category: 'yaoyiyao',
    type: 'technique',
    content: '刮骨接骨是瑶医治疗骨折的传统技法，通过手法复位、夹板固定，配合瑶药外敷内服，促进骨折愈合。该疗法历史悠久，疗效确切，是瑶医药的重要组成部分。',
    image: './images/yaoyiyao/tuina-anmo.jpg',
    author: '江华骨伤科医院'
  },
  {
    id: 'yyy-006',
    title: '瑶药药浴疗法',
    category: 'yaoyiyao',
    type: 'technique',
    content: '瑶药药浴是瑶族人民世代相传的保健方法，用多种瑶药煮水沐浴，可祛风除湿、舒筋活血。产后药浴"三天出工"是瑶族妇女的传统习俗，有助于产后恢复。',
    image: './images/yaoyiyao/yaoyao-yaoyu.jpg',
    author: '江华妇幼保健院'
  },
  {
    id: 'yyy-007',
    title: '火灸疗法',
    category: 'yaoyiyao',
    type: 'technique',
    content: '火灸是瑶医常用的外治疗法，用艾草等药物点燃后在穴位上熏灸，通过温热刺激达到温经散寒、活血通络的效果。该疗法对寒湿痹痛有独特疗效。',
    image: './images/yaoyiyao/huojiu-liaofa.jpg',
    author: '江华中医院'
  },
  {
    id: 'yyy-008',
    title: '药酒浸泡疗法',
    category: 'yaoyiyao',
    type: 'technique',
    content: '瑶医药酒是将多种瑶药浸泡在白酒中制成，具有祛风除湿、活血止痛的功效。不同配方针对不同病症，如风湿药酒、跌打药酒等，是瑶族家庭常备药品。',
    image: './images/yaoyiyao/yaojiu-jinpa.jpg',
    author: '江华民医协会'
  },
  {
    id: 'yyy-009',
    title: '瑶医推拿按摩',
    category: 'yaoyiyao',
    type: 'technique',
    content: '瑶医推拿按摩有独特的手法和理论体系，通过推、拿、按、摩等手法，疏通经络、调和气血。该疗法对颈肩腰腿痛、疲劳恢复等有良好效果。',
    image: './images/yaoyiyao/tuina-anmo.jpg',
    author: '江华康复中心'
  },
  {
    id: 'yyy-010',
    title: '拔罐疗法',
    category: 'yaoyiyao',
    type: 'technique',
    content: '拔罐是瑶医传统外治疗法，利用负压吸附在皮肤上，使局部充血，达到通经活络、祛风散寒的效果。瑶医拔罐多用竹罐或陶罐，具有独特的地方特色。',
    image: './images/yaoyiyao/baguan-liaofa.jpg',
    author: '江华中医院'
  },
  {
    id: 'yyy-011',
    title: '瑶药熏蒸疗法',
    category: 'yaoyiyao',
    type: 'technique',
    content: '瑶药熏蒸是将瑶药煮沸产生的蒸汽用于熏蒸患处或全身，通过热力使药物渗透皮肤，达到治疗效果。该疗法对皮肤病、关节炎等有较好疗效。',
    image: './images/yaoyiyao/yaoyao-yaoyu.jpg',
    author: '江华皮肤科'
  },
  {
    id: 'yyy-012',
    title: '瑶医足疗',
    category: 'yaoyiyao',
    type: 'technique',
    content: '瑶医足疗结合足部反射区理论和瑶药泡脚，通过刺激足部穴位和药物吸收，调理全身机能。该疗法对失眠、疲劳、高血压等有辅助治疗效果。',
    image: './images/yaoyiyao/yaoyao-yaoyu.jpg',
    author: '江华养生馆'
  },
  // 新闻类（13-24）
  {
    id: 'yyy-013',
    title: '百岁瑶医黄兰英亮相央视',
    category: 'yaoyiyao',
    type: 'news',
    content: '2024年10月29日，103岁瑶医黄兰英亮相央视重阳特别节目《霞光满天山河颂》。镜头记录了她上山采药、为乡邻看病、吃饭饮酒的一天日常生活，展现了"老有所乐、老有所为"的动人内涵。',
    image: './images/yaoyiyao/huanglanying-chuanqi.jpg',
    date: '2024-10-29',
    source: '央视网'
  },
  {
    id: 'yyy-014',
    title: '江华举办第八届瑶医药节',
    category: 'yaoyiyao',
    type: 'news',
    content: '2025年6月，江华举办"文化和自然遗产日"暨第八届瑶医药节。29名瑶医现场展示25种瑶医特色技法，10位百岁老人品尝药膳，活动吸引数千名群众参与体验。',
    image: './images/yaoyiyao/dibajie-yaoyiyao.jpg',
    date: '2025-06-01',
    source: '网易新闻'
  },
  {
    id: 'yyy-015',
    title: '瑶医药全产业链产值突破3亿元',
    category: 'yaoyiyao',
    type: 'news',
    content: '2024年，江华瑶医药全产业链产值突破3亿元，中药材种植面积达11.37万亩，年产量超2万吨，种植品种涵盖30余种。江华入选全省第一批道地药材"湘厚朴"种植产区。',
    image: './images/yaoyiyao/jiujie-feng.jpg',
    date: '2024-12-31',
    source: '江华统计局'
  },
  {
    id: 'yyy-016',
    title: '江华获评全国敬老文明号',
    category: 'yaoyiyao',
    type: 'news',
    content: '2025年，江华县被全国老龄工作委员会办公室授予全国"敬老文明号"称号。当地积极构建"县乡村"三级养老服务网络，将瑶医药深度融入康养体系，创新打造"瑶都银发康养"模式。',
    image: './images/yaoyiyao/tongchongkou-kangyang.jpg',
    date: '2025-11-19',
    source: '全国老龄办'
  },
  {
    id: 'yyy-017',
    title: '香草源创建国家级康养旅游示范基地',
    category: 'yaoyiyao',
    type: 'news',
    content: '江华香草源等基地正积极创建国家级中医药健康旅游示范基地，推出"瑶药理疗+瑶家药膳"的沉浸式康养线路，让"看瑶景、享瑶疗、品瑶味"成为健康养老的新风尚。',
    image: './images/yaoyiyao/tongchongkou-kangyang.jpg',
    date: '2024-10-15',
    source: '江华文旅局'
  },
  {
    id: 'yyy-018',
    title: '瑶医药节义诊服务6340人次',
    category: 'yaoyiyao',
    type: 'news',
    content: '自2023年起，江华县民政局联合县民族中医医院，定期在养老机构与社区开展义诊、推拿、足疗与养生讲座等活动，累计服务6340人次，被老人亲切称为"家门口的健康守护"。',
    image: './images/yaoyiyao/dibajie-yaoyiyao.jpg',
    date: '2024-11-30',
    source: '江华民政局'
  },
  {
    id: 'yyy-019',
    title: '桐冲口村成为瑶医药康养基地',
    category: 'yaoyiyao',
    type: 'news',
    content: '千年瑶寨桐冲口村被评为湖南中医药康养旅游示范体验基地，103岁知名瑶医黄兰英在此坐诊。游客可以在景区内体验省级非遗瑶医项目，疗愈身心。',
    image: './images/yaoyiyao/tongchongkou-kangyang.jpg',
    date: '2025-07-07',
    source: '湖南省文旅厅'
  },
  {
    id: 'yyy-020',
    title: '瑶医药风湿骨痛疗法入选省级非遗',
    category: 'yaoyiyao',
    type: 'news',
    content: '江华瑶族医药风湿骨痛疗法入选第三批省级非物质文化遗产代表性项目名录。这一认定是对瑶医药文化价值的肯定，也为瑶医药的保护传承提供了更有力的支持。',
    image: './images/yaoyiyao/qijian-cifeng.jpg',
    date: '2012-12-30',
    source: '湖南省文旅厅'
  },
  {
    id: 'yyy-021',
    title: '李氏七箭刺风疗法入选省级非遗',
    category: 'yaoyiyao',
    type: 'news',
    content: '中医诊疗法（李氏七箭刺风疗法）入选第六批省级非物质文化遗产代表性项目名录。传承人李珍清表示将继续传承发展这一独特疗法，造福更多患者。',
    image: './images/yaoyiyao/qijian-cifeng.jpg',
    date: '2023-12-30',
    source: '湖南省文旅厅'
  },
  {
    id: 'yyy-022',
    title: '瑶医药与康养文旅深度融合',
    category: 'yaoyiyao',
    type: 'news',
    content: '江华县推动瑶医药与康养文旅等业态深度融合，推出"瑶药理疗+瑶家药膳"的沉浸式康养线路。游客可以在欣赏瑶山美景的同时，享受瑶医药的健康服务。',
    image: './images/yaoyiyao/tongchongkou-kangyang.jpg',
    date: '2024-09-20',
    source: '江华文旅局'
  },
  {
    id: 'yyy-023',
    title: '瑶医药成为江华特色产业',
    category: 'yaoyiyao',
    type: 'news',
    content: '江华县将瑶医药发展作为"神州瑶都"内涵建设的关键，推动瑶医药产业链实现跨越式发展。瑶医药已成为江华的特色产业，带动农民增收致富。',
    image: './images/yaoyiyao/jiujie-feng.jpg',
    date: '2024-12-20',
    source: '江华农业农村局'
  },
  {
    id: 'yyy-024',
    title: '瑶医药节药膳展示受欢迎',
    category: 'yaoyiyao',
    type: 'news',
    content: '瑶医药节药膳展示区，瑶神五指毛桃老鸭煲、瑶王石斛护肝汤、艾叶蛋等色泽诱人的菜品兼食疗功效，引得参观者纷纷拍照发抖音，成为活动的一大亮点。',
    image: './images/yaoyiyao/dibajie-yaoyiyao.jpg',
    date: '2025-06-01',
    source: '江华文旅局'
  },
  // 药材知识类（25-36）
  {
    id: 'yyy-025',
    title: '九节风：瑶药瑰宝',
    category: 'yaoyiyao',
    type: 'technique',
    content: '九节风是瑶药中的珍贵药材，具有祛风除湿、活血止痛的功效。瑶药浴"三天出工"配方中，九节风是核心成分，对产后恢复有独特疗效。',
    image: './images/yaoyiyao/jiujie-feng.jpg',
    author: '江华中药材协会'
  },
  {
    id: 'yyy-026',
    title: '半枫荷的药用价值',
    category: 'yaoyiyao',
    type: 'technique',
    content: '半枫荷是瑶药常用药材，具有清热解毒、消肿止痛的功效。在瑶药浴配方中，半枫荷与九节风等药材配伍，增强药效，是瑶族人民世代相传的保健良方。',
    image: './images/yaoyiyao/banfeng-he.jpg',
    author: '江华中药材协会'
  },
  {
    id: 'yyy-027',
    title: '湘厚朴：江华道地药材',
    category: 'yaoyiyao',
    type: 'technique',
    content: '湘厚朴是江华的道地药材，入选全省第一批道地药材种植产区。厚朴具有燥湿消痰、下气除满的功效，是瑶医药和中医药的重要药材。',
    image: './images/yaoyiyao/banfeng-he.jpg',
    author: '江华农业农村局'
  },
  {
    id: 'yyy-028',
    title: '五指毛桃的药膳应用',
    category: 'yaoyiyao',
    type: 'technique',
    content: '五指毛桃是瑶药常用食材，具有健脾补肺、行气利湿的功效。瑶神五指毛桃老鸭煲是瑶医药节的招牌药膳，深受游客喜爱。',
    image: './images/yaoyiyao/banfeng-he.jpg',
    author: '江华药膳协会'
  },
  {
    id: 'yyy-029',
    title: '石斛的养生功效',
    category: 'yaoyiyao',
    type: 'technique',
    content: '石斛是名贵中药材，具有益胃生津、滋阴清热的功效。瑶王石斛护肝汤是瑶医药节的特色药膳，对护肝养胃有良好效果。',
    image: './images/yaoyiyao/banfeng-he.jpg',
    author: '江华药膳协会'
  },
  {
    id: 'yyy-030',
    title: '艾叶的多种用途',
    category: 'yaoyiyao',
    type: 'technique',
    content: '艾叶是瑶药中最常用的药材之一，可内服外用，具有温经止血、散寒止痛的功效。艾叶蛋是瑶医药节的特色小吃，既美味又养生。',
    image: './images/yaoyiyao/huojiu-liaofa.jpg',
    author: '江华民医协会'
  },
  {
    id: 'yyy-031',
    title: '瑶药采集与炮制',
    category: 'yaoyiyao',
    type: 'technique',
    content: '瑶药采集讲究时节，不同药材在不同季节采集效果最佳。炮制方法多样，包括晒干、烘干、炒制、蒸煮等，目的是增强药效、降低毒性、便于保存。',
    image: './images/yaoyiyao/jiujie-feng.jpg',
    author: '江华中药材协会'
  },
  {
    id: 'yyy-032',
    title: '瑶药配伍禁忌',
    category: 'yaoyiyao',
    type: 'technique',
    content: '瑶药配伍有严格的禁忌，某些药材不能同时使用，否则会产生毒副作用。瑶医在用药时会根据患者的体质和病情，精心配伍，确保安全有效。',
    image: './images/yaoyiyao/yaojiu-jinpa.jpg',
    author: '江华中医院'
  },
  {
    id: 'yyy-033',
    title: '瑶药"五症"理论',
    category: 'yaoyiyao',
    type: 'technique',
    content: '瑶医药以"风、寒、湿、热、毒"五症理论为基础，认为疾病是由这五种邪气侵入人体所致。治疗时根据病症性质，采用祛风、散寒、除湿、清热、解毒等方法。',
    image: './images/yaoyiyao/wuzheng-lilun.jpg',
    author: '江华瑶族医药研究会'
  },
  {
    id: 'yyy-034',
    title: '瑶药辨识技巧',
    category: 'yaoyiyao',
    type: 'technique',
    content: '瑶医辨识药材有独特技巧，通过看、闻、摸、尝等方式判断药材的真伪和品质。经验丰富的瑶医能够在野外准确辨识各种药材，这是长期实践积累的能力。',
    image: './images/yaoyiyao/jiujie-feng.jpg',
    author: '江华民医协会'
  },
  {
    id: 'yyy-035',
    title: '瑶药储存方法',
    category: 'yaoyiyao',
    type: 'technique',
    content: '瑶药储存需要避光、干燥、通风，不同药材有不同的储存要求。有些药材需要密封保存，有些则需要悬挂通风。正确的储存方法能够保证药材的药效。',
    image: './images/yaoyiyao/yaojiu-jinpa.jpg',
    author: '江华中药材协会'
  },
  {
    id: 'yyy-036',
    title: '瑶药现代研究进展',
    category: 'yaoyiyao',
    type: 'technique',
    content: '现代科学研究证实了瑶药的药理作用，许多瑶药的有效成分被提取出来，制成现代药品。瑶医药正在走向科学化、规范化，为人类健康做出更大贡献。',
    image: './images/yaoyiyao/banfeng-he.jpg',
    author: '湖南科技学院'
  },
  // 故事类（37-40）
  {
    id: 'yyy-037',
    title: '百岁瑶医黄兰英的传奇人生',
    category: 'yaoyiyao',
    type: 'story',
    content: '黄兰英奶奶今年103岁，仍坚持上山采药、为乡邻看病。她扎根瑶山、带徒传艺、悬壶济世的身影，是江华瑶医药蓬勃发展、生机盎然的真实写照。她常说："开心就笑"，诠释了"老有所乐、老有所为"的动人内涵。',
    image: './images/yaoyiyao/huanglanying-chuanqi.jpg'
  },
  {
    id: 'yyy-038',
    title: '瑶医药的千年传承',
    category: 'yaoyiyao',
    type: 'story',
    content: '瑶医药有着悠久的历史，瑶族先民在漫长的游耕生活中，就地取材，用草药防病治病，形成了独具特色的医药体系。千百年来，瑶医药代代相传，守护着瑶族人民的健康。',
    image: './images/yaoyiyao/huanglanying-chuanqi.jpg'
  },
  {
    id: 'yyy-039',
    title: '从瑶山走向世界的瑶医药',
    category: 'yaoyiyao',
    type: 'story',
    content: '瑶医药从深山瑶寨走向全国乃至世界，经历了从民间医术到民族医学的升华。如今，瑶医药已成为中国民族医药的重要组成部分，在国际交流中展现独特魅力。',
    image: './images/yaoyiyao/tongchongkou-kangyang.jpg'
  },
  {
    id: 'yyy-040',
    title: '瑶医药与瑶族生活方式',
    category: 'yaoyiyao',
    type: 'story',
    content: '瑶医药深深融入瑶族人民的日常生活，从药浴、药膳到日常保健，瑶医药无处不在。这种生活方式体现了瑶族人民与自然和谐相处的智慧，也是瑶医药得以传承发展的重要原因。',
    image: './images/yaoyiyao/yaoyao-yaoyu.jpg'
  }
];

// 所有内容的集合
export const allICHContent: ICHItem[] = [
  ...changguwuContent,
  ...zhijinContent,
  ...panwangjieContent,
  ...minyaoContent,
  ...yaoyiyaoContent
];
