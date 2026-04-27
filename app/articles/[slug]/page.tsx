import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Home, Printer, ArrowLeft, ArrowRight } from "lucide-react"

import { SiteTopBar } from "@/components/site-top-bar"
import { SiteHeader } from "@/components/site-header"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ArticleMeta } from "@/components/article-meta"
import { ArticleBody } from "@/components/article-body"
import { ArticleAttachments } from "@/components/article-attachments"
import { ArticleSidebar } from "@/components/article-sidebar"

import {
  articles,
  getAdjacentArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/articles"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) {
    return { title: "文章未找到 - 辽宁省交通高等专科学校 教务处" }
  }
  return {
    title: `${article.title} - 辽宁省交通高等专科学校 教务处`,
    description: article.summary,
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const related = getRelatedArticles(slug, 6)
  const { prev, next } = getAdjacentArticles(slug)

  return (
    <>
      <SiteTopBar />
      <SiteHeader />
      <SiteNav currentHref="/" />

      {/* 面包屑 */}
      <div className="w-full border-b border-border bg-secondary/40">
        <nav
          aria-label="面包屑导航"
          className="mx-auto flex max-w-[1200px] items-center gap-1.5 px-4 py-3 text-xs text-muted-foreground"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-primary"
          >
            <Home className="h-3.5 w-3.5" aria-hidden />
            首页
          </Link>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <span>{article.category}</span>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <span className="line-clamp-1 text-foreground">{article.title}</span>
        </nav>
      </div>

      <main className="mx-auto w-full max-w-[1200px] px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-[8fr_4fr]">
          {/* 正文区 */}
          <article className="min-w-0 border border-border bg-card">
            {/* 标题区 */}
            <header className="border-b border-border px-6 py-7 md:px-10 md:py-9">
              <span className="inline-block rounded-sm bg-primary px-2 py-0.5 font-sans text-xs text-primary-foreground">
                {article.category}
              </span>
              <h1 className="mt-3 text-pretty font-serif text-2xl font-black leading-snug text-foreground md:text-3xl">
                {article.title}
              </h1>
              <p className="mt-3 text-balance text-sm leading-relaxed text-muted-foreground">
                {article.summary}
              </p>
              <div className="mt-5 border-t border-dashed border-border pt-4">
                <ArticleMeta
                  date={article.date}
                  author={article.author}
                  source={article.source}
                  views={article.views}
                />
              </div>
            </header>

            {/* 正文 */}
            <div className="px-6 py-7 md:px-10 md:py-9">
              <ArticleBody content={article.content} />

              {article.attachments && article.attachments.length > 0 && (
                <ArticleAttachments items={article.attachments} />
              )}

              {/* 操作条 */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground">
                <span>
                  本文责任编辑：{article.author} · 发布于 {article.date}
                </span>
                <div className="flex items-center gap-2">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1 border border-border bg-background px-3 py-1.5 hover:border-primary hover:text-primary"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
                    返回首页
                  </Link>
                  <span className="inline-flex cursor-default items-center gap-1 border border-border bg-background px-3 py-1.5">
                    <Printer className="h-3.5 w-3.5" aria-hidden />
                    打印
                  </span>
                </div>
              </div>

              {/* 上一篇 / 下一篇 */}
              <nav
                aria-label="文章翻页"
                className="mt-6 grid grid-cols-1 gap-3 border-t border-dashed border-border pt-5 text-sm md:grid-cols-2"
              >
                {prev ? (
                  <Link
                    href={`/articles/${prev.slug}`}
                    className="group flex items-start gap-2 border border-border bg-secondary/30 px-4 py-3 transition-colors hover:border-primary hover:bg-secondary/60"
                  >
                    <ArrowLeft
                      className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary"
                      aria-hidden
                    />
                    <span className="min-w-0">
                      <span className="block text-xs text-muted-foreground">
                        上一篇
                      </span>
                      <span className="mt-0.5 line-clamp-1 text-foreground group-hover:text-primary">
                        {prev.title}
                      </span>
                    </span>
                  </Link>
                ) : (
                  <span className="border border-dashed border-border px-4 py-3 text-xs text-muted-foreground">
                    已经是第一篇
                  </span>
                )}
                {next ? (
                  <Link
                    href={`/articles/${next.slug}`}
                    className="group flex items-start justify-end gap-2 border border-border bg-secondary/30 px-4 py-3 text-right transition-colors hover:border-primary hover:bg-secondary/60"
                  >
                    <span className="min-w-0">
                      <span className="block text-xs text-muted-foreground">
                        下一篇
                      </span>
                      <span className="mt-0.5 line-clamp-1 text-foreground group-hover:text-primary">
                        {next.title}
                      </span>
                    </span>
                    <ArrowRight
                      className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary"
                      aria-hidden
                    />
                  </Link>
                ) : (
                  <span className="border border-dashed border-border px-4 py-3 text-right text-xs text-muted-foreground">
                    已经是最后一篇
                  </span>
                )}
              </nav>
            </div>
          </article>

          {/* 侧边栏 */}
          <ArticleSidebar related={related} />
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
