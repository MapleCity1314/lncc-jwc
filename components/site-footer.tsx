export function SiteFooter() {
  return (
    <footer className="mt-16 border-t-2 border-primary bg-secondary/40">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        {/* 第一行：链接 */}
        <nav aria-label="页脚导航" className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
          <a href="/" className="text-primary hover:underline">
            网站首页
          </a>
          <span className="text-border" aria-hidden>
            |
          </span>
          <a
            href="https://www.lncc.edu.cn/"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            交专首页
          </a>
          <span className="text-border" aria-hidden>
            |
          </span>
          <a href="#contact" className="text-primary hover:underline">
            联系我们
          </a>
        </nav>

        {/* 第二行：联系与版权 */}
        <div className="mt-5 grid grid-cols-1 gap-4 border-t border-border/70 pt-5 text-xs leading-relaxed text-muted-foreground md:grid-cols-[1fr_auto]">
          <div className="space-y-1">
            <p>
              地址：辽宁省沈阳市大东区东陵西路 86 号 &nbsp;·&nbsp; 邮编：110122
            </p>
            <p>
              教务处办公室：024-8838xxxx &nbsp;·&nbsp; 学籍科：024-8838xxxx &nbsp;·&nbsp;
              考试中心：024-8838xxxx
            </p>
            <p className="pt-2 font-serif text-sm text-foreground">
              Copyright @ 2010 辽宁省交通高等专科学校教务处 All Rights Reserved.
            </p>
            <p>辽宁交专信息技术中心 技术支持。</p>
          </div>
          <div className="text-xs text-muted-foreground md:text-right">
            <p>辽 ICP 备 0500xxxx 号</p>
            <p className="mt-1">辽公网安备 21010xxxxxxxxx 号</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
