import { CalendarDays, Eye, User2, Building2 } from "lucide-react"

interface ArticleMetaProps {
  date: string
  author: string
  source: string
  views: number
}

export function ArticleMeta({ date, author, source, views }: ArticleMetaProps) {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-muted-foreground">
      <li className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-3.5 w-3.5" aria-hidden />
        <time dateTime={date} className="font-mono tabular-nums">
          {date}
        </time>
      </li>
      <li className="inline-flex items-center gap-1.5">
        <User2 className="h-3.5 w-3.5" aria-hidden />
        作者：{author}
      </li>
      <li className="inline-flex items-center gap-1.5">
        <Building2 className="h-3.5 w-3.5" aria-hidden />
        来源：{source}
      </li>
      <li className="inline-flex items-center gap-1.5">
        <Eye className="h-3.5 w-3.5" aria-hidden />
        浏览：<span className="font-mono tabular-nums">{views.toLocaleString()}</span>
      </li>
    </ul>
  )
}
