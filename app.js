const subjects = {
  chinese: {
    name: "语文",
    edition: "部编版 · 三年级下册",
    symbol: "文",
    color: "#e85d67",
    soft: "#fff0f1",
    shadow: "rgba(232, 93, 103, .22)",
    tagline: "字词句段，阅读表达",
    knowledge: [
      ["字词积累", "易读错、易写错的字和四字词语"],
      ["古诗与日积月累", "理解诗意，背诵并正确默写"],
      ["句子练习", "修改病句、仿写句子、关联词"],
      ["课内阅读", "抓关键词，概括段落主要内容"],
      ["习作表达", "按顺序写清楚，正确使用标点"],
      ["口语交际", "认真倾听，清楚、有礼貌地表达"]
    ],
    questions: [
      { q: "下列词语中，书写完全正确的是哪一项？", options: ["偶尔  花辨", "姿势  欣赏", "仿佛  历害", "秘蜜  苏醒"], answer: 1, explain: "“花辨”应为“花瓣”，“历害”应为“厉害”，“秘蜜”应为“秘密”。" },
      { q: "“迟日江山丽，春风花草香”描写的是哪个季节？", options: ["春季", "夏季", "秋季", "冬季"], answer: 0, explain: "诗中有春风、花草，描写的是春天的景色。" },
      { q: "“荷叶挨挨挤挤的，像一个个碧绿的大圆盘。”这句话用了什么修辞手法？", options: ["拟人", "排比", "比喻", "反问"], answer: 2, explain: "句子把荷叶比作碧绿的大圆盘，是比喻句。" },
      { q: "下列句子中，标点使用正确的是哪一项？", options: ["妈妈问：“作业写完了吗？”", "妈妈问，“作业写完了吗？”", "妈妈问：“作业写完了吗”。", "妈妈问？“作业写完了吗？”"], answer: 0, explain: "提示语在前面时，“问”后用冒号，问句末尾用问号。" },
      { q: "“守株待兔”这个故事告诉我们什么道理？", options: ["做事要有耐心", "不能心存侥幸，要靠劳动获得收获", "要爱护小动物", "跑步时要小心"], answer: 1, explain: "偶然得到一次好处后就不再劳动，是不可能一直有收获的。" },
      { q: "“因释其耒而守株”中，“释”的意思是？", options: ["解释", "释放", "放下", "消失"], answer: 2, explain: "这句话的意思是：于是农夫放下农具，守在树桩旁。" },
      { q: "修改病句：“我估计他今天一定不会来了。”正确的是？", options: ["我估计他今天一定来了。", "我估计他今天不会来了。", "我一定估计他今天不会来了。", "他今天估计一定不会来了。"], answer: 1, explain: "“估计”和“一定”意思矛盾，应删去其中一个。" },
      { q: "写观察日记时，下面哪种做法更好？", options: ["只写结果", "按变化顺序写，并记录自己的发现", "想到哪里写到哪里", "全部抄说明书"], answer: 1, explain: "观察日记要写清观察对象的变化过程和自己的发现。" }
    ]
  },
  math: {
    name: "数学",
    edition: "北师大版 · 三年级下册",
    symbol: "∑",
    color: "#4a8de0",
    soft: "#edf6ff",
    shadow: "rgba(74, 141, 224, .22)",
    tagline: "计算思考，解决问题",
    knowledge: [
      ["除法", "两位数除以一位数，理解余数"],
      ["图形的运动", "认识轴对称、平移和旋转"],
      ["乘法", "两位数乘两位数及实际应用"],
      ["千克、克、吨", "选择合适的质量单位并换算"],
      ["面积", "面积含义、长方形和正方形面积"],
      ["分数", "认识简单分数，比较同分母分数"],
      ["数据整理", "收集、整理数据并读懂表格"]
    ],
    questions: [
      { q: "48 ÷ 4 的结果是多少？", options: ["12", "14", "16", "18"], answer: 0, explain: "因为 12 × 4 = 48，所以 48 ÷ 4 = 12。" },
      { q: "23 × 12 的结果是多少？", options: ["256", "266", "276", "286"], answer: 2, explain: "23 × 12 = 23 × 10 + 23 × 2 = 230 + 46 = 276。" },
      { q: "一个长方形长 8 厘米，宽 5 厘米，它的面积是多少？", options: ["13平方厘米", "26平方厘米", "40平方厘米", "80平方厘米"], answer: 2, explain: "长方形面积 = 长 × 宽，8 × 5 = 40平方厘米。" },
      { q: "5 千克等于多少克？", options: ["50克", "500克", "5000克", "50000克"], answer: 2, explain: "1千克 = 1000克，所以5千克 = 5000克。" },
      { q: "把一张纸平均分成 8 份，涂了 3 份，涂色部分是这张纸的几分之几？", options: ["八分之三", "三分之八", "八分之五", "三分之一"], answer: 0, explain: "平均分成8份，分母是8；取其中3份，分子是3。" },
      { q: "下面的现象属于平移的是哪一个？", options: ["钟表指针转动", "推拉窗户", "风车转动", "车轮转动"], answer: 1, explain: "推拉窗户时，窗扇沿直线移动，属于平移。" },
      { q: "65 ÷ 7 的商和余数分别是多少？", options: ["商8余9", "商9余2", "商7余16", "商10余5"], answer: 1, explain: "7 × 9 = 63，65 - 63 = 2，所以商9余2。" },
      { q: "一头大象约重 4（ ），括号里应填什么单位？", options: ["克", "千克", "吨", "厘米"], answer: 2, explain: "大象很重，通常用“吨”作单位。" }
    ]
  },
  english: {
    name: "英语",
    edition: "人教版 PEP · 三年级下册",
    symbol: "A",
    color: "#ef9f3f",
    soft: "#fff5e8",
    shadow: "rgba(239, 159, 63, .22)",
    tagline: "Words, sentences and reading",
    knowledge: [
      ["Unit 1 School", "国家、人物介绍与同学问候"],
      ["Unit 2 Family", "家庭成员及询问人物身份"],
      ["Unit 3 Animals", "描述动物的高矮、胖瘦和长短"],
      ["Unit 4 Location", "使用 in、on、under 描述位置"],
      ["Unit 5 Fruit", "水果单词与表达喜欢或不喜欢"],
      ["Unit 6 Numbers", "数字 11—20 及询问数量"],
      ["Letters & sounds", "常见元音字母的短音发音"]
    ],
    questions: [
      { q: "你想介绍新朋友 Amy，可以说：", options: ["This is my friend, Amy.", "Where is Amy?", "Goodbye, Amy.", "Thank you, Amy."], answer: 0, explain: "介绍某人时可以用“This is ...”。" },
      { q: "“Who’s that woman?” 的正确回答是：", options: ["She is my mother.", "He is my father.", "It is a dog.", "I am ten."], answer: 0, explain: "woman 是女性，回答用 She is ...。" },
      { q: "The monkey has a _____ tail.", options: ["long", "small", "short", "thin"], answer: 0, explain: "猴子的尾巴通常很长，long 意为“长的”。" },
      { q: "书在书包里面，应说：The book is _____ the bag.", options: ["on", "in", "under", "from"], answer: 1, explain: "in 表示“在……里面”。" },
      { q: "别人问“Do you like pears?”，你喜欢梨，应回答：", options: ["Yes, I do.", "No, I don't.", "Here you are.", "Me, neither."], answer: 0, explain: "肯定回答是“Yes, I do.”。" },
      { q: "How many crayons do you see? 如果看到 15 支，应回答：", options: ["I have fifteen.", "I see fifteen.", "It is fifteen.", "I'm fifteen."], answer: 1, explain: "询问看到多少，用“I see + 数字”回答。" },
      { q: "下列哪个单词表示“祖母”？", options: ["grandmother", "brother", "father", "sister"], answer: 0, explain: "grandmother 可以表示祖母或外祖母。" },
      { q: "选出不同类的一项：", options: ["apple", "banana", "orange", "desk"], answer: 3, explain: "前三项都是水果，desk 是书桌。" }
    ]
  },
  science: {
    name: "科学",
    edition: "通用课程要点 · 三年级下册",
    symbol: "⚗",
    color: "#42ad83",
    soft: "#ebfaf4",
    shadow: "rgba(66, 173, 131, .22)",
    tagline: "观察世界，动手探究",
    knowledge: [
      ["植物生长", "种子萌发需要的条件与植物的一生"],
      ["动物的一生", "昆虫、鸟类等动物的生长变化"],
      ["物体的运动", "用方向、距离和时间描述运动"],
      ["太阳与影子", "影子方向和长短会随时间变化"],
      ["月相变化", "观察并记录月亮形状的变化"],
      ["科学实验", "提出问题、作出假设、观察记录"]
    ],
    questions: [
      { q: "种子萌发通常不需要下面哪个条件？", options: ["适量的水", "适宜的温度", "空气", "强烈的阳光"], answer: 3, explain: "种子萌发一般需要适量的水、适宜的温度和空气，不一定需要强烈阳光。" },
      { q: "蚕的一生经历的正确顺序是？", options: ["卵→幼虫→蛹→成虫", "卵→蛹→幼虫→成虫", "幼虫→卵→蛹→成虫", "蛹→卵→幼虫→成虫"], answer: 0, explain: "蚕的一生要经历卵、幼虫、蛹、成虫四个阶段。" },
      { q: "比较两个物体运动的快慢，可以看相同时间内谁？", options: ["声音大", "运动距离长", "颜色深", "质量大"], answer: 1, explain: "相同时间内，运动距离越长，通常运动得越快。" },
      { q: "一天中，阳光下物体的影子会怎样？", options: ["方向和长短都不变", "只有方向变化", "只有长短变化", "方向和长短都会变化"], answer: 3, explain: "太阳位置不断变化，影子的方向和长短也会随之变化。" },
      { q: "月球本身会发光吗？", options: ["会，和太阳一样", "不会，它反射太阳光", "只有晚上会", "只有满月时会"], answer: 1, explain: "月球本身不发光，我们看到的是它反射的太阳光。" },
      { q: "做对比实验时，正确的做法是？", options: ["一次改变很多条件", "只改变一个研究条件", "不用记录结果", "只做自己喜欢的结果"], answer: 1, explain: "公平的对比实验通常只改变一个条件，其他条件保持相同。" },
      { q: "下面哪种方法能让小球运动得更快？", options: ["把斜面变得更陡", "把斜面变得更缓", "让小球静止", "把路面加长但保持水平"], answer: 0, explain: "一般来说，斜面越陡，小球滚动得越快。" },
      { q: "观察植物生长变化，最合适的方法是？", options: ["只看一次", "每天在相近时间观察并记录", "凭想象填写", "经常更换植物"], answer: 1, explain: "连续、定时观察并记录，才能发现真实的生长变化。" }
    ]
  }
};

