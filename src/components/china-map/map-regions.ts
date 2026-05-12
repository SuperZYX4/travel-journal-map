/**
 * 中国省级行政区地图数据
 * 使用圆形节点表示各省份
 */

export interface Region {
  id: string
  name: string
  // 相对于地图容器的百分比位置
  left: number    // X 百分比 (0-100)
  top: number     // Y 百分比 (0-100)
}

// 著名景点推荐数据
export interface Attraction {
  name: string
  description: string
  image?: string
}

export const attractionsData: Record<string, Attraction[]> = {
  beijing: [
    { name: '故宫', description: '世界上现存规模最大、保存最为完整的木质结构古建筑之一' },
    { name: '长城', description: '中华民族的脊梁，世界七大奇迹之一' },
    { name: '天坛', description: '明清两代帝王祭祀天地、祈福五谷丰登的场所' }
  ],
  tianjin: [
    { name: '天津之眼', description: '世界上唯一建在桥上的摩天轮' },
    { name: '五大道', description: '中国保留最完整的洋楼建筑群' },
    { name: '古文化街', description: '津门十景之一' }
  ],
  hebei: [
    { name: '承德避暑山庄', description: '清代皇帝夏天避暑和处理政务的场所' },
    { name: '山海关', description: '万里长城东部起点' },
    { name: '白洋淀', description: '华北地区最大的淡水湖泊' }
  ],
  shanxi: [
    { name: '平遥古城', description: '中国现存最完整的古代县城' },
    { name: '云冈石窟', description: '中国四大石窟之一' },
    { name: '五台山', description: '佛教四大名山之首' }
  ],
  neimenggu: [
    { name: '呼伦贝尔大草原', description: '世界四大草原之一' },
    { name: '响沙湾', description: '会唱歌的沙子，沙漠中的奇观' },
    { name: '阿尔山', description: '中国北方最美森林' }
  ],
  heilongjiang: [
    { name: '冰雪大世界', description: '世界上最大的冰雪主题乐园' },
    { name: '漠河北极村', description: '中国最北端的村庄' },
    { name: '五大连池', description: '保存最完好的火山地貌' }
  ],
  jilin: [
    { name: '长白山', description: '东北最高峰，松花江、图们江、鸭绿江的发源地' },
    { name: '雾凇岛', description: '中国四大自然奇观之一' },
    { name: '净月潭', description: '亚洲最大的人工森林' }
  ],
  liaoning: [
    { name: '沈阳故宫', description: '中国现存两座完整的宫殿建筑群之一' },
    { name: '金石滩', description: '神力雕塑公园' },
    { name: '红海滩', description: '世界上最大的红色海岸线' }
  ],
  shanghai: [
    { name: '外滩', description: '上海最具代表性的城市景观' },
    { name: '东方明珠', description: '上海的标志性建筑' },
    { name: '豫园', description: '江南古典园林的代表' }
  ],
  jiangsu: [
    { name: '苏州园林', description: '世界文化遗产，江南园林的代表' },
    { name: '南京中山陵', description: '伟大的民主革命先行者孙中山的陵寝' },
    { name: '瘦西湖', description: '享有"园林之盛，甲于天下"的美誉' }
  ],
  zhejiang: [
    { name: '西湖', description: '世界文化遗产，人间天堂' },
    { name: '乌镇', description: '中国最后的枕水人家' },
    { name: '普陀山', description: '佛教四大名山之一' }
  ],
  anhui: [
    { name: '黄山', description: '五岳归来不看山，黄山归来不看岳' },
    { name: '宏村', description: '画里乡村，世界文化遗产' },
    { name: '西递', description: '桃花源里人家' }
  ],
  fujian: [
    { name: '武夷山', description: '世界自然与文化双重遗产' },
    { name: '鼓浪屿', description: '海上花园，万国建筑博览' },
    { name: '土楼', description: '世界建筑史上的奇葩' }
  ],
  jiangxi: [
    { name: '庐山', description: '匡庐奇秀甲天下' },
    { name: '婺源', description: '中国最美的乡村' },
    { name: '井冈山', description: '中国革命的摇篮' }
  ],
  shandong: [
    { name: '泰山', description: '五岳之首，天下第一山' },
    { name: '孔子故里', description: '儒家文化的发源地' },
    { name: '趵突泉', description: '天下第一泉' }
  ],
  henan: [
    { name: '少林寺', description: '天下第一名刹，武术的发源地' },
    { name: '龙门石窟', description: '中国四大石窟之一' },
    { name: '开封府', description: '包拯办公的地方' }
  ],
  hubei: [
    { name: '黄鹤楼', description: '江南三大名楼之一' },
    { name: '三峡大坝', description: '世界上最大的水利枢纽工程' },
    { name: '武当山', description: '道教四大名山之首' }
  ],
  hunan: [
    { name: '张家界', description: '世界地质公园，三千奇峰' },
    { name: '凤凰古城', description: '中国最美小城' },
    { name: '岳麓书院', description: '千年学府' }
  ],
  guangdong: [
    { name: '广州塔', description: '广州新地标' },
    { name: '丹霞山', description: '中国红石公园，世界地质公园' },
    { name: '开平碉楼', description: '世界文化遗产' }
  ],
  guangxi: [
    { name: '桂林山水', description: '桂林山水甲天下' },
    { name: '阳朔西街', description: '地球村，中西文化交融' },
    { name: '德天瀑布', description: '亚洲第一、世界第四大跨国瀑布' }
  ],
  hainan: [
    { name: '天涯海角', description: '爱情圣地' },
    { name: '亚龙湾', description: '天下第一湾' },
    { name: '蜈支洲岛', description: '中国的马尔代夫' }
  ],
  chongqing: [
    { name: '洪崖洞', description: '现实版千与千寻' },
    { name: '解放碑', description: '中国唯一纪念抗战胜利的纪念碑' },
    { name: '武隆天生三桥', description: '世界最大的天生桥群' }
  ],
  sichuan: [
    { name: '九寨沟', description: '童话世界，人间仙境' },
    { name: '峨眉山', description: '普贤菩萨道场' },
    { name: '大熊猫基地', description: '大熊猫的故乡' }
  ],
  guizhou: [
    { name: '黄果树瀑布', description: '亚洲第一大瀑布' },
    { name: '西江千户苗寨', description: '全世界最大苗族聚居村寨' },
    { name: '梵净山', description: '天空之城' }
  ],
  yunnan: [
    { name: '丽江古城', description: '世界文化遗产' },
    { name: '大理古城', description: '风花雪月' },
    { name: '石林', description: '世界地质公园' }
  ],
  xizang: [
    { name: '布达拉宫', description: '世界屋脊上的明珠' },
    { name: '珠穆朗玛峰', description: '世界最高峰' },
    { name: '纳木错', description: '西藏三大圣湖之一' }
  ],
  shaanxi: [
    { name: '秦始皇兵马俑', description: '世界第八大奇迹' },
    { name: '大唐芙蓉园', description: '中国第一个全方位展示盛唐风貌的皇家园林' },
    { name: '华山', description: '奇险天下第一山' }
  ],
  gansu: [
    { name: '莫高窟', description: '世界文化遗产，东方艺术宝库' },
    { name: '月牙泉', description: '天下沙漠第一泉' },
    { name: '张掖丹霞', description: '上帝打翻的调色盘' }
  ],
  qinghai: [
    { name: '青海湖', description: '中国最大的内陆湖、咸水湖' },
    { name: '茶卡盐湖', description: '天空之镜' },
    { name: '塔尔寺', description: '藏传佛教格鲁派六大寺院之一' }
  ],
  ningxia: [
    { name: '沙湖', description: '江南水乡与大漠风光的融合' },
    { name: '西夏王陵', description: '东方金字塔' },
    { name: '镇北堡影视城', description: '中国电影走向世界的地方' }
  ],
  xinjiang: [
    { name: '天山天池', description: '西王母的瑶池' },
    { name: '喀纳斯湖', description: '东方瑞士' },
    { name: '吐鲁番', description: '火洲，中国最低的盆地' }
  ],
  taiwan: [
    { name: '台北故宫博物院', description: '中华文化的宝库' },
    { name: '日月潭', description: '台湾最大的天然湖泊' },
    { name: '阿里山', description: '神木与日出' }
  ],
  hongkong: [
    { name: '维多利亚港', description: '世界三大夜景之一' },
    { name: '迪士尼乐园', description: '童话王国' },
    { name: '太平山顶', description: '俯瞰香港的最佳位置' }
  ],
  macau: [
    { name: '大三巴牌坊', description: '澳门的标志性建筑' },
    { name: '威尼斯人', description: '小赌怡情的代名词' },
    { name: '葡式蛋挞', description: '澳门特色美食' }
  ]
}

