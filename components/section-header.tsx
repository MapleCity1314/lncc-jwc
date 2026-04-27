import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SectionHeaderProps {
  title: string
  subtitle: string
  href?: string
}

export function SectionHeader({ title, subtitle, href = "#" }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between border-b-2 border-primary pb-2">
      <div className="flex items-baseline gap-3">
        <h2 className="font-serif text-xl font-black text-primary md:text-2xl">{title}</h2>
        <span className="hidden text-xs uppercase tracking-[0.25em] text-muted-foreground md:inline">
          {subtitle}
        </span>
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-0.5 text-xs text-muted-foreground transition-colors hover:text-accent"
      >
        查看更多
        <ChevronRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  )
}