subjects.chinese.knowledge.push(
  ["第一单元·可爱的生灵", "《古诗三首》《燕子》《荷花》《昆虫备忘录》：边读边想象画面"],
  ["第二单元·寓言故事", "《守株待兔》《陶罐和铁罐》《鹿角和鹿腿》《池子与河流》：读懂道理"],
  ["第三单元·传统文化", "《古诗三首》《纸的发明》《赵州桥》《一幅名扬中外的画》"],
  ["第四单元·观察与发现", "《花钟》《蜜蜂》《小虾》：借助关键语句概括段意"],
  ["第五单元·大胆想象", "《宇宙的另一边》《我变成了一棵树》：走进想象世界"],
  ["第六单元·多彩童年", "《童年的水墨画》《剃头大师》《肥皂泡》《我不能失信》"],
  ["第七单元·奇妙世界", "《我们奇妙的世界》《海底世界》《火烧云》：了解事物特点"],
  ["第八单元·有趣故事", "《慢性子裁缝和急性子顾客》《漏》《枣核》：复述故事"],
  ["课后生字表", "会认字读准字音，会写字掌握笔顺、结构和组词"],
  ["多音字与形近字", "结合词语辨读音，比较偏旁、字形和字义"],
  ["近义词与反义词", "联系上下文理解并积累常用近义词、反义词"],
  ["词语积累与运用", "成语、AABB/ABAC式词语、动词和修饰语搭配"],
  ["把字句与被字句", "保持句意不变，正确转换句式"],
  ["扩句、缩句与仿写", "抓住句子主干，写具体、写生动"],
  ["转述与提示语", "人称转换，提示语在前、中、后时正确使用标点"],
  ["阅读理解方法", "找中心句、关键词，联系上下文解释词句"],
  ["概括与复述", "按事情起因、经过、结果概括或详细复述"],
  ["习作·我的植物朋友", "写清植物样子、颜色、气味及自己的感受"],
  ["习作·看图画写一写", "按一定顺序观察，写清人物动作和心情"],
  ["习作·中华传统节日", "介绍节日时间、习俗和亲身经历"],
  ["习作·我做了一项小实验", "用先、接着、然后、最后写清实验过程"],
  ["习作·奇妙的想象", "大胆想象，故事有角色、情节和完整结尾"],
  ["习作·身边有特点的人", "通过一两件事突出人物鲜明特点"],
  ["习作·国宝大熊猫", "查找资料，从不同方面准确介绍事物"],
  ["习作·这样想象真有趣", "改变动物特点，编写合理又有趣的故事"]
);

subjects.math.knowledge.push(
  ["除法·口算", "整十、整百数除以一位数及几百几十数的口算"],
  ["除法·竖式", "两位数、三位数除以一位数，理解每一步含义"],
  ["除法·验算", "用商乘除数，或商乘除数再加余数进行验算"],
  ["除法·解决问题", "判断用除法的情境，正确处理余数与实际结果"],
  ["轴对称图形", "找对称轴，判断补全轴对称图形"],
  ["平移与旋转", "辨认生活中的平移、旋转，描述图形运动"],
  ["两位数乘整十数", "理解算理并熟练口算"],
  ["两位数乘两位数", "掌握竖式计算、进位和数位对齐"],
  ["乘法估算与验算", "用估算判断结果范围，用交换因数验算"],
  ["乘法解决问题", "理解每一步表示的意义，解决连乘等问题"],
  ["质量单位", "认识克、千克、吨，知道1千克=1000克、1吨=1000千克"],
  ["质量估计", "根据生活经验选择合适单位并进行简单换算"],
  ["认识面积", "区分周长和面积，理解面积单位的意义"],
  ["面积单位", "认识平方厘米、平方分米、平方米"],
  ["长方形面积", "长方形面积=长×宽，并解决实际问题"],
  ["正方形面积", "正方形面积=边长×边长，并解决实际问题"],
  ["面积单位换算", "1平方米=100平方分米，1平方分米=100平方厘米"],
  ["认识分数", "理解几分之一、几分之几及分子、分母含义"],
  ["分数大小比较", "同分母看分子，同分子结合图形比较"],
  ["同分母分数加减", "分母不变，分子相加减，结果联系图形理解"],
  ["数据整理", "用画符号、表格等方法收集和整理数据"],
  ["读懂数据", "从表格中比较、分析数据并回答实际问题"],
  ["总复习·计算", "口算、竖式、脱式计算及混合运算顺序"],
  ["总复习·应用", "认真审题，找数量关系，分步列式并检验"]
);

subjects.english.knowledge.push(
  ["Unit 1 核心词汇", "UK, Canada, USA, China, student, pupil, teacher"],
  ["Unit 1 核心句型", "Where are you from? I'm from... / Welcome!"],
  ["Unit 2 核心词汇", "father, mother, man, woman, sister, brother, family"],
  ["Unit 2 核心句型", "Who's that man/woman? He/She is..."],
  ["Unit 3 核心词汇", "thin, fat, tall, short, long, small, big"],
  ["Unit 3 核心句型", "Look at... It's so... / It has..."],
  ["Recycle 1", "综合运用人物介绍、家庭成员和动物外形表达"],
  ["Unit 4 核心词汇", "on, in, under, chair, desk, cap, ball, car, boat, map"],
  ["Unit 4 核心句型", "Where is...? It's in/on/under... / Is it...?"],
  ["Unit 5 核心词汇", "pear, apple, orange, banana, watermelon, strawberry, grape"],
  ["Unit 5 核心句型", "Do you like...? Yes, I do. / No, I don't."],
  ["Unit 6 核心词汇", "eleven 至 twenty, kite, beautiful"],
  ["Unit 6 核心句型", "How many... do you see/have? I see/have..."],
  ["Recycle 2", "综合运用位置、水果喜好和数字数量表达"],
  ["语音·a", "cat, bag, dad, hand 中字母 a 的短音"],
  ["语音·e", "ten, pen, leg, red 中字母 e 的短音"],
  ["语音·i", "big, pig, six, milk 中字母 i 的短音"],
  ["语音·o", "dog, box, orange, body 中字母 o 的短音"],
  ["语音·u", "fun, run, duck, under 中字母 u 的短音"],
  ["字母与书写", "认读26个字母，注意大小写和单词规范书写"],
  ["情景交际", "问候、介绍、感谢、邀请品尝、表达惊讶与赞美"],
  ["阅读方法", "先读题，再在短文中圈出人物、数字、位置等关键词"]
);

subjects.science.knowledge.push(
  ["运动和位置", "选择参照物，用前后左右、远近描述物体位置"],
  ["各种各样的运动", "比较直线运动、曲线运动、转动、振动等形式"],
  ["直线运动和曲线运动", "根据运动轨迹判断运动形式"],
  ["物体在斜面上运动", "观察滑动、滚动及斜面坡度对运动的影响"],
  ["比较运动快慢", "相同距离比时间，相同时间比距离"],
  ["我们的过山车", "设计、制作、测试并改进简单运动模型"],
  ["迎接蚕宝宝", "了解蚕卵特点及孵化所需条件"],
  ["认识蚕宝宝", "观察蚕的身体结构、取食和生长变化"],
  ["蚕变了新模样", "认识蚕蛹及幼虫到蛹的变化"],
  ["茧中钻出了蚕蛾", "观察蚕蛾结构、雌雄差异和繁殖"],
  ["动物的一生", "比较昆虫、鸟、鱼、哺乳动物的生命周期"],
  ["我们的一生", "了解人的生长阶段及健康生活的重要性"],
  ["仰望天空", "比较太阳和月球的基本特征"],
  ["阳光下物体的影子", "认识光源、遮挡物和屏，记录影子变化"],
  ["影子的秘密", "探究光照角度、距离对影子方向和长短的影响"],
  ["月相变化规律", "连续观察月相，知道一个变化周期约为一个月"],
  ["月球·地球的卫星", "了解月球表面、运动及人类探索月球"],
  ["地球·水的星球", "知道地球表面海洋多、陆地少"],
  ["科学探究流程", "提出问题、作出假设、制订计划、实验、记录、交流"],
  ["实验安全与记录", "规范使用材料，如实记录数据，不随意修改结果"]
);