// viewBox 600x500 的百分比位置
export const regions: Region[] = [
  // 新疆
  { id: 'xinjiang', name: '新疆', left: 19, top: 28 },
  // 西藏
  { id: 'xizang', name: '西藏', left: 23, top: 65 },
  // 青海
  { id: 'qinghai', name: '青海', left: 31, top: 47 },
  // 四川
  { id: 'sichuan', name: '四川', left: 43, top: 63 },
  // 甘肃
  { id: 'gansu', name: '甘肃', left: 40, top: 35 },
  // 内蒙古
  { id: 'neimenggu', name: '内蒙古', left: 55, top: 23 },
  // 宁夏
  { id: 'ningxia', name: '宁夏', left: 47, top: 43 },
  // 陕西
  { id: 'shaanxi', name: '陕西', left: 53, top: 53 },
  // 重庆
  { id: 'chongqing', name: '重庆', left: 53, top: 72 },
  // 云南
  { id: 'yunnan', name: '云南', left: 50, top: 85 },
  // 贵州
  { id: 'guizhou', name: '贵州', left: 53, top: 80 },
  // 广西
  { id: 'guangxi', name: '广西', left: 62, top: 90 },
  // 广东
  { id: 'guangdong', name: '广东', left: 67, top: 96 },
  // 湖南
  { id: 'hunan', name: '湖南', left: 62, top: 76 },
  // 湖北
  { id: 'hubei', name: '湖北', left: 62, top: 66 },
  // 河南
  { id: 'henan', name: '河南', left: 64, top: 52 },
  // 山西
  { id: 'shanxi', name: '山西', left: 58, top: 42 },
  // 河北
  { id: 'hebei', name: '河北', left: 67, top: 35 },
  // 山东
  { id: 'shandong', name: '山东', left: 75, top: 46 },
  // 江苏
  { id: 'jiangsu', name: '江苏', left: 75, top: 58 },
  // 安徽
  { id: 'anhui', name: '安徽', left: 70, top: 66 },
  // 浙江
  { id: 'zhejiang', name: '浙江', left: 77, top: 76 },
  // 江西
  { id: 'jiangxi', name: '江西', left: 69, top: 81 },
  // 福建
  { id: 'fujian', name: '福建', left: 75, top: 89 },
  // 上海
  { id: 'shanghai', name: '上海', left: 80, top: 68 },
  // 北京
  { id: 'beijing', name: '北京', left: 67, top: 30 },
  // 天津
  { id: 'tianjin', name: '天津', left: 71, top: 32 },
  // 辽宁
  { id: 'liaoning', name: '辽宁', left: 78, top: 28 },
  // 吉林
  { id: 'jilin', name: '吉林', left: 87, top: 20 },
  // 黑龙江
  { id: 'heilongjiang', name: '黑龙江', left: 88, top: 9 },
  // 台湾
  { id: 'taiwan', name: '台湾', left: 85, top: 96 },
  // 海南
  { id: 'hainan', name: '海南', left: 69, top: 95 },
  // 香港
  { id: 'hongkong', name: '香港', left: 74, top: 96 },
  // 澳门
  { id: 'macau', name: '澳门', left: 70, top: 96 }
]

