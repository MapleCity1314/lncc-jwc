import type { Article } from "@/lib/articles"

interface ArticleBodyProps {
  content: Article["content"]
}

export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="prose-article">
      {content.map((block, i) => {
        switch (block.type) {
          case "h":
            return (
              <h2
                key={i}
                className="mt-8 mb-3 font-serif text-lg font-bold text-foreground first:mt-0 md:text-xl"
              >
                {block.text}
              </h2>
            )
          case "p":
            return (
              <p
                key={i}
                className="my-4 text-[15px] leading-[1.9] text-foreground first:mt-0"
              >
                {block.text}
              </p>
            )
          case "ul":
            return (
              <ul
                key={i}
                className="my-4 list-disc space-y-2 pl-6 text-[15px] leading-[1.9] text-foreground marker:text-primary"
              >
                {block.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            )
          case "ol":
            return (
              <ol
                key={i}
                className="my-4 list-decimal space-y-2 pl-6 text-[15px] leading-[1.9] text-foreground marker:font-mono marker:font-bold marker:text-primary"
              >
                {block.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ol>
            )
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-5 border-l-4 border-accent bg-accent/5 px-4 py-3 font-serif text-[15px] leading-relaxed text-foreground"
              >
                {block.text}
              </blockquote>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