const reviewPlan = [
  { title: "语文一二单元", focus: "古诗、生灵与寓言", subjects: ["chinese", "math", "english", "science"], minutes: [25, 20, 15, 10] },
  { title: "数学除法", focus: "口算、竖式、验算", subjects: ["math", "chinese", "english", "science"], minutes: [25, 20, 15, 10] },
  { title: "英语 Unit 1-2", focus: "国家、学校与家庭", subjects: ["english", "chinese", "math", "science"], minutes: [20, 20, 20, 10] },
  { title: "语文三四单元", focus: "传统文化与观察", subjects: ["chinese", "math", "english", "science"], minutes: [25, 20, 15, 10] },
  { title: "数学乘法", focus: "两位数乘两位数", subjects: ["math", "chinese", "english", "science"], minutes: [25, 20, 15, 10] },
  { title: "英语 Unit 3-4", focus: "动物特点与位置", subjects: ["english", "chinese", "math", "science"], minutes: [20, 20, 20, 10] },
  { title: "语文五六单元", focus: "想象与童年生活", subjects: ["chinese", "math", "english", "science"], minutes: [25, 20, 15, 10] },
  { title: "数学面积分数", focus: "面积、质量、分数", subjects: ["math", "chinese", "english", "science"], minutes: [25, 20, 15, 10] },
  { title: "英语 Unit 5-6", focus: "水果、数字和语音", subjects: ["english", "chinese", "math", "science"], minutes: [20, 20, 20, 10] },
  { title: "语文七八单元", focus: "奇妙世界与复述", subjects: ["chinese", "math", "english", "science"], minutes: [25, 20, 15, 15] },
  { title: "四科基础检测", focus: "字词、计算、词汇、概念", subjects: ["chinese", "math", "english", "science"], minutes: [20, 20, 20, 20] },
  { title: "专项查漏补缺", focus: "阅读、应用题、情景交际", subjects: ["chinese", "math", "english", "science"], minutes: [25, 25, 20, 15] },
  { title: "错题二次挑战", focus: "只攻克还不熟的内容", subjects: ["chinese", "math", "english", "science"], minutes: [20, 20, 20, 20] },
  { title: "考前轻量回顾", focus: "背诵清单与易错点", subjects: ["chinese", "math", "english", "science"], minutes: [15, 15, 15, 10] }
];

const planTaskTopics = [
  ["一二单元课文、古诗和寓言", "除法口算热身", "Unit 1 单词和句型", "运动和位置"],
  ["字词与日积月累", "除法竖式、验算和应用", "Unit 2 家庭成员", "运动形式"],
  ["阅读理解小练习", "图形的运动", "Unit 1-2 综合复习", "斜面与运动快慢"],
  ["三四单元课文和传统文化", "乘法口算热身", "Unit 3 动物特点", "蚕的一生前半程"],
  ["修改病句与句式转换", "两位数乘两位数", "语音 a、e", "蚕蛹、蚕蛾与动物一生"],
  ["观察类阅读和实验习作", "质量单位与换算", "Unit 4 位置表达", "人的一生与健康"],
  ["五六单元课文和想象阅读", "面积和面积单位", "Unit 3-4 综合复习", "太阳、月球与影子"],
  ["人物特点与想象习作", "长方形、正方形面积", "语音 i、o", "影子的秘密"],
  ["古诗、课文背诵与默写", "认识分数和大小比较", "Unit 5 水果和喜好", "月相变化"],
  ["七八单元课文与故事复述", "分数加减和数据整理", "Unit 6 数字和数量", "地球与月球"],
  ["字词、古诗基础检测", "计算基础检测", "词汇、语音检测", "核心概念检测"],
  ["阅读与习作专项", "应用题与图形专项", "情景交际与阅读专项", "实验探究专项"],
  ["语文错题再练", "数学错题再练", "英语错题再练", "科学错题再练"],
  ["背诵、字词和习作提纲", "公式、单位和易错计算", "核心单词与句型", "概念图轻松回顾"]
];

const featuredKnowledge = [
  { chinese: [6, 7, 1, 14], math: [7, 14], english: [7, 8], science: [6, 7] },
  { math: [7, 8, 9, 10], chinese: [14, 15], english: [9, 10], science: [6, 7] },
  { english: [7, 8, 9, 10, 13], chinese: [16, 17], math: [11, 12], science: [8, 9] },
  { chinese: [8, 9, 16, 22], math: [13, 14], english: [11, 12], science: [10, 11] },
  { math: [13, 14, 15, 16], chinese: [17, 18], english: [21, 22], science: [12, 13] },
  { english: [11, 12, 13, 14, 16], chinese: [19, 20], math: [17, 18], science: [14, 15] },
  { chinese: [10, 11, 21, 23], math: [19, 20], english: [13, 14], science: [16, 17] },
  { math: [19, 20, 21, 22, 23], chinese: [24, 25], english: [23, 24], science: [18, 19] },
  { english: [15, 16, 17, 18, 25], chinese: [1, 15], math: [24, 25], science: [20, 21] },
  { chinese: [12, 13, 17, 29], math: [24, 25, 26, 27], english: [17, 18, 19, 20], science: [22, 23] },
  { chinese: [14, 15, 16], math: [7, 13, 19], english: [7, 11, 15], science: [6, 12, 18] },
  { chinese: [17, 18, 19, 20], math: [10, 16, 23, 30], english: [20, 27, 28], science: [19, 24, 25] },
  { chinese: [0, 2, 3, 17], math: [0, 2, 5, 6], english: [0, 1, 2, 3], science: [0, 1, 2, 5] },
  { chinese: [1, 14, 15, 20], math: [9, 16, 20, 29], english: [19, 20, 21, 22], science: [17, 18, 24, 25] }
];

const writingSamples = {
  "我的植物朋友": {
    title: "范文：《美丽的桃花》",
    text: "春天来了，小区里的桃花开了。\n远远望去，桃树像披上了一件粉红色的外衣。走近一看，一朵朵桃花挨挨挤挤，有的才展开两三片花瓣，有的全开了，露出嫩黄色的花蕊，还有的只是花骨朵儿。微风吹来，淡淡的清香钻进我的鼻子里，花瓣轻轻摇动，好像在向我招手。\n我喜欢桃花，因为它把春天装点得格外美丽。"
  },
  "看图画写一写": {
    title: "范文片段：《快乐的放风筝》",
    text: "星期天，天空蓝蓝的，草地像一块绿色的大地毯。小明一手拿着线轴，一手拉着风筝线，飞快地向前跑。小刚高高举起燕子风筝，等风一来就松开手。风筝越飞越高，他们仰着头，开心地笑了。远处，一家三口也在放风筝，草地上到处都是欢声笑语。"
  },
  "中华传统节日": {
    title: "范文：《难忘的端午节》",
    text: "农历五月初五是端午节。早上，奶奶把泡好的糯米、红枣和粽叶摆在桌上。她先把粽叶卷成漏斗形，再放进糯米和红枣，最后用绳子扎紧。我也学着包，可糯米总是偷偷跑出来，逗得大家哈哈大笑。中午，我们吃着香喷喷的粽子，还听爷爷讲屈原的故事。这个端午节既热闹又有意义。"
  },
  "我做了一项小实验": {
    title: "范文：《会“游泳”的鸡蛋》",
    text: "我准备了一个透明杯、一个鸡蛋、一些盐和一根筷子。先把清水倒进杯子，再轻轻放入鸡蛋，鸡蛋马上沉到了杯底。接着，我一勺一勺地加盐，并用筷子慢慢搅拌。过了一会儿，鸡蛋竟然浮了起来！原来，盐水的浮力比清水大。这个实验让我感受到科学真奇妙。"
  },
  "奇妙的想象": {
    title: "范文片段：《会飞的小房子》",
    text: "一天早上，我家的小房子突然长出了一对彩色翅膀。它轻轻一扇，就带着我飞上了天空。我们越过高山，飞过大海，还停在云朵上休息。云朵软绵绵的，像一张大床。傍晚，小房子把迷路的小鸟送回了家。回到地面时，它悄悄收起翅膀，好像什么也没发生过。"
  },
  "身边有特点的人": {
    title: "范文片段：《我们班的“小书虫”》",
    text: "我们班的小雨特别爱看书。下课铃一响，同学们都跑出去玩，她却从抽屉里拿出书，安安静静地读起来。有一次，大家排队去操场，她看得太入迷，直到老师喊她的名字才抬起头。她读过的故事很多，同学遇到不懂的问题都喜欢问她。“小书虫”这个称号真适合她。"
  },
  "国宝大熊猫": {
    title: "范文片段：《可爱的大熊猫》",
    text: "大熊猫主要生活在我国四川、陕西和甘肃的山区。它有圆圆的脑袋、黑黑的耳朵，眼睛周围像戴着一副墨镜。大熊猫最爱吃竹子，也会吃一些其他植物。它看起来胖乎乎的，走路慢悠悠，但爬树的本领可不小。大熊猫数量稀少，是我国珍贵的国宝。"
  },
  "这样想象真有趣": {
    title: "范文片段：《胆小的大老虎》",
    text: "森林里住着一只胆小的大老虎。树叶落到背上，它以为怪兽来了；小兔从草丛里跳出来，它吓得躲到石头后面。一天，小松鼠掉进深坑，大家都不敢靠近。老虎虽然害怕，还是咬紧牙关放下长藤，把小松鼠救了上来。从那以后，它明白了：勇敢不是不害怕，而是害怕时仍愿意帮助别人。"
  }
};

const storageKey = "grade3-final-review-v1";
const defaultState = {
  completedKnowledge: {},
  completedTasks: [],
  mistakes: [],
  quizzes: 0,
  correct: 0,
  answered: 0,
  lastStudyDate: "",
  streak: 1,
  sound: true
  ,planStartDate: ""
  ,completedPlanTasks: []
};

let state = loadState();
let currentSubject = "chinese";
let currentQuiz = [];
let questionIndex = 0;
let quizScore = 0;
let quizSource = "chinese";
let quizPlanDay = null;
let currentPlanDay = 0;
let currentDetail = { subjectKey: "chinese", index: 0, back: "subject" };
let currentDayFocus = "";

