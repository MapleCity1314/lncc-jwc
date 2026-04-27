import Link from "next/link"
import { SectionHeader } from "./section-header"

type Category = "教学通知" | "课程安排" | "调停课" | "教学运行" | "教材课程"

interface NoticeItem {
  category: Category
  title: string
  date: string
  isNew?: boolean
}

const notices: NoticeItem[] = [
  {
    category: "教学通知",
    title: "关于做好2025-2026学年第二学期开学初教学准备工作的通知",
    date: "2026-04-22",
    isNew: true,
  },
  {
    category: "调停课",
    title: "关于公共课《高等数学》第8周调课安排的公告",
    date: "2026-04-20",
    isNew: true,
  },
  {
    category: "课程安排",
    title: "2025-2026学年第二学期全校公选课开课目录及选课指南",
    date: "2026-04-18",
  },
  {
    category: "教学运行",
    title: "关于开展2026届毕业生毕业资格审核工作的通知",
    date: "2026-04-15",
  },
  {
    category: "教材课程",
    title: "关于2026年秋季学期教材选用与征订工作的通知",
    date: "2026-04-12",
  },
  {
    category: "教学通知",
    title: "关于组织申报2026年省级一流本科课程的通知",
    date: "2026-04-08",
  },
  {
    category: "教学运行",
    title: "关于开展教学督导听课与课堂教学质量评价工作的安排",
    date: "2026-04-03",
  },
]

const categoryStyle: Record<Category, string> = {
  教学通知: "bg-primary text-primary-foreground",
  课程安排: "bg-secondary text-secondary-foreground border border-border",
  调停课: "bg-accent/10 text-accent border border-accent/30",
  教学运行: "bg-secondary text-secondary-foreground border border-border",
  教材课程: "bg-secondary text-secondary-foreground border border-border",
}

export function SectionTeaching() {
  return (
    <section aria-labelledby="teaching-heading">
      <div id="teaching-heading">
        <SectionHeader title="教学信息" subtitle="TEACHING NOTICES" />
      </div>
      <ul className="mt-3 divide-y divide-border">
        {notices.map((n, i) => (
          <li key={i}>
            <Link
              href="#"
              className="group flex items-center gap-3 py-2.5 text-sm transition-colors hover:bg-secondary/60"
            >
              <span
                className={`inline-flex h-6 w-20 shrink-0 items-center justify-center rounded-sm text-xs ${categoryStyle[n.category]}`}
              >
                {n.category}
              </span>
              <span className="flex-1 truncate text-foreground group-hover:text-primary">
                {n.title}
              </span>
              {n.isNew && (
                <span className="shrink-0 rounded-sm bg-accent px-1.5 py-0.5 text-[10px] font-bold leading-none text-accent-foreground">
                  NEW
                </span>
              )}
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
