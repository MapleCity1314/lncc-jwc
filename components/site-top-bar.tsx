import { ChevronRight } from "lucide-react"

export function SiteTopBar() {
  const today = new Date().toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })

  return (
    <div className="w-full border-b border-border/60 bg-secondary/60">
      <div className="mx-auto flex h-9 max-w-[1200px] items-center justify-between px-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <span>欢迎访问辽宁省交通高等专科学校教务处</span>
          <span className="hidden text-border md:inline">|</span>
          <time className="hidden md:inline" dateTime={new Date().toISOString()}>
            今天是 {today}
          </time>
        </div>
        <nav aria-label="辅助导航" className="flex items-center gap-4">
          <a href="https://www.lncc.edu.cn/" className="hover:text-primary">
            交专首页
          </a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-primary">
            设为首页
          </a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-primary">
            加入收藏
          </a>
          <span className="text-border">|</span>
          <a href="#" className="inline-flex items-center gap-0.5 hover:text-primary">
            English <ChevronRight className="h-3 w-3" />
          </a>
        </nav>
      </div>
    </div>
  )
}
