import Link from "next/link"
import { SectionHeader } from "./section-header"
import { ChevronRight } from "lucide-react"

const items = [
  {
    no: "01",
    title: "专业人才培养方案",
    desc: "围绕交通运输、智能制造、信息技术等学科群，发布各专业人才培养方案与修订要点。",
    href: "#",
  },
  {
    no: "02",
    title: "课程建设与教学改革",
    desc: "省级精品课、一流本科课程、课程思政建设与教学改革立项情况公示。",
    href: "#",
  },
  {
    no: "03",
    title: "实践教学管理",
    desc: "校内实训、企业顶岗实习、毕业实习与毕业设计（论文）相关管理规范。",
    href: "#",
  },
  {
    no: "04",
    title: "教学质量监控",
    desc: "教学督导、学生评教、课堂教学诊改与专业评估常态化运行机制。",
    href: "#",
  },
  {
    no: "05",
    title: "教学成果展示",
    desc: "国家级、省级教学成果奖、技能大赛获奖与教师教学创新案例。",
    href: "#",
  },
]

export function SectionTalent() {
  return (
    <section aria-labelledby="talent-heading">
      <div id="talent-heading">
        <SectionHeader title="人才培养" subtitle="TALENT CULTIVATION" />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
        {items.map((it) => (
          <Link
            key={it.no}
            href={it.href}
            className="group flex flex-col border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-sm"
          >
            <span className="font-mono text-xs tracking-widest text-accent">{it.no}</span>
            <h3 className="mt-2 font-serif text-base font-bold text-foreground group-hover:text-primary">
              {it.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
              {it.desc}
            </p>
            <span className="mt-4 inline-flex items-center gap-0.5 text-xs text-muted-foreground group-hover:text-accent">
              进入栏目
              <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
