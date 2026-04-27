export type ArticleCategory =
  | "教学通知"
  | "课程安排"
  | "调停课"
  | "教学运行"
  | "教材课程"
  | "考务通知"
  | "人才培养"

export interface ArticleAttachment {
  name: string
  size: string
  type: "PDF" | "DOC" | "XLS"
}

export interface Article {
  slug: string
  category: ArticleCategory
  title: string
  date: string
  author: string
  source: string
  views: number
  /** 简短摘要 */
  summary: string
  /** 正文段落（每个元素为一个段落或小标题） */
  content: Array<
    | { type: "p"; text: string }
    | { type: "h"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "ol"; items: string[] }
    | { type: "quote"; text: string }
  >
  attachments?: ArticleAttachment[]
}

export const articles: Article[] = [
  {
    slug: "2025-2026-2-teaching-preparation",
    category: "教学通知",
    title: "关于做好2025-2026学年第二学期开学初教学准备工作的通知",
    date: "2026-04-22",
    author: "教务处教学运行科",
    source: "辽宁省交通高等专科学校 教务处",
    views: 1286,
    summary:
      "为保障2025-2026学年第二学期教学工作平稳有序运行，现就开学初教学准备相关事项通知如下。",
    content: [
      {
        type: "p",
        text: "各院（系）、各教学单位：",
      },
      {
        type: "p",
        text: "为保障2025-2026学年第二学期教学工作平稳、有序、安全运行，确保开学第一周课堂教学秩序，根据学校年度教学工作要点和校历安排，现就开学初教学准备相关事项通知如下，请认真组织落实。",
      },
      { type: "h", text: "一、教学任务落实" },
      {
        type: "ol",
        items: [
          "各院（系）须按照已发布的教学任务书，于开学前一周完成本学期所有理论课、实践课的任课教师确认，并核对教师课表与学生课表是否一致。",
          "凡涉及外聘教师、共享课程、跨院（系）授课的，由开课单位牵头协调，确保教师按时到岗。",
          "各教研室主任须组织本学期首次集体备课，重点检查课程标准、教学进度表、教案与考核方式的一致性。",
        ],
      },
      { type: "h", text: "二、教学条件保障" },
      {
        type: "ul",
        items: [
          "实训中心负责完成全部实训室设备调试、耗材补充与安全检查，并将检查记录于开学前一日报教务处备案。",
          "信息技术中心负责对所有多媒体教室、智慧教室进行网络与设备巡检，确保第一周课堂正常运行。",
          "图书馆负责完成本学期教材到位情况核查，按教材科要求完成教材发放。",
        ],
      },
      { type: "h", text: "三、课堂教学秩序" },
      {
        type: "p",
        text: "开学第一周为校院两级教学督导集中听课周，请各任课教师按时上下课、规范课堂管理；学生工作部门同步开展学风建设专项检查，重点关注迟到、早退、旷课等情况。",
      },
      {
        type: "quote",
        text: "凡未按规定上报调停课、私自调换上课时间或地点的，按教学事故处理。",
      },
      { type: "h", text: "四、其它事项" },
      {
        type: "ol",
        items: [
          "请各院（系）于2026年4月28日前将本学期开学准备工作自查表（见附件1）报教务处教学运行科。",
          "各类教学突发情况请第一时间通过 教学事务登记平台 报送，并电话联系教务处值班电话。",
          "本通知由教务处负责解释。",
        ],
      },
    ],
    attachments: [
      { name: "附件1：开学初教学准备工作自查表.docx", size: "62 KB", type: "DOC" },
      { name: "附件2：本学期校历及教学周历.pdf", size: "320 KB", type: "PDF" },
    ],
  },
  {
    slug: "advanced-math-week8-rescheduling",
    category: "调停课",
    title: "关于公共课《高等数学》第8周调课安排的公告",
    date: "2026-04-20",
    author: "教务处教学运行科",
    source: "辽宁省交通高等专科学校 教务处",
    views: 942,
    summary:
      "因校级学术活动安排，本学期第8周公共课《高等数学》部分班级课程作如下调整。",
    content: [
      {
        type: "p",
        text: "因学校承办省级学术交流活动场地及人员安排需要，本学期第8周公共课《高等数学》部分班级上课时间作如下调整，请相关教师与学生周知。",
      },
      { type: "h", text: "一、调课具体安排" },
      {
        type: "ul",
        items: [
          "周一 1-2 节《高等数学》（道桥2401-2402班）调至 周五 7-8 节，地点不变（教学楼B座305）。",
          "周二 3-4 节《高等数学》（汽车2403-2404班）调至 周六 1-2 节，地点改为 教学楼B座412。",
          "其余班级《高等数学》上课时间与地点保持不变。",
        ],
      },
      { type: "h", text: "二、相关要求" },
      {
        type: "ol",
        items: [
          "请任课教师提前在班级群通知学生，确保学生准时到课。",
          "请辅导员配合做好考勤与课堂纪律工作。",
          "如对调课安排有异议，请于2026年4月23日17:00前与教务处教学运行科联系。",
        ],
      },
    ],
  },
  {
    slug: "public-elective-2025-2026-2",
    category: "课程安排",
    title: "2025-2026学年第二学期全校公选课开课目录及选课指南",
    date: "2026-04-18",
    author: "教务处教学运行科",
    source: "辽宁省交通高等专科学校 教务处",
    views: 2105,
    summary:
      "本学期面向全校学生开设公选课共47门，涵盖人文素养、科学素养、艺术体育、创新创业等模块。",
    content: [
      {
        type: "p",
        text: "本学期面向全校学生开设公选课共47门，涵盖人文素养、科学素养、艺术体育、创新创业、职业发展等模块，请同学们根据培养方案要求合理选课。",
      },
      { type: "h", text: "一、选课时间" },
      {
        type: "ul",
        items: [
          "正选阶段：2026年4月25日 09:00 至 4月28日 22:00",
          "退补选阶段：2026年5月06日 09:00 至 5月08日 22:00",
        ],
      },
      { type: "h", text: "二、选课方式" },
      {
        type: "p",
        text: "请登录智慧化教学管理系统（jwxt.lncc.edu.cn），在「我的选课」中按提示完成操作；系统支持志愿优先与学时冲突自动校验。",
      },
      { type: "h", text: "三、注意事项" },
      {
        type: "ol",
        items: [
          "每名学生本学期最多可选公选课 2 门，最少 1 门。",
          "凡选课未达上限或重复选课导致冲突的，由系统按报名先后顺序自动剔除。",
          "课程开课人数不足 30 人的，将由教务处协调停开并通知调换。",
        ],
      },
    ],
    attachments: [
      { name: "2025-2026-2 公选课开课目录.xlsx", size: "48 KB", type: "XLS" },
      { name: "学生选课操作指南.pdf", size: "1.1 MB", type: "PDF" },
    ],
  },
  {
    slug: "graduation-qualification-review-2026",
    category: "教学运行",
    title: "关于开展2026届毕业生毕业资格审核工作的通知",
    date: "2026-04-15",
    author: "教务处学籍科",
    source: "辽宁省交通高等专科学校 教务处",
    views: 1570,
    summary:
      "现就2026届毕业生毕业资格审核工作有关事项通知如下，请相关院系按时间节点组织落实。",
    content: [
      {
        type: "p",
        text: "为保障2026届毕业生顺利毕业，根据学校学籍管理办法及人才培养方案要求，现就毕业资格审核工作有关事项通知如下。",
      },
      { type: "h", text: "一、审核内容" },
      {
        type: "ul",
        items: [
          "课程修读与学分完成情况；",
          "毕业实习、毕业设计（论文）或顶岗实习成绩；",
          "职业资格证书 / 1+X 证书获取情况（涉及双证融通专业）；",
          "学生在校期间违纪、警示及处分撤销情况。",
        ],
      },
      { type: "h", text: "二、工作流程" },
      {
        type: "ol",
        items: [
          "学生本人通过教务系统打印《毕业资格自查表》并签字确认；",
          "辅导员复核签字 → 院（系）教学秘书初审 → 院（系）主管教学副院长签字；",
          "院（系）汇总后于 2026年5月15日前 报送教务处学籍科复核。",
        ],
      },
    ],
    attachments: [
      { name: "毕业资格审核工作流程图.pdf", size: "210 KB", type: "PDF" },
      { name: "毕业资格自查表模板.docx", size: "75 KB", type: "DOC" },
    ],
  },
  {
    slug: "textbook-selection-2026-fall",
    category: "教材课程",
    title: "关于2026年秋季学期教材选用与征订工作的通知",
    date: "2026-04-12",
    author: "教务处教材科",
    source: "辽宁省交通高等专科学校 教务处",
    views: 803,
    summary:
      "为做好2026年秋季学期教材选用与征订工作，确保教材质量与按时到位，现将相关安排通知如下。",
    content: [
      {
        type: "p",
        text: "为做好2026年秋季学期教材选用与征订工作，确保教材质量与按时到位，现将相关安排通知如下。",
      },
      { type: "h", text: "一、选用原则" },
      {
        type: "ul",
        items: [
          "优先选用国家规划教材、省部级以上获奖教材；",
          "鼓励选用近三年出版的新教材，原则上不得选用出版超过五年且无新版的教材；",
          "校企合作开发教材、活页式 / 工作手册式教材在符合规范前提下优先支持。",
        ],
      },
      { type: "h", text: "二、时间节点" },
      {
        type: "ol",
        items: [
          "4月20日前：各教研室完成教材初选，提交《教材选用申请表》；",
          "4月30日前：院（系）教学指导委员会审定，加盖单位公章后报教务处；",
          "5月15日前：教材科完成汇总、议价并下达征订计划。",
        ],
      },
    ],
  },
  {
    slug: "first-class-course-2026",
    category: "教学通知",
    title: "关于组织申报2026年省级一流本科课程的通知",
    date: "2026-04-08",
    author: "教务处教学建设科",
    source: "辽宁省交通高等专科学校 教务处",
    views: 678,
    summary:
      "根据省教育厅文件精神，现组织开展2026年度省级一流本科课程申报工作，欢迎符合条件的课程团队积极申报。",
    content: [
      {
        type: "p",
        text: "根据省教育厅《关于做好2026年度省级一流本科课程认定工作的通知》精神，现组织开展我校申报推荐工作。",
      },
      { type: "h", text: "一、申报类别" },
      {
        type: "ul",
        items: [
          "线上一流课程",
          "线下一流课程",
          "线上线下混合式一流课程",
          "社会实践一流课程",
          "虚拟仿真实验教学一流课程",
        ],
      },
      { type: "h", text: "二、申报要求" },
      {
        type: "p",
        text: "课程负责人须为我校在编在岗教师，具有副高及以上职称或博士学位；课程已开设两轮以上，教学效果良好。",
      },
    ],
    attachments: [
      { name: "省级一流本科课程申报书（模板）.docx", size: "186 KB", type: "DOC" },
    ],
  },
  {
    slug: "teaching-supervision-2025-2026-2",
    category: "教学运行",
    title: "关于开展教学督导听课与课堂教学质量评价工作的安排",
    date: "2026-04-03",
    author: "教务处教学质量科",
    source: "辽宁省交通高等专科学校 教务处",
    views: 521,
    summary:
      "本学期校院两级教学督导将围绕新教师过关课、青年教师汇报课、思政融入课等重点开展常态化听课。",
    content: [
      {
        type: "p",
        text: "本学期校院两级教学督导工作将围绕新教师过关课、青年教师汇报课、思政融入示范课等重点开展常态化听课与课堂教学质量评价。",
      },
      { type: "h", text: "一、听课对象" },
      {
        type: "ul",
        items: [
          "近三年新入职教师（必听）；",
          "本学期开设新课、转岗任课的教师；",
          "学生评教反馈较低的课程；",
          "校级及以上教学比赛参赛教师。",
        ],
      },
      { type: "h", text: "二、评价反馈" },
      {
        type: "p",
        text: "听课结果将通过教学质量评价系统反馈给任课教师及所在单位，并作为年度考核与教师发展支持的重要依据。",
      },
    ],
  },
  {
    slug: "final-exam-2025-2026-2",
    category: "考务通知",
    title: "关于2025-2026学年第二学期期末考试安排的通知",
    date: "2026-04-21",
    author: "教务处考试中心",
    source: "辽宁省交通高等专科学校 教务处",
    views: 3210,
    summary:
      "本学期期末考试定于第18-19周举行，请各院（系）、各任课教师按时完成命题、印制与考场安排工作。",
    content: [
      {
        type: "p",
        text: "本学期期末考试定于第18-19周（2026年6月22日至7月3日）举行，现将相关工作要求通知如下。",
      },
      { type: "h", text: "一、命题与审题" },
      {
        type: "ol",
        items: [
          "各课程实行 A、B 两套试卷命题，难度相当；",
          "试卷须经教研室主任、院（系）主管教学副院长审核签字；",
          "试卷电子稿与纸质稿须于 2026年6月10日前 交考试中心。",
        ],
      },
      { type: "h", text: "二、考场与监考" },
      {
        type: "ul",
        items: [
          "原则上每个考场不超过 30 人，每场考试至少 2 名监考教师；",
          "考场座位按学号 S 形编排，相邻同学不同班级；",
          "监考教师须提前 15 分钟到岗，严格执行《考场规则》。",
        ],
      },
      {
        type: "quote",
        text: "凡发生违纪舞弊行为，按《学生违纪处分办法》严肃处理。",
      },
    ],
    attachments: [
      { name: "期末考试安排总表.xlsx", size: "92 KB", type: "XLS" },
      { name: "考场规则与监考守则.pdf", size: "412 KB", type: "PDF" },
    ],
  },
  {
    slug: "cet-46-2026-spring",
    category: "考务通知",
    title: "关于组织2026年上半年全国大学英语四、六级考试的通知",
    date: "2026-04-16",
    author: "教务处考试中心",
    source: "辽宁省交通高等专科学校 教务处",
    views: 4280,
    summary:
      "2026年上半年全国大学英语四、六级考试将于6月14日举行，现将我校组织报名工作有关事项通知如下。",
    content: [
      {
        type: "p",
        text: "根据全国大学英语四、六级考试委员会安排，2026年上半年笔试将于2026年6月14日举行，口试已于5月完成。现将我校组织报名工作有关事项通知如下。",
      },
      { type: "h", text: "一、报名时间" },
      {
        type: "p",
        text: "2026年4月25日 10:00 至 5月06日 17:00（逾期不补报）。",
      },
      { type: "h", text: "二、报名方式" },
      {
        type: "ul",
        items: [
          "登录考试管理系统（exam.lncc.edu.cn），完成资格审核 → 缴费 → 信息确认；",
          "缴费成功视为报名成功，未按时缴费者视为放弃。",
        ],
      },
      { type: "h", text: "三、温馨提示" },
      {
        type: "p",
        text: "请考生务必认真核对个人信息，照片需为本人近期免冠正面照；考试当日须携带准考证、身份证、学生证三证齐全方可入场。",
      },
    ],
  },
  {
    slug: "make-up-exam-2026",
    category: "考务通知",
    title: "关于2026届毕业生补考、缓考申请受理工作安排",
    date: "2026-04-10",
    author: "教务处考试中心",
    source: "辽宁省交通高等专科学校 教务处",
    views: 1850,
    summary:
      "为方便2026届毕业生顺利毕业，现就补考、缓考申请受理工作作如下安排。",
    content: [
      {
        type: "p",
        text: "为方便2026届毕业生顺利毕业，现就毕业前补考、缓考申请受理工作作如下安排，请相关学生和院（系）按时间节点组织落实。",
      },
      { type: "h", text: "一、申请条件" },
      {
        type: "ul",
        items: [
          "在校期间因课程不及格、缓考等原因尚未取得相应学分；",
          "学籍状态正常，未受留校察看以上处分（处分已撤销除外）。",
        ],
      },
      { type: "h", text: "二、申请流程" },
      {
        type: "ol",
        items: [
          "学生填写《补考 / 缓考申请表》，辅导员、班主任签字；",
          "院（系）教学秘书审核 → 主管教学副院长签字 → 报教务处考试中心；",
          "考试中心统一安排考试时间与考场。",
        ],
      },
    ],
    attachments: [
      { name: "学生缓考申请表（2026版）.docx", size: "62 KB", type: "DOC" },
    ],
  },
  {
    slug: "exam-discipline-reiteration",
    category: "考务通知",
    title: "关于严肃考风考纪有关问题的通知（重申）",
    date: "2026-04-02",
    author: "教务处考试中心",
    source: "辽宁省交通高等专科学校 教务处",
    views: 996,
    summary:
      "为进一步严肃考风考纪，现就考试纪律相关要求予以重申，请全体师生严格遵守。",
    content: [
      {
        type: "p",
        text: "诚信是立身之本，是一切教育活动的底线。为进一步严肃考风考纪，现就考试纪律相关要求予以重申。",
      },
      { type: "h", text: "一、对学生的要求" },
      {
        type: "ul",
        items: [
          "严格遵守《考场规则》，不得携带与考试无关的电子设备；",
          "严禁夹带、抄袭、传纸条、交头接耳、替考等违纪行为；",
          "考试结束铃响立即停笔，按监考要求依次离场。",
        ],
      },
      { type: "h", text: "二、对监考教师的要求" },
      {
        type: "ul",
        items: [
          "严格执行监考守则，不得擅自离岗、玩手机、做与监考无关的事；",
          "对违纪行为发现一例处理一例，不得姑息。",
        ],
      },
      {
        type: "quote",
        text: "考风正则学风纯，学风纯则校风清。",
      },
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getRelatedArticles(slug: string, limit = 6): Article[] {
  const current = getArticleBySlug(slug)
  if (!current) return articles.slice(0, limit)
  // 同分类优先
  const sameCategory = articles.filter(
    (a) => a.slug !== slug && a.category === current.category,
  )
  const others = articles.filter(
    (a) => a.slug !== slug && a.category !== current.category,
  )
  return [...sameCategory, ...others].slice(0, limit)
}

export function getAdjacentArticles(slug: string): {
  prev?: Article
  next?: Article
} {
  const idx = articles.findIndex((a) => a.slug === slug)
  if (idx === -1) return {}
  return {
    prev: idx > 0 ? articles[idx - 1] : undefined,
    next: idx < articles.length - 1 ? articles[idx + 1] : undefined,
  }
}
