import Link from "next/link"
import { CalendarClock, ClipboardList, FileBarChart, AlertCircle, ChevronRight } from "lucide-react"
import type { Article } from "@/lib/articles"

interface ArticleSidebarProps {
  related: Article[]
}

const quickEntries = [
  { icon: CalendarClock, label: "考试安排查询", href: "#" },
  { icon: FileBarChart, label: "成绩查询", href: "#" },
  { icon: ClipboardList, label: "考试报名", href: "#" },
  { icon: AlertCircle, label: "考试纪律", href: "#" },
]

export function ArticleSidebar({ related }: ArticleSidebarProps) {
  return (
    <aside aria-label="侧边栏" className="space-y-8">
      {/* 相关推荐 */}
      <section aria-labelledby="related-heading">
        <h2
          id="related-heading"
          className="flex items-center justify-between border-b-2 border-primary pb-2 font-serif text-base font-bold text-foreground"
        >
          <span>相关推荐</span>
          <span className="font-sans text-[10px] tracking-[0.2em] text-muted-foreground">
            RELATED
          </span>
        </h2>
        <ul className="mt-3 divide-y divide-border">
          {related.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/articles/${a.slug}`}
                className="group flex flex-col gap-1 py-2.5 text-sm transition-colors"
              >
                <span className="line-clamp-2 leading-relaxed text-foreground group-hover:text-primary">
                  {a.title}
                </span>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="inline-block bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
                    {a.category}
                  </span>
                  <time className="font-mono tabular-nums">{a.date}</time>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 快捷入口 */}
      <section aria-labelledby="quick-heading">
        <h2
          id="quick-heading"
          className="flex items-center justify-between border-b-2 border-primary pb-2 font-serif text-base font-bold text-foreground"
        >
          <span>常用入口</span>
          <span className="font-sans text-[10px] tracking-[0.2em] text-muted-foreground">
            QUICK LINKS
          </span>
        </h2>
        <ul className="mt-3 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
          {quickEntries.map((q) => (
            <li key={q.label}>
              <a
                href={q.href}
                className="flex h-full items-center gap-2 bg-card px-3 py-3 text-xs text-foreground transition-colors hover:bg-secondary/60 hover:text-primary"
              >
                <q.icon className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span className="truncate">{q.label}</span>
                <ChevronRight className="ml-auto h-3 w-3 shrink-0 text-muted-foreground" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
