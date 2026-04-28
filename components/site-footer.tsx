import Image from "next/image"

export function SiteFooter() {
  return (
    <footer
      className="relative mt-16 overflow-hidden border-t border-primary/20 bg-primary bg-cover bg-center text-primary-foreground"
      style={{ backgroundImage: "url('/footerbg.png')" }}
    >
      <div className="absolute inset-0 bg-primary/90" aria-hidden />

      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-[minmax(118px,34vw)_1fr] items-center gap-4 px-4 py-8 sm:grid-cols-[220px_1fr] md:gap-8 lg:grid-cols-[280px_1fr]">
        <div className="flex justify-start">
          <Image
            src="/main-logo.png"
            alt="辽宁省交通高等专科学校"
            width={435}
            height={89}
            className="h-auto w-full max-w-[160px] sm:max-w-[220px] lg:max-w-[280px]"
          />
        </div>

        <div className="space-y-1 text-left text-xs leading-relaxed text-primary-foreground/80 sm:text-sm">
          <p>地址：辽宁省沈阳市沈北新区建设南一路5号，110122</p>
          <p>招生电话：89708729 / 就业电话：89715595</p>
          <p className="pt-2 font-serif text-sm text-primary-foreground">
            Copyright @ 2010 辽宁省交通高等专科学校教务处 All Rights Reserved.
          </p>
          <p className="text-xs">辽宁交专信息技术中心 技术支持。</p>
        </div>
      </div>
    </footer>
  )
}