// 获取省份颜色
export const getRegionColor = (isLit: boolean, isHover: boolean): { bg: string; border: string } => {
  if (isLit) {
    return {
      bg: 'rgba(167, 196, 188, 0.95)',
      border: '#5A9A8A'
    }
  }
  if (isHover) {
    return {
      bg: 'rgba(212, 232, 227, 0.95)',
      border: '#8BBFB3'
    }
  }
  return {
    bg: 'rgba(245, 237, 228, 0.9)',
    border: '#C9B99A'
  }
}

// 区域分组
export const regionGroups = {
  dongbei: { name: '东北', ids: ['heilongjiang', 'jilin', 'liaoning'] },
  huabei: { name: '华北', ids: ['beijing', 'tianjin', 'hebei', 'shanxi', 'neimenggu'] },
  huadong: { name: '华东', ids: ['shanghai', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong'] },
  huazhong: { name: '华中', ids: ['henan', 'hubei', 'hunan'] },
  huanan: { name: '华南', ids: ['guangdong', 'guangxi', 'hainan', 'hongkong', 'macau'] },
  xinan: { name: '西南', ids: ['chongqing', 'sichuan', 'guizhou', 'yunnan', 'xizang'] },
  xibei: { name: '西北', ids: ['shaanxi', 'gansu', 'qinghai', 'ningxia', 'xinjiang'] },
  gangao: { name: '港澳台', ids: ['taiwan', 'hongkong', 'macau'] }
}
