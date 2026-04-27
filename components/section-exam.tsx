import Link from "next/link"
import { SectionHeader } from "./section-header"
import { CalendarClock, ClipboardList, FileBarChart, AlertCircle } from "lucide-react"

const quickEntries = [
  {
    icon: CalendarClock,
    label: "考试安排查询",
    desc: "期末/补考/缓考",
    href: "#",
  },
  {
    icon: FileBarChart,
    label: "成绩查询",
    desc: "课程成绩 / GPA",
    href: "#",
  },
  {
    icon: ClipboardList,
    label: "考试报名",
    desc: "全国 / 行业资格",
    href: "#",
  },
  {
    icon: AlertCircle,
    label: "考试纪律",
    desc: "学生考试规范",
    href: "#",
  },
]

const examNotices = [
  {
    title: "关于2025-2026学年第二学期期末考试安排的通知",
    date: "2026-04-21",
  },
  {
    title: "关于组织2026年上半年全国大学英语四、六级考试的通知",
    date: "2026-04-16",
  },
  {
    title: "关于2026届毕业生补考、缓考申请受理工作安排",
    date: "2026-04-10",
  },
  {
    title: "关于严肃考风考纪有关问题的通知（重申）",
    date: "2026-04-02",
  },
]

export function SectionExam() {
  return (
    <section aria-labelledby="exam-heading">
      <div id="exam-heading">
        <SectionHeader title="考务信息" subtitle="EXAMINATION" />
      </div>

      {/* 快捷入口 */}
      <div className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border">
        {quickEntries.map((e) => (
          <a
            key={e.label}
            href={e.href}
            className="flex items-center gap-3 bg-card p-3 transition-colors hover:bg-secondary/60"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary/8 text-primary">
              <e.icon className="h-5 w-5" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium text-foreground">
                {e.label}
              </span>
              <span className="block truncate text-xs text-muted-foreground">{e.desc}</span>
            </span>
          </a>
        ))}
      </div>

      {/* 考务通知列表 */}
      <ul className="mt-3 divide-y divide-border border-t border-border">
        {examNotices.map((n, i) => (
          <li key={i}>
            <Link
              href="#"
              className="group flex items-center gap-3 py-2.5 text-sm transition-colors hover:bg-secondary/60"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              <span className="flex-1 truncate text-foreground group-hover:text-primary">
                {n.title}
              </span>
              <time className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                {n.date}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
