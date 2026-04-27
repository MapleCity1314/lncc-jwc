import Link from "next/link"
import { SectionHeader } from "./section-header"
import { articles, type ArticleCategory } from "@/lib/articles"

const teachingCategories: ArticleCategory[] = [
  "教学通知",
  "课程安排",
  "调停课",
  "教学运行",
  "教材课程",
]

const notices = articles
  .filter((a) => teachingCategories.includes(a.category))
  .slice(0, 7)
  .map((a, i) => ({
    slug: a.slug,
    category: a.category,
    title: a.title,
    date: a.date,
    isNew: i < 2,
  }))

const categoryStyle: Record<ArticleCategory, string> = {
  教学通知: "bg-primary text-primary-foreground",
  课程安排: "bg-secondary text-secondary-foreground border border-border",
  调停课: "bg-accent/10 text-accent border border-accent/30",
  教学运行: "bg-secondary text-secondary-foreground border border-border",
  教材课程: "bg-secondary text-secondary-foreground border border-border",
  考务通知: "bg-secondary text-secondary-foreground border border-border",
  人才培养: "bg-secondary text-secondary-foreground border border-border",
}

export function SectionTeaching() {
  return (
    <section aria-labelledby="teaching-heading">
      <div id="teaching-heading">
        <SectionHeader title="教学信息" subtitle="TEACHING NOTICES" />
      </div>
      <ul className="mt-3 divide-y divide-border">
        {notices.map((n) => (
          <li key={n.slug}>
            <Link
              href={`/articles/${n.slug}`}
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