const pages = {
  home: document.getElementById("homePage"),
  subject: document.getElementById("subjectPage"),
  day: document.getElementById("dayPage"),
  detail: document.getElementById("detailPage"),
  quiz: document.getElementById("quizPage"),
  result: document.getElementById("resultPage"),
  mistakes: document.getElementById("mistakesPage"),
  progress: document.getElementById("progressPage")
};

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(storageKey)) };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function recordStudyDay() {
  const today = new Date();
  const dateKey = getLocalDateKey(today);
  if (!state.planStartDate) state.planStartDate = dateKey;
  if (state.lastStudyDate === dateKey) return;

  if (state.lastStudyDate) {
    const previous = new Date(state.lastStudyDate);
    const difference = Math.round((today - previous) / 86400000);
    state.streak = difference === 1 ? state.streak + 1 : 1;
  }
  state.lastStudyDate = dateKey;
  saveState();
}

function getLocalDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getElapsedPlanDays() {
  const start = new Date(`${state.planStartDate || getLocalDateKey(new Date())}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.max(0, Math.round((today - start) / 86400000));
}

function getPlanDayIndex() {
  return Math.min(13, getElapsedPlanDays());
}

function showPage(name) {
  Object.values(pages).forEach(page => page.classList.remove("active"));
  pages[name].classList.add("active");
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.page === name);
  });
  if (name === "home") renderHome();
  if (name === "mistakes") renderMistakes();
  if (name === "progress") renderProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getSubjectProgress(key) {
  const done = state.completedKnowledge[key]?.length || 0;
  return Math.round((done / subjects[key].knowledge.length) * 100);
}

function renderHome() {
  document.getElementById("streakCount").textContent = state.streak;
  document.getElementById("soundButton").textContent = state.sound ? "♫" : "×";

  const planDay = getPlanDayIndex();
  const todayPlan = reviewPlan[planDay];
  const daysLeft = Math.max(0, 14 - getElapsedPlanDays());
  document.getElementById("daysLeft").textContent = daysLeft;
  document.getElementById("daysLeftText").textContent = daysLeft;
  document.getElementById("planProgressText").textContent = `第 ${planDay + 1} 天`;
  document.getElementById("planProgress").style.width = `${((planDay + 1) / 14) * 100}%`;
  document.getElementById("countdownMessage").textContent = daysLeft === 0
    ? "考试日到了，认真审题，相信自己的准备！"
    : planDay < 10
      ? "先把整册基础过一遍，慢一点也没关系。"
      : "进入综合冲刺阶段，重点回看错题和不熟的知识。";

  const tasks = todayPlan.subjects.map((key, index) => {
    const subject = subjects[key];
    const taskId = `${planDay}-${key}`;
    const done = state.completedPlanTasks.includes(taskId);
    return `
      <button class="task-card ${done ? "done" : ""}" data-subject="${key}" data-task-id="${taskId}">
        <span class="task-icon" style="background:${subject.color}">${done ? "✓" : subject.symbol}</span>
        <span>
          <strong>${planTaskTopics[planDay][index]}</strong>
          <small>${done ? "今日已完成" : `${subject.name} · ${todayPlan.minutes[index]} 分钟`}</small>
        </span>
      </button>`;
  }).join("");
  document.getElementById("dailyTasks").innerHTML = tasks;

  const taskCount = todayPlan.subjects.filter(key => state.completedPlanTasks.includes(`${planDay}-${key}`)).length;
  document.getElementById("todayDone").textContent = taskCount;
  document.getElementById("todayProgress").style.width = `${taskCount * 25}%`;

  document.getElementById("planGrid").innerHTML = reviewPlan.map((day, index) => {
    const completedCount = day.subjects.filter(key => state.completedPlanTasks.includes(`${index}-${key}`)).length;
    const statusClass = index === planDay ? "current" : index < planDay ? "past" : "";
    return `
      <button class="plan-day ${statusClass}" data-plan-day="${index}">
        <span class="plan-day-number">DAY ${index + 1}${completedCount === 4 ? " · ✓" : ""}</span>
        <strong>${day.title}</strong>
        <small>${day.focus}</small>
      </button>`;
  }).join("");

  document.getElementById("subjectGrid").innerHTML = Object.entries(subjects).map(([key, subject]) => {
    const progress = getSubjectProgress(key);
    return `
      <button class="subject-card" data-subject="${key}" style="--accent:${subject.color};--soft:${subject.soft};--shadow-color:${subject.shadow}">
        <span class="subject-symbol">${subject.symbol}</span>
        <h3>${subject.name}</h3>
        <p>${subject.edition}</p>
        <div class="subject-meta">
          <div class="mini-progress"><span style="width:${progress}%"></span></div>
          <span>${progress}%</span>
        </div>
      </button>`;
  }).join("");

  document.querySelectorAll(".subject-card").forEach(button => {
    button.addEventListener("click", () => openSubject(button.dataset.subject));
  });
  document.querySelectorAll(".task-card").forEach(button => {
    button.addEventListener("click", () => openDayCourse(planDay, button.dataset.subject));
  });
  document.querySelectorAll("[data-plan-day]").forEach(button => {
    button.addEventListener("click", () => {
      openDayCourse(Number(button.dataset.planDay));
    });
  });
}

function getDayKnowledge(dayIndex, subjectKey) {
  const subject = subjects[subjectKey];
  const featured = featuredKnowledge[dayIndex]?.[subjectKey] || [];
  const desiredCount = reviewPlan[dayIndex].subjects[0] === subjectKey ? 4 : 3;
  const result = featured.filter(index => index < subject.knowledge.length);
  let offset = dayIndex * 3 + Object.keys(subjects).indexOf(subjectKey);
  while (result.length < desiredCount) {
    const index = offset % subject.knowledge.length;
    if (!result.includes(index)) result.push(index);
    offset += 1;
  }
  return result.slice(0, desiredCount);
}

function openDayCourse(dayIndex, focusKey = "") {
  currentPlanDay = dayIndex;
  currentDayFocus = focusKey;
  const day = reviewPlan[dayIndex];
  document.getElementById("dayCourseBanner").innerHTML = `
    <span class="eyebrow" style="color:#dcd8ff">DAY ${dayIndex + 1} · ${day.minutes.reduce((sum, value) => sum + value, 0)} 分钟</span>
    <h1>${day.title}</h1>
    <p>${day.focus}。先学习下面的知识卡，再完成对应科目的小测。</p>`;

  const orderedSubjects = focusKey
    ? [focusKey, ...day.subjects.filter(key => key !== focusKey)]
    : day.subjects;
  document.getElementById("dayCourseList").innerHTML = orderedSubjects.map(key => {
    const subject = subjects[key];
    const planPosition = day.subjects.indexOf(key);
    const indices = getDayKnowledge(dayIndex, key);
    const done = state.completedPlanTasks.includes(`${dayIndex}-${key}`);
    return `
      <section class="day-subject-section" style="--accent:${subject.color}">
        <div class="day-subject-head">
          <div class="day-subject-title">
            <span>${done ? "✓" : subject.symbol}</span>
            <div>
              <h2>${subject.name} · ${planTaskTopics[dayIndex][planPosition]}</h2>
              <p>建议 ${day.minutes[planPosition]} 分钟 · ${done ? "练习已完成" : "学完知识卡后做小测"}</p>
            </div>
          </div>
          <button class="primary-button day-quiz-button" data-day-quiz="${key}">完成本科学习并答题</button>
        </div>
        <div class="day-lesson-grid">
          ${indices.map(index => {
            const item = subject.knowledge[index];
            return `
              <button class="day-lesson-card" data-day-lesson="${key}" data-index="${index}">
                <strong>${item[0]}</strong>
                <small>${item[1]}</small>
              </button>`;
          }).join("")}
        </div>
      </section>`;
  }).join("");

  document.querySelectorAll(".day-lesson-card").forEach(button => {
    button.addEventListener("click", () => {
      openKnowledgeDetail(button.dataset.dayLesson, Number(button.dataset.index), "day");
    });
  });
  document.querySelectorAll(".day-quiz-button").forEach(button => {
    button.addEventListener("click", () => startQuiz(button.dataset.dayQuiz, false, currentPlanDay));
  });
  showPage("day");
}

function openSubject(key) {
  currentSubject = key;
  const subject = subjects[key];
  document.getElementById("subjectBanner").style.background = `linear-gradient(135deg, ${subject.color}, ${adjustColor(subject.color, -22)})`;
  document.getElementById("subjectBanner").innerHTML = `
    <span class="eyebrow" style="color:rgba(255,255,255,.72)">FINAL REVIEW</span>
    <h1>${subject.symbol} ${subject.name}复习</h1>
    <p>${subject.edition} · ${subject.tagline}</p>`;
  renderKnowledge();
  showPage("subject");
}

function renderKnowledge() {
  const subject = subjects[currentSubject];
  const completed = state.completedKnowledge[currentSubject] || [];
  document.getElementById("knowledgeProgress").textContent = `${completed.length}/${subject.knowledge.length} 已掌握`;
  document.getElementById("knowledgeList").innerHTML = subject.knowledge.map((item, index) => `
    <div class="knowledge-item ${completed.includes(index) ? "done" : ""}" data-index="${index}">
      <button class="knowledge-check" data-check="${index}" aria-label="标记掌握">${completed.includes(index) ? "✓" : index + 1}</button>
      <span><strong>${item[0]}</strong><small>${item[1]}</small></span>
      <span>›</span>
    </div>
  `).join("");

  document.querySelectorAll(".knowledge-item").forEach(item => {
    item.addEventListener("click", () => openKnowledgeDetail(currentSubject, Number(item.dataset.index), "subject"));
  });
  document.querySelectorAll("[data-check]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      toggleKnowledge(Number(button.dataset.check));
    });
  });
}

function openKnowledgeDetail(subjectKey, index, back = "subject") {
  currentDetail = { subjectKey, index, back };
  const subject = subjects[subjectKey];
  const item = subject.knowledge[index];
  const content = buildLessonContent(subjectKey, item[0], item[1]);
  document.getElementById("lessonHeading").innerHTML = `
    <span class="eyebrow" style="color:${subject.color}">一起学${subject.name}</span>
    <h1>${item[0]}</h1>
    <p>${item[1]}</p>`;
  document.getElementById("lessonExplanation").innerHTML = content.explanation;
  document.getElementById("lessonExample").innerHTML = content.example;
  document.getElementById("lessonTip").innerHTML = content.tip;
  document.getElementById("lessonTipBlock").classList.toggle("hidden", subjectKey === "math" || !content.tip);
  updateMarkButton();
  showPage("detail");
}

function buildLessonContent(subjectKey, title, description) {
  if (subjectKey === "chinese") return buildChineseLesson(title, description);
  if (subjectKey === "math") return buildMathLesson(title, description);
  if (subjectKey === "english") return buildEnglishLesson(title, description);
  return buildScienceLesson(title, description);
}

const chineseUnitLessons = {
  "第一单元": {
    words: "《燕子》：伶俐、翼尖、荡漾、闲散、纤细、痕迹；《荷花》：挨挨挤挤、莲蓬、饱胀、破裂、姿势、仿佛、翩翩起舞；《昆虫备忘录》：琢磨、款款、严丝合缝、膜翅、益虫。",
    recite: "完整背诵《绝句》《惠崇春江晚景》《三衢道中》；重点背诵《燕子》第1—3自然段和《荷花》第2—4自然段。",
    focus: "读这些课文时，要一边读一边在脑海里“放电影”，找出颜色、动作、样子等词语，感受春天和小生灵的可爱。"
  },
  "第二单元": {
    words: "《守株待兔》：耕者、释、耒、冀、复得；《陶罐和铁罐》：骄傲、谦虚、懦弱、恼怒、荒凉；《鹿角和鹿腿》：匀称、精美别致、抱怨、逼近、挣脱；《池子与河流》：蜿蜒、贯穿、遵循、安逸、衰退。",
    recite: "完整背诵文言文《守株待兔》，会解释“走、因、释、冀”在文中的意思。",
    focus: "每则寓言都藏着一个道理。你要会说清楚：主人公做了什么、结果怎样、我明白了什么。"
  },
  "第三单元": {
    words: "《元日》：屠苏、曈曈、新桃、旧符；《清明》：断魂、借问、遥指；《纸的发明》：创造、携带、积累、保存、欧洲；《赵州桥》：设计、创举、横跨、坚固、美观、缠绕；《一幅名扬中外的画》：摊贩、官吏、形态各异、悠闲。",
    recite: "完整背诵《元日》《清明》《九月九日忆山东兄弟》；重点背诵《赵州桥》第3自然段。",
    focus: "这一单元讲中华传统文化。复习时要会说节日习俗、纸的发明过程、赵州桥的特点和《清明上河图》的画面内容。"
  },
  "第四单元": {
    words: "《花钟》：芬芳、争奇斗艳、苏醒、灼伤、吻合；《蜜蜂》：辨认、阻力、跨进、检查、准确无误；《小虾》：缸、隙、掀开、末端、搏斗、较大。",
    recite: "重点背诵《花钟》第1自然段，注意不同花开放时的不同写法。",
    focus: "学习作者怎样认真观察。概括一段话时，可以先找中心句，再看看后面的句子怎样围绕中心句写具体。"
  },
  "第五单元": {
    words: "《宇宙的另一边》：浩瀚、汩汩、气喘吁吁、思绪；《我变成了一棵树》：希望、继续、秘密、香喷喷、丁零丁零。",
    recite: "本单元以理解和想象为主，没有统一要求整篇背诵的现代课文。",
    focus: "大胆想象不是随便乱想。先改变一个平常的规则，再想想会发生哪些有趣而连贯的事情。"
  },
  "第六单元": {
    words: "《童年的水墨画》：垂柳、扑腾、戏耍、拨动、浪花；《剃头大师》：监督、冤家、摆布、锃亮；《肥皂泡》：廊子、和弄、黏稠、颤巍巍、光影零乱；《我不能失信》：歉意、道歉、盼着。",
    recite: "重点背诵《童年的水墨画》中的《溪边》。其他篇目会用自己的话说主要内容。",
    focus: "抓住人物的动作、语言和心情，体会童年生活的快乐，也要理解宋庆龄诚实守信的品质。"
  },
  "第七单元": {
    words: "《我们奇妙的世界》：呈现、变幻、光芒、模型、雕饰；《海底世界》：窃窃私语、警报、肌肉、细胞、蕴藏；《火烧云》：紫檀色、红彤彤、金灿灿、恍恍惚惚。",
    recite: "重点背诵《火烧云》第3—6自然段，积累描写颜色和形状变化的词句。",
    focus: "会从天空、大地、海底等不同方面找事物的特点，知道作者是怎样按顺序写清楚的。"
  },
  "第八单元": {
    words: "《慢性子裁缝和急性子顾客》：负责、泄气、夸奖、服务、衬衫；《漏》：脊背、旋风、颠倒、粘胶、偏偏；《枣核》：勤快、扶犁、牲口、折腾、善罢甘休。",
    recite: "本单元重点是复述故事。记住故事发生的先后顺序，不要求背诵整篇现代课文。",
    focus: "用“谁—想做什么—遇到什么—结果怎样”把故事讲完整。人物说过的重要话也可以保留下来。"
  }
};

const mathLessons = {
  "除法": ["把一个数平均分成几份，或看里面有几个同样大的数，都可以用除法。余数一定要比除数小。", "例：65÷7=9……2。7×9=63，还剩2；2比7小，所以答案正确。"],
  "除法·口算": ["整十、整百数除以一位数，可以先把末尾的0暂时放一放，算前面的数，再把0补回来。", "例：240÷3。先算24÷3=8，再在8后面添0，得到80。"],
  "除法·竖式": ["从最高位除起。哪一位不够除，就和下一位合起来再除；商要写在正在除的那一位上面。", "例：84÷4。8个十除以4得2个十，4个一除以4得1个一，所以商是21。"],
  "除法·验算": ["没有余数：商×除数=被除数。有余数：商×除数+余数=被除数。", "例：96÷7=13……5。验算：13×7+5=91+5=96。"],
  "除法·解决问题": ["先判断是“平均分”还是“几个一组”。有余数时，要看题目决定舍去、保留还是再加1。", "例：50人坐船，每船坐6人。50÷6=8……2，剩下2人也需要一条船，所以要9条船。"],
  "图形的运动": ["图形可以平移、旋转，也可能是轴对称图形。运动后，图形的大小和形状通常不变。", "推拉抽屉是平移，风车转动是旋转，剪出的蝴蝶两边重合是轴对称。"],
  "轴对称图形": ["把图形沿一条直线对折，如果两边完全重合，它就是轴对称图形，这条直线叫对称轴。", "长方形有2条对称轴，正方形有4条，普通平行四边形不是轴对称图形。"],
  "平移与旋转": ["平移是沿直线移动，方向可以不同；旋转是绕一个点或一条轴转动。", "电梯上下移动是平移；钟表指针绕中心转动是旋转。"],
  "乘法": ["两位数乘两位数，可以把一个因数拆成整十数和一位数，分别相乘后再相加。", "23×12=23×10+23×2=230+46=276。"],
  "两位数乘整十数": ["先算两位数乘整十数中0前面的数，再在积的末尾添1个0。", "32×20：先算32×2=64，再添1个0，得到640。"],
  "两位数乘两位数": ["竖式先用第二个因数个位上的数去乘，再用十位上的数去乘。十位乘出的部分积要向左错一位。", "24×13：24×3=72，24×10=240，72+240=312。"],
  "乘法估算与验算": ["估算时把因数看成接近的整十数。验算可以交换两个因数的位置再乘一次。", "39×21约等于40×20=800，所以准确结果不可能只有80。"],
  "乘法解决问题": ["遇到“每份有多少、有几份”，求总数用乘法。连乘题要说清每一步求的是什么。", "每盒12支笔，每箱20盒，3箱有多少支？12×20=240支，240×3=720支。"],
  "千克、克、吨": ["克称很轻的物品，千克称一般物品，吨称很重的大物体。1千克=1000克，1吨=1000千克。", "一枚硬币约6克，一名三年级学生约30千克，一头大象约4吨。"],
  "质量单位": ["选择单位要先想物品大约有多重，再比较克、千克、吨谁最合适。换算时，相邻两个单位之间是1000。", "3千克=3000克；5000千克=5吨。"],
  "质量估计": ["估计不是乱猜，要用熟悉的物品作标准。例如一袋盐约500克，两袋约1千克。", "一个苹果约200克，5个这样的苹果大约重1千克。"],
  "面积": ["面积是物体表面或封闭图形的大小。周长是边线一圈的长度，面积是里面有多大。", "给长方形涂颜色，涂到的部分表示面积；沿四条边走一圈，走过的长度表示周长。"],
  "认识面积": ["比较面积可以观察、重叠，也可以用同样大的小方格去铺。必须用大小相同的方格才公平。", "两个图形都铺满1平方厘米的小方格，谁用的方格多，谁的面积大。"],
  "面积单位": ["边长1厘米的正方形面积是1平方厘米；边长1分米的是1平方分米；边长1米的是1平方米。", "指甲盖约1平方厘米，课桌面约几十平方分米，教室地面约几十平方米。"],
  "长方形面积": ["一行能摆“长”个面积单位，一共有“宽”行，所以长方形面积=长×宽。", "长8厘米、宽5厘米：8×5=40平方厘米。"],
  "正方形面积": ["正方形的长和宽都等于边长，所以面积=边长×边长。", "边长6分米：6×6=36平方分米。"],
  "面积单位换算": ["1平方分米里能摆100个1平方厘米，1平方米里能摆100个1平方分米。", "4平方米=400平方分米；700平方厘米=7平方分米。"],
  "分数": ["把一个整体平均分成若干份，取其中的一份或几份，可以用分数表示。一定要注意“平均分”。", "披萨平均切成8块，吃了3块，吃了八分之三。"],
  "认识分数": ["分数线下面是分母，表示平均分成几份；上面是分子，表示取了几份。", "五分之二写作2/5：分母5表示平均分5份，分子2表示取2份。"],
  "分数大小比较": ["同分母分数，分子大的更大；同分子分数，可以画图想一想，分得越多，每一份越小。", "3/8和5/8中，5/8大；1/3和1/6中，1/3大。"],
  "同分母分数加减": ["同分母分数相加减，平均分的总份数没有变，所以分母不变，只把分子相加减。", "2/7+3/7=5/7；6/9-2/9=4/9。"],
  "数据整理": ["收集数据时可以画“正”字、画符号或逐个记录，再整理进表格。每个人只能记一次。", "5人选苹果、3人选香蕉、2人选梨，表格中苹果填5，香蕉填3，梨填2。"],
  "读懂数据": ["读表格先看标题和每一栏表示什么，再找最大、最小、相差多少或一共多少。", "苹果5人、香蕉3人：喜欢苹果的比香蕉多5-3=2人。"],
  "总复习·计算": ["口算要快而准，竖式要数位对齐。只有加减和乘除时，先乘除后加减；有括号先算括号里。", "48+24÷6=48+4=52；(48+24)÷6=72÷6=12。"],
  "总复习·应用": ["读完题后，先用一句话说“要求什么”。再找有关条件，分步列式，每一步写清单位。", "买3盒球，每盒12个，用去8个。先算12×3=36个，再算36-8=28个。"]
};

const englishUnits = {
  1: {
    theme: "认识新朋友和国家",
    words: "UK 英国　Canada 加拿大　USA 美国　China 中国　student 学生　pupil 小学生　teacher 教师　boy 男孩　girl 女孩　new 新的　friend 朋友",
    sentences: "I'm from China. 我来自中国。 / Where are you from? 你来自哪里？ / This is my new friend. 这是我的新朋友。",
    text: "Amy: Hi! I'm Amy. I'm from the UK.\nWu Binbin: Hi, Amy! I'm Wu Binbin. I'm from China.\nAmy: Nice to meet you.\nWu Binbin: Nice to meet you, too. Welcome!"
  },
  2: {
    theme: "介绍家人",
    words: "father 爸爸　dad 爸爸　mother 妈妈　mum 妈妈　man 男人　woman 女人　grandfather 爷爷/外公　grandmother 奶奶/外婆　brother 兄弟　sister 姐妹　family 家庭",
    sentences: "Who's that man? 那位男士是谁？ / He's my father. 他是我爸爸。 / Is she your mother? 她是你妈妈吗？",
    text: "Chen Jie: Look at my family photo.\nSarah: Who's that woman?\nChen Jie: She's my mother.\nSarah: Who's that boy?\nChen Jie: He's my brother. We are a happy family."
  },
  3: {
    theme: "描述动物的样子",
    words: "thin 瘦的　fat 胖的　tall 高的　short 矮的/短的　long 长的　small 小的　big 大的　giraffe 长颈鹿　children 孩子们",
    sentences: "It's so tall! 它真高！ / It has a long nose. 它有一个长鼻子。 / It has small eyes and big ears. 它有小眼睛和大耳朵。",
    text: "Look at the elephant. It is big and fat. It has a long nose and a short tail. It has big ears and small eyes. I like the elephant."
  },
  4: {
    theme: "寻找物品和描述位置",
    words: "on 在……上面　in 在……里面　under 在……下面　chair 椅子　desk 书桌　cap 帽子　ball 球　car 小汽车　boat 小船　map 地图　toy 玩具",
    sentences: "Where is my cap? 我的帽子在哪里？ / It's under the chair. 它在椅子下面。 / Is it in your bag? 它在你的包里吗？",
    text: "Mike: Mum, where is my toy car?\nMum: Is it on the desk?\nMike: No, it isn't.\nMum: Look! It's under the chair.\nMike: Silly me! Thanks, Mum."
  },
  5: {
    theme: "谈论喜欢的水果",
    words: "pear 梨　apple 苹果　orange 橙子　banana 香蕉　watermelon 西瓜　strawberry 草莓　grape 葡萄　fruit 水果　buy 买",
    sentences: "Do you like pears? 你喜欢梨吗？ / Yes, I do. 是的。 / No, I don't. 不喜欢。 / Can I have some bananas? 我能吃些香蕉吗？",
    text: "Sarah: Do you like fruit?\nMike: Yes, I do. I like apples and grapes.\nSarah: Do you like watermelons?\nMike: No, I don't. I like strawberries.\nSarah: Here you are.\nMike: Thank you!"
  },
  6: {
    theme: "数字和数量",
    words: "eleven 11　twelve 12　thirteen 13　fourteen 14　fifteen 15　sixteen 16　seventeen 17　eighteen 18　nineteen 19　twenty 20　kite 风筝　beautiful 美丽的",
    sentences: "How many kites do you see? 你看见多少只风筝？ / I see twelve. 我看见12只。 / How many crayons do you have? 你有多少支蜡笔？",
    text: "John: Look at the kites!\nAmy: Wow, so beautiful!\nJohn: How many kites do you see?\nAmy: I see sixteen.\nJohn: No, the black one is a bird!\nAmy: Oh! I see fifteen kites."
  }
};

const scienceLessons = {
  "植物生长": ["种子萌发通常需要适量的水、空气和适宜的温度。根一般先长出来，向下生长；茎和叶向上生长。植物长大后可能开花、结果，产生新的种子。", "把同样的绿豆分别放在干纸巾和湿纸巾上，其他条件相同。几天后，湿纸巾上的绿豆更容易发芽，说明萌发需要水。"],
  "动物的一生": ["动物都有出生、生长、繁殖、死亡的过程，但不同动物经历的阶段不完全相同。蚕和蝴蝶会经历卵、幼虫、蛹、成虫，青蛙会经历卵、蝌蚪、幼蛙、成蛙。", "比较：小鸡由鸡蛋孵出，长得越来越像成年鸡；蚕宝宝和蚕蛾外形差别很大，中间还要经过蛹。"],
  "物体的运动": ["描述运动要说清楚参照物、方向、距离和时间。同一个物体相对不同参照物，运动情况可能不同。", "坐在行驶的公交车上，相对座位你没有移动；相对路旁的大树，你正在向前运动。"],
  "太阳与影子": ["太阳是光源，不透明物体挡住光会形成影子。一天中太阳的位置会变化，影子的方向和长短也会变化。", "早晨太阳在东边，影子大多朝西且较长；中午太阳较高，影子较短；傍晚影子又变长。"],
  "月相变化": ["月球本身不发光，我们看到的是它被太阳照亮的部分。月球在绕地球运动，所以我们看到的亮面形状会有规律地改变。", "从新月到满月，亮面逐渐变大；从满月到新月，亮面逐渐变小。一个变化周期大约是一个月。"],
  "科学实验": ["科学探究常有这几步：提出问题、作出猜想、制订计划、实验观察、记录数据、得出结论、交流发现。结论必须根据真实证据。", "研究“斜面越陡，小球是否越快”时，只改变斜面坡度，小球、斜面长度和起点都保持相同。"],
  "运动和位置": ["判断物体位置要先选参照物，再说方向和距离。只说“在那里”不够清楚。", "小明在旗杆东边5米处。参照物是旗杆，方向是东边，距离是5米。"],
  "各种各样的运动": ["物体有平动、转动、滚动、摆动、振动等运动形式。有些物体同时有几种运动。", "秋千来回摆动；拨动尺子会振动；车轮一边转动，一边跟着车向前平动。"],
  "直线运动和曲线运动": ["看运动轨迹：轨迹接近直线的是直线运动，轨迹弯曲的是曲线运动。", "电梯上下是直线运动；投出的篮球在空中沿弯曲路线运动，是曲线运动。"],
  "物体在斜面上运动": ["不同形状的物体在斜面上可能滑动或滚动。通常斜面越陡，物体运动越快，但实验时要保持其他条件相同。", "立方体木块容易滑下，圆柱或小球容易滚下。把同一个小球放在更陡的斜面上，常常更快到达底端。"],
  "比较运动快慢": ["相同距离，用时少的更快；相同时间，运动距离长的更快。比较时必须统一距离或时间。", "甲乙都跑50米，甲用9秒，乙用11秒，甲更快。甲乙都跑10秒，甲跑60米、乙跑55米，甲更快。"],
  "我们的过山车": ["过山车轨道要有起点、终点、直线轨道和曲线轨道，连接处要平滑牢固。测试后根据小球是否顺利通过来改进。", "如果小球在接头处停下，可以把接头压平；如果小球冲出轨道，可以降低坡度或加高挡板。"],
  "迎接蚕宝宝": ["蚕卵很小，刚产下时颜色较浅，后来会变深。蚕卵孵化需要合适的温度和空气，不能用手频繁触碰。", "把蚕卵放在干净、通风、温度合适的盒中，每天观察颜色变化，记录孵化日期。"],
  "认识蚕宝宝": ["蚕是蚕的幼虫，身体分头、胸、腹三部分。它吃桑叶，会经历多次蜕皮，身体不断长大。刚蜕皮时身体较嫩，不要打扰。", "每天记录蚕的长度、颜色、吃桑叶的多少和是否蜕皮，就能画出一张“蚕宝宝成长表”。"],
  "蚕变了新模样": ["蚕成熟后停止吃桑叶，吐丝结茧。茧里的蚕会变成蛹。蛹看起来不怎么动，但身体内部正在发生变化。", "蚕→吐丝结茧→蛹。不要剪开正在发育的茧，可以轻轻观察茧的颜色和形状。"],
  "茧中钻出了蚕蛾": ["蚕蛾是蚕的成虫，有头、胸、腹三部分，胸部有三对足和两对翅。雌蛾腹部较大，雄蛾腹部较小。交配后雌蛾会产卵。", "蚕蛾从茧中出来后，经过交配、产卵，新的生命周期又开始了。"],
  "我们的一生": ["人的一生会经历婴儿、幼儿、青少年、成年、老年等阶段。身体会长高、变重，运动和思考能力也会变化。", "小时候不会走路，长大后会跑跳、学习。均衡饮食、充足睡眠和坚持运动能帮助我们健康成长。"],
  "仰望天空": ["太阳是一颗恒星，会发光发热，体积非常大；月球是地球的天然卫星，本身不发光，表面有环形山。因为太阳离我们很远，看起来和月球大小相近。", "不能用眼睛直接看太阳。可以用带小孔的纸板让阳光投到白纸上，安全观察太阳的像。"],
  "阳光下物体的影子": ["形成影子需要光源、遮挡物和承接影子的屏。影子的方向与光来的方向相反。", "把木棒竖在阳光下，每隔一小时描一次影子，会发现方向和长短都在变化。"],
  "影子的秘密": ["光源位置越高，影子通常越短；光源越低，影子通常越长。物体离光源越近，影子可能越大。", "固定物体和白墙，把手电筒从低处慢慢移高，观察影子由长变短。一次只改变手电筒高度。"],
  "月相变化规律": ["月相每天变化不大，但连续观察会发现规律。观察时要尽量在相近时间、同一地点，记录日期、方向和亮面形状。", "可以画圆表示月亮，把看到的亮面涂出来，连续记录两周，再把图按日期排好观察变化。"],
  "月球·地球的卫星": ["月球绕地球运动，也是离地球最近的天体。月球表面有高地、平原和许多环形山，几乎没有空气和液态水。", "1969年，人类首次登上月球。宇航员留下的脚印能保存很久，因为月球上几乎没有风雨。"],
  "地球·水的星球": ["地球表面大约七成是海洋，三成是陆地。海洋是连续相连的，陆地包括大陆和岛屿。地球适合生命生活，与水和空气密切相关。", "观察地球仪，蓝色部分表示海洋。转动地球仪会发现，从很多角度看，蓝色都比陆地颜色多。"],
  "科学探究流程": ["先提出一个能研究的问题，再猜想答案；接着设计公平的方法，认真观察记录；最后根据数据说结论。如果证据不足，可以重新实验。", "问题：不同坡度会影响小球速度吗？猜想：越陡越快。实验：只改变坡度，测量小球到终点的时间。"],
  "实验安全与记录": ["实验前听清要求，不尝不明物品，不把器材对着同学。数据要当场记录，不能为了让结果“好看”而修改。", "如果三次测量分别是5秒、4秒、5秒，就照实写下。可以多测几次找规律，不能把4秒改成5秒。"]
};

function buildChineseLesson(title, description) {
  const sampleKey = Object.keys(writingSamples).find(key => title.includes(key));
  if (sampleKey) {
    const sample = writingSamples[sampleKey];
    return {
      explanation: `<p>先想好你最想告诉读者什么，再把最有意思的地方写具体。</p><ul><li>开头：用一两句话点明要写什么。</li><li>中间：按顺序写动作、样子、声音或心情。</li><li>结尾：写你的感受，别和开头重复。</li></ul>`,
      example: `<p class="sample-title">${sample.title}</p><p class="sample-text">${sample.text}</p>`,
      tip: `<p>写完后当一次“小编辑”：圈出三个好词，检查每句话有没有句号，再找一找错别字。</p>`
    };
  }
  const unitKey = Object.keys(chineseUnitLessons).find(key => title.includes(key));
  if (unitKey) {
    const unit = chineseUnitLessons[unitKey];
    return {
      explanation: `<p>${unit.focus}</p><p><strong>本单元重点词语：</strong>${unit.words}</p><p><strong>背诵清单：</strong>${unit.recite}</p>`,
      example: `<p class="sample-title">你可以这样复习</p><p>先挑一篇课文，用两句话说主要内容；再选5个重点词语听写；最后背一段要求背诵的内容。全部完成就给自己打一个星。</p>`,
      tip: `<p>读词语时，不只读声音，还要用其中两个词各说一句话。背课文时，一小段一小段背，比一次背很长更轻松。</p>`
    };
  }
  if (title.includes("古诗") || title.includes("背诵")) {
    return {
      explanation: `<p>三年级下册重点背诵：《绝句》《惠崇春江晚景》《三衢道中》《元日》《清明》《九月九日忆山东兄弟》《守株待兔》。要会背、会默写、会说大意。</p><p><strong>最容易写错：</strong>融、燕、惠、豚、减、符、魂、异、倍、株、耕、冀。</p>`,
      example: `<p><strong>检查自己：</strong>“独在异乡为异客，每逢佳节倍思亲。”两个“异”不要写错，“倍”不是“陪”。这两句写出了诗人在节日里思念家乡亲人的心情。</p>`,
      tip: `<p>先读出节奏，再看一句背一句，最后合上内容完整背。默写后用另一种颜色改错字。</p>`
    };
  }
  if (title.includes("阅读") || title.includes("概括") || title.includes("复述") || title.includes("课内阅读")) {
    return {
      explanation: `<p>${description}。</p><ul><li>找中心句：看看哪句话能管住整段内容。</li><li>概括内容：说清“谁或什么，怎么样”。</li><li>理解词句：先看前后文，再换一个意思相近的词试试。</li><li>复述故事：按起因、经过、结果讲，不漏掉重要变化。</li></ul>`,
      example: `<p><strong>例：</strong>《花钟》第1自然段写了许多花在不同时间开放，中心意思就是“不同的花开放的时间是不同的”。</p>`,
      tip: `<p>答案写完后问自己：“我有没有回答题目问的那件事？”不要把整段原文都抄下来。</p>`
    };
  }
  return {
    explanation: `<p>${description}。</p><ul><li>字词：会读、会写、知道意思，还能放进句子里。</li><li>句子：看清要求是扩写、缩写、改病句还是换说法。</li><li>标点：人物说的话用引号，问句末尾用问号。</li></ul>`,
    example: `<p><strong>例：</strong>“荷叶挨挨挤挤的，像一个个碧绿的大圆盘。”这里把荷叶比作大圆盘，写出了荷叶又圆、又绿、又多。</p>`,
    tip: `<p>每次只挑5个易错词听写。错一个就把正确的词放进句子里再写一次。</p>`
  };
}

function buildMathLesson(title, description) {
  const lesson = mathLessons[title] || [
    description,
    "先读清题目，再画图、摆一摆或写算式。做完后用估算或相反运算检查。"
  ];
  return {
    explanation: `<p>${lesson[0]}</p>`,
    example: `<p class="sample-title">看懂这个例子</p><p>${lesson[1]}</p>`,
    tip: ""
  };
}

function buildEnglishLesson(title, description) {
  const unitMatch = title.match(/Unit\s*(\d)/);
  if (unitMatch) {
    const unit = englishUnits[Number(unitMatch[1])];
    return {
      explanation: `<p><strong>本单元主题：</strong>${unit.theme}</p><p><strong>一定要会的单词：</strong><br>${unit.words}</p><p><strong>一定要会的句子：</strong><br>${unit.sentences}</p>`,
      example: `<p class="sample-title">读一读这篇小对话</p><p class="sample-text">${unit.text}</p><p>读完试一试：把人物、国家、家人、水果或数字换成你自己的内容，再说一遍。</p>`,
      tip: `<p>一次学5个词：先看中文说英文，再遮住中文认英文，最后把词放进句子里说出来。</p>`
    };
  }
  if (title.includes("Recycle")) {
    return {
      explanation: `<p>${description}。Recycle不是新单元，而是把前面学过的内容混在一起用。你要能看图选择正确句子，也能完成一小段对话。</p>`,
      example: `<p class="sample-title">综合小短文</p><p class="sample-text">Hello! I'm Chen Jie. I'm from China. This is my family. My father is tall. My mother is beautiful. I have a cat. It is small and fat. I love my family.</p>`,
      tip: `<p>圈出短文里的姓名、国家、家庭成员和形容词，再试着把它改成介绍你自己的短文。</p>`
    };
  }
  if (title.includes("语音") || title.includes("Letters")) {
    const vowel = title.split("·")[1] || "a/e/i/o/u";
    const phonics = {
      a: "cat 猫、bag 包、dad 爸爸、hand 手",
      e: "ten 十、pen 钢笔、leg 腿、red 红色",
      i: "big 大的、pig 猪、six 六、milk 牛奶",
      o: "dog 狗、box 盒子、orange 橙子、body 身体",
      u: "fun 有趣、run 跑、duck 鸭子、under 在下面"
    };
    return {
      explanation: `<p>这一页练字母 <strong>${vowel}</strong> 在单词中的短音。不要用字母名称去拼，要听中间短短的元音。</p><p><strong>重点词：</strong>${phonics[vowel] || "cat, ten, big, dog, fun"}</p>`,
      example: `<p>慢慢拼：c-a-t → cat。再比较：bag、dad、hand，它们中间的 a 发音相同。你可以拍一下手读一个词。</p>`,
      tip: `<p>把四个同音词排成一队读三遍，再混入一个不同元音的词，看看自己能不能找出来。</p>`
    };
  }
  return {
    explanation: `<p>${description}。先看题目问的是人物、地点、喜好还是数量，再找对应答句。</p>`,
    example: `<p><strong>例：</strong>Where is the ball? 问“球在哪里”，要用 It's in/on/under... 回答，不能用 Yes, I do.</p>`,
    tip: `<p>把问句和答句当成好朋友一起读：Where—It's...，Who—He/She...，Do you—Yes/No，How many—数字。</p>`
  };
}

