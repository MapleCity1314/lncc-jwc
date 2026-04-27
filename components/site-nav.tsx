import Link from "next/link"
import { ExternalLink } from "lucide-react"

const items = [
  { label: "首页", href: "/", internal: true },
  {
    label: "智慧化教学管理系统",
    href: "https://jwxt.lncc.edu.cn/",
    internal: false,
  },
  {
    label: "数字化教学资源学习平台",
    href: "https://learn.lncc.edu.cn/",
    internal: false,
  },
  {
    label: "考试管理系统",
    href: "https://exam.lncc.edu.cn/",
    internal: false,
  },
  {
    label: "综合教务管理",
    href: "https://jwgl.lncc.edu.cn/",
    internal: false,
  },
]

interface SiteNavProps {
  currentHref?: string
}

export function SiteNav({ currentHref = "/" }: SiteNavProps) {
  return (
    <nav aria-label="主导航" className="w-full border-b-2 border-accent bg-primary">
      <div className="mx-auto max-w-[1200px] px-4">
        <ul className="flex flex-wrap items-stretch">
          {items.map((item) => {
            const isCurrent = item.internal && item.href === currentHref
            const baseClass =
              "flex h-12 items-center gap-1.5 px-5 text-sm font-medium transition-colors md:text-[15px]"
            const stateClass = isCurrent
              ? "bg-accent text-accent-foreground"
              : "text-primary-foreground hover:bg-primary-foreground/10"

            const content = (
              <>
                <span className="font-serif tracking-wide">{item.label}</span>
                {!item.internal && <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />}
              </>
            )

            return (
              <li key={item.label} className="border-r border-primary-foreground/15 last:border-r-0">
                {item.internal ? (
                  <Link
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`${baseClass} ${stateClass}`}
                  >
                    {content}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClass} ${stateClass}`}
                  >
                    {content}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
