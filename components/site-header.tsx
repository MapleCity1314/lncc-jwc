import Image from "next/image"
import { Search } from "lucide-react"

import { withBasePath } from "@/lib/site-paths"

export function SiteHeader() {
  return (
    <header className="relative w-full bg-primary text-primary-foreground">
      {/* Banner image with overlay text */}
      <div className="relative h-[260px] w-full overflow-hidden md:h-[340px]">
        <Image
          src={withBasePath("/nybanner.png")}
          alt="辽宁省交通高等专科学校校园主楼远景"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* 深色叠层确保文字可读 */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/55 to-primary/80" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center px-4">
          <div className="flex items-center gap-5">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-primary-foreground/40 bg-primary-foreground/10 md:h-20 md:w-20">
              <Image
                src={withBasePath("/logo.png")}
                alt="辽宁省交通高等专科学校校徽"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-black tracking-wide text-primary-foreground md:text-4xl">
                辽宁省交通高等专科学校
                <span className="ml-2 inline-block border-l border-primary-foreground/40 pl-3 align-middle text-xl font-bold md:text-3xl">
                  教 务 处
                </span>
              </h1>
              <p className="mt-2 font-sans text-xs tracking-[0.2em] text-primary-foreground/75 md:text-sm">
                ACADEMIC AFFAIRS OFFICE · LIAONING PROVINCIAL COLLEGE OF COMMUNICATIONS
              </p>
            </div>
          </div>
        </div>

        {/* 检索框 */}
        <div className="absolute right-4 top-4 z-10 hidden md:block">
          <form
            role="search"
            className="flex h-9 items-center gap-2 rounded-sm border border-primary-foreground/30 bg-primary-foreground/10 pl-3 pr-1 backdrop-blur"
          >
            <Search className="h-4 w-4 text-primary-foreground/80" aria-hidden />
            <label htmlFor="site-search" className="sr-only">
              站内检索
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="站内检索：通知 / 表格 / 系统"
              className="h-7 w-64 bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none"
            />
            <button
              type="submit"
              className="h-7 rounded-sm bg-primary-foreground/15 px-3 text-xs font-medium text-primary-foreground hover:bg-primary-foreground/25"
            >
              检索
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}
