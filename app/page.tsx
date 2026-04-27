import { SiteTopBar } from "@/components/site-top-bar"
import { SiteHeader } from "@/components/site-header"
import { SiteNav } from "@/components/site-nav"
import { SectionTeaching } from "@/components/section-teaching"
import { SectionExam } from "@/components/section-exam"
import { SectionTalent } from "@/components/section-talent"
import { SectionDownload } from "@/components/section-download"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <>
      <SiteTopBar />
      <SiteHeader />
      <SiteNav />

      <main className="mx-auto w-full max-w-[1200px] px-4 py-8 md:py-10">
        {/* 第一屏：教学信息 + 考务信息 —— 通知与新闻列表 */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-[7fr_5fr]">
          <SectionTeaching />
          <SectionExam />
        </div>

        {/* 分隔 */}
        <div className="my-10 border-t border-border/60" aria-hidden />

        {/* 第二屏：人才培养 —— 五栏目政策入口 */}
        <SectionTalent />

        {/* 分隔 */}
        <div className="my-10 border-t border-border/60" aria-hidden />

        {/* 第三屏：资料下载 —— 表格化文件列表 */}
        <SectionDownload />
      </main>

      <SiteFooter />
    </>
  )
}