function buildScienceLesson(title, description) {
  const lesson = scienceLessons[title] || [
    description,
    "先认真观察，再把看到的现象写下来。结论要从观察记录中找到证据。"
  ];
  return {
    explanation: `<p>${lesson[0]}</p>`,
    example: `<p class="sample-title">生活中的例子或小实验</p><p>${lesson[1]}</p>`,
    tip: `<p>读完后，用“因为我看到……所以我知道……”说一句话。能说出证据，就是真的学懂了。</p>`
  };
}

function updateMarkButton() {
  const completed = state.completedKnowledge[currentDetail.subjectKey] || [];
  document.getElementById("markKnowledge").textContent = completed.includes(currentDetail.index)
    ? "✓ 我已经学会了"
    : "我学会了";
}

function toggleKnowledge(index) {
  const completed = state.completedKnowledge[currentSubject] || [];
  const position = completed.indexOf(index);
  if (position >= 0) completed.splice(position, 1);
  else completed.push(index);
  state.completedKnowledge[currentSubject] = completed;
  saveState();
  renderKnowledge();
  showToast(position >= 0 ? "已取消掌握标记" : "知识点打卡成功！");
}

function startQuiz(subjectKey, random = false, planDay = null) {
  quizSource = random ? "random" : subjectKey;
  quizPlanDay = planDay;
  if (random) {
    currentQuiz = shuffle(Object.entries(subjects).flatMap(([key, subject]) =>
      subject.questions.map(question => ({ ...question, subjectKey: key }))
    )).slice(0, 5);
  } else {
    currentQuiz = shuffle(subjects[subjectKey].questions.map(question => ({ ...question, subjectKey }))).slice(0, 5);
  }
  questionIndex = 0;
  quizScore = 0;
  document.getElementById("quizSubject").textContent = random ? "四科随机闯关" : `${subjects[subjectKey].name}小挑战`;
  showPage("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = currentQuiz[questionIndex];
  document.getElementById("quizCounter").textContent = `${questionIndex + 1} / ${currentQuiz.length}`;
  document.getElementById("quizProgress").style.width = `${((questionIndex + 1) / currentQuiz.length) * 100}%`;
  document.getElementById("questionType").textContent = `${subjects[question.subjectKey].name} · 单项选择`;
  document.getElementById("questionText").textContent = question.q;
  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("nextQuestion").classList.add("hidden");
  document.getElementById("options").innerHTML = question.options.map((option, index) => `
    <button class="option-button" data-answer="${index}">
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span>${option}</span>
    </button>
  `).join("");
  document.querySelectorAll(".option-button").forEach(button => {
    button.addEventListener("click", () => answerQuestion(Number(button.dataset.answer)));
  });
}

function answerQuestion(selected) {
  const question = currentQuiz[questionIndex];
  const correct = selected === question.answer;
  state.answered += 1;
  if (correct) {
    quizScore += 1;
    state.correct += 1;
    playTone(660);
  } else {
    addMistake(question, selected);
    playTone(240);
  }
  saveState();

  document.querySelectorAll(".option-button").forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) button.classList.add("correct");
    if (index === selected && !correct) button.classList.add("wrong");
  });

  const feedback = document.getElementById("feedback");
  feedback.innerHTML = `<strong>${correct ? "回答正确，真棒！" : "别着急，再记一遍"}</strong>${question.explain}`;
  feedback.classList.remove("hidden");
  const nextButton = document.getElementById("nextQuestion");
  nextButton.textContent = questionIndex === currentQuiz.length - 1 ? "查看成绩 →" : "下一题 →";
  nextButton.classList.remove("hidden");
}

