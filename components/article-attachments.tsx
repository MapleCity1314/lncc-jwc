import { Download, Paperclip } from "lucide-react"
import type { ArticleAttachment } from "@/lib/articles"

interface ArticleAttachmentsProps {
  items: ArticleAttachment[]
}

const typeStyle: Record<ArticleAttachment["type"], string> = {
  PDF: "bg-accent text-accent-foreground",
  DOC: "bg-primary text-primary-foreground",
  XLS: "bg-[oklch(0.45_0.12_155)] text-primary-foreground",
}

export function ArticleAttachments({ items }: ArticleAttachmentsProps) {
  return (
    <section
      aria-labelledby="attachments-heading"
      className="mt-8 border border-dashed border-border bg-secondary/40 p-4"
    >
      <h2
        id="attachments-heading"
        className="mb-3 inline-flex items-center gap-1.5 font-serif text-sm font-bold text-foreground"
      >
        <Paperclip className="h-4 w-4 text-primary" aria-hidden />
        附件下载
      </h2>
      <ul className="divide-y divide-border/70">
        {items.map((f, i) => (
          <li
            key={i}
            className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0"
          >
            <span
              className={`inline-flex h-7 w-12 shrink-0 items-center justify-center font-mono text-[11px] font-bold tracking-wider ${typeStyle[f.type]}`}
            >
              {f.type}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm text-foreground">{f.name}</span>
              <span className="mt-0.5 block font-mono text-xs tabular-nums text-muted-foreground">
                {f.size}
              </span>
            </span>
            <a
              href="#"
              aria-label={`下载 ${f.name}`}
              className="inline-flex shrink-0 items-center gap-1 border border-border bg-background px-3 py-1.5 text-xs text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="h-3.5 w-3.5" aria-hidden />
              下载
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
