import Link from "next/link"
import { ArrowLeft, FileQuestion } from "lucide-react"
import { SiteTopBar } from "@/components/site-top-bar"
import { SiteHeader } from "@/components/site-header"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

export default function ArticleNotFound() {
  return (
    <>
      <SiteTopBar />
      <SiteHeader />
      <SiteNav currentHref="/" />
      <main className="mx-auto w-full max-w-[1200px] px-4 py-16">
        <div className="mx-auto max-w-xl border border-border bg-card px-8 py-12 text-center">
          <FileQuestion className="mx-auto h-12 w-12 text-primary" aria-hidden />
          <h1 className="mt-4 font-serif text-2xl font-bold text-foreground">
            未找到该文章
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            您访问的通知或公告可能已被撤稿、归档或地址变更。
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-1 border border-primary bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            返回首页
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