function addMistake(question, selected) {
  const existing = state.mistakes.find(item => item.q === question.q);
  const mistake = {
    q: question.q,
    subjectKey: question.subjectKey,
    yourAnswer: question.options[selected],
    correctAnswer: question.options[question.answer],
    explain: question.explain
  };
  if (existing) Object.assign(existing, mistake);
  else state.mistakes.unshift(mistake);
}

function nextQuestion() {
  if (questionIndex < currentQuiz.length - 1) {
    questionIndex += 1;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  state.quizzes += 1;
  const involvedSubjects = [...new Set(currentQuiz.map(item => item.subjectKey))];
  const planDay = quizPlanDay ?? getPlanDayIndex();
  involvedSubjects.forEach(key => {
    if (!state.completedTasks.includes(key)) state.completedTasks.push(key);
    const taskId = `${planDay}-${key}`;
    if (!state.completedPlanTasks.includes(taskId)) state.completedPlanTasks.push(taskId);
  });
  saveState();

  const percentage = quizScore / currentQuiz.length;
  document.getElementById("resultTitle").textContent = percentage === 1 ? "满分！太棒啦！" : percentage >= 0.6 ? "完成得很不错！" : "努力就有进步！";
  document.getElementById("resultScore").textContent = quizScore;
  document.getElementById("resultMessage").textContent = percentage === 1
    ? "所有题都答对了，继续保持这份认真！"
    : percentage >= 0.6
      ? "把错题再看一遍，下次一定能更好。"
      : "先去知识点清单复习，再回来挑战一次吧。";
  document.querySelector(".score-ring").style.background = `conic-gradient(var(--purple) 0 ${percentage * 100}%, #ece9f1 ${percentage * 100}%)`;
  showPage("result");
}

function renderMistakes() {
  const list = document.getElementById("mistakesList");
  if (!state.mistakes.length) {
    list.innerHTML = `<div class="empty-state"><strong>错题本还是空的</strong>开始一次答题后，做错的题会自动收集到这里。</div>`;
    return;
  }
  list.innerHTML = state.mistakes.map(item => {
    const subject = subjects[item.subjectKey];
    return `
      <article class="mistake-card" style="--accent:${subject.color}">
        <span>${subject.name}</span>
        <h3>${item.q}</h3>
        <p>你的答案：${item.yourAnswer}</p>
        <p><strong>正确答案：${item.correctAnswer}</strong></p>
        <p>${item.explain}</p>
      </article>`;
  }).join("");
}

function renderProgress() {
  const mastered = Object.values(state.completedKnowledge).reduce((sum, list) => sum + list.length, 0);
  const accuracy = state.answered ? Math.round((state.correct / state.answered) * 100) : 0;
  document.getElementById("statsGrid").innerHTML = `
    <div class="stat-card"><span>已掌握知识点</span><strong>${mastered}</strong></div>
    <div class="stat-card"><span>完成闯关次数</span><strong>${state.quizzes}</strong></div>
    <div class="stat-card"><span>答题正确率</span><strong>${accuracy}%</strong></div>`;
  document.getElementById("subjectProgressList").innerHTML = Object.entries(subjects).map(([key, subject]) => {
    const progress = getSubjectProgress(key);
    return `
      <div class="subject-progress-row">
        <strong style="color:${subject.color}">${subject.name}</strong>
        <div class="subject-progress-track"><span style="width:${progress}%;background:${subject.color}"></span></div>
        <strong>${progress}%</strong>
      </div>`;
  }).join("");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function adjustColor(hex, amount) {
  const value = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (value >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((value >> 8) & 0xff) + amount));
  const b = Math.max(0, Math.min(255, (value & 0xff) + amount));
  return `rgb(${r}, ${g}, ${b})`;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function playTone(frequency) {
  if (!state.sound) return;
  try {
    const audio = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.08, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.18);
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start();
    oscillator.stop(audio.currentTime + 0.18);
  } catch {
    // Sound is optional; the app remains fully usable without Web Audio.
  }
}

document.querySelectorAll("[data-page]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

document.getElementById("startReview").addEventListener("click", () => {
  const planDay = getPlanDayIndex();
  const nextSubject = reviewPlan[planDay].subjects.find(key => !state.completedPlanTasks.includes(`${planDay}-${key}`)) || "chinese";
  startQuiz(nextSubject);
});
document.getElementById("randomChallenge").addEventListener("click", () => startQuiz("chinese", true));
document.getElementById("subjectQuizButton").addEventListener("click", () => startQuiz(currentSubject));
document.getElementById("nextQuestion").addEventListener("click", nextQuestion);
document.getElementById("quitQuiz").addEventListener("click", () => showPage("home"));
document.getElementById("retryQuiz").addEventListener("click", () => {
  const isRandom = quizSource === "random";
  startQuiz(isRandom ? "chinese" : quizSource, isRandom, quizPlanDay);
});
document.getElementById("detailBack").addEventListener("click", () => {
  if (currentDetail.back === "day") openDayCourse(currentPlanDay, currentDayFocus);
  else openSubject(currentDetail.subjectKey);
});
document.getElementById("markKnowledge").addEventListener("click", () => {
  const previousSubject = currentSubject;
  currentSubject = currentDetail.subjectKey;
  toggleKnowledge(currentDetail.index);
  currentSubject = previousSubject;
  updateMarkButton();
});
document.getElementById("detailQuiz").addEventListener("click", () => {
  const planDay = currentDetail.back === "day" ? currentPlanDay : null;
  startQuiz(currentDetail.subjectKey, false, planDay);
});
document.getElementById("soundButton").addEventListener("click", () => {
  state.sound = !state.sound;
  saveState();
  renderHome();
  showToast(state.sound ? "答题音效已开启" : "答题音效已关闭");
});
document.getElementById("clearMistakes").addEventListener("click", () => {
  if (!state.mistakes.length || window.confirm("确定要清空全部错题吗？")) {
    state.mistakes = [];
    saveState();
    renderMistakes();
  }
});

recordStudyDay();
renderHome();
