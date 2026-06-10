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

const pages = {
  home: document.getElementById("homePage"),
  subject: document.getElementById("subjectPage"),
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

  document.querySelectorAll("[data-subject]").forEach(button => {
    button.addEventListener("click", () => openSubject(button.dataset.subject));
  });
  document.querySelectorAll("[data-plan-day]").forEach(button => {
    button.addEventListener("click", () => {
      const dayIndex = Number(button.dataset.planDay);
      const day = reviewPlan[dayIndex];
      showToast(`第${dayIndex + 1}天：${day.title} · ${day.minutes.reduce((sum, value) => sum + value, 0)}分钟`);
    });
  });
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
      <span class="knowledge-check">${completed.includes(index) ? "✓" : index + 1}</span>
      <span><strong>${item[0]}</strong><small>${item[1]}</small></span>
      <span>›</span>
    </div>
  `).join("");

  document.querySelectorAll(".knowledge-item").forEach(item => {
    item.addEventListener("click", () => toggleKnowledge(Number(item.dataset.index)));
  });
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

function startQuiz(subjectKey, random = false) {
  quizSource = random ? "random" : subjectKey;
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
  const planDay = getPlanDayIndex();
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
  startQuiz(isRandom ? "chinese" : quizSource, isRandom);
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
