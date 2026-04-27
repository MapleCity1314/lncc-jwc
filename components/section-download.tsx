import { SectionHeader } from "./section-header"
import { Download } from "lucide-react"

type FileType = "PDF" | "DOC" | "XLS"

interface FileItem {
  type: FileType
  name: string
  size: string
  date: string
  category: string
}

const files: FileItem[] = [
  {
    type: "DOC",
    name: "辽宁省交通高等专科学校 学生缓考申请表 (2026版)",
    size: "62 KB",
    date: "2026-04-22",
    category: "考试相关",
  },
  {
    type: "XLS",
    name: "教学任务书 / 教学进度表 模板",
    size: "48 KB",
    date: "2026-04-20",
    category: "教务表格",
  },
  {
    type: "DOC",
    name: "学籍异动申请表（休学 / 复学 / 转专业）",
    size: "75 KB",
    date: "2026-04-18",
    category: "学籍材料",
  },
  {
    type: "PDF",
    name: "辽宁交专 课堂教学规范与教师授课守则",
    size: "1.2 MB",
    date: "2026-04-15",
    category: "教学管理",
  },
  {
    type: "DOC",
    name: "毕业设计（论文）选题汇总表 / 任务书",
    size: "112 KB",
    date: "2026-04-10",
    category: "教学管理",
  },
  {
    type: "PDF",
    name: "学分制管理实施细则（修订）",
    size: "856 KB",
    date: "2026-04-06",
    category: "学籍材料",
  },
  {
    type: "DOC",
    name: "成绩更正 / 复核 申请表",
    size: "54 KB",
    date: "2026-04-01",
    category: "考试相关",
  },
  {
    type: "XLS",
    name: "学期教学工作量统计表 (院系汇总)",
    size: "92 KB",
    date: "2026-03-28",
    category: "常用申请",
  },
]

const typeStyle: Record<FileType, string> = {
  PDF: "bg-accent text-accent-foreground",
  DOC: "bg-primary text-primary-foreground",
  XLS: "bg-[oklch(0.45_0.12_155)] text-primary-foreground",
}

export function SectionDownload() {
  return (
    <section aria-labelledby="download-heading">
      <div id="download-heading">
        <SectionHeader title="资料下载" subtitle="DOWNLOADS" />
      </div>

      <div className="mt-3 overflow-hidden border border-border">
        {/* 表头 */}
        <div className="hidden grid-cols-[64px_1fr_120px_88px_120px_88px] items-center gap-4 border-b border-border bg-secondary/70 px-4 py-2 text-xs font-medium text-muted-foreground md:grid">
          <span>类型</span>
          <span>文件名称</span>
          <span>所属分类</span>
          <span className="text-right">大小</span>
          <span className="text-right">更新日期</span>
          <span className="text-right">操作</span>
        </div>

        <ul className="divide-y divide-border">
          {files.map((f, i) => (
            <li
              key={i}
              className="grid grid-cols-[40px_1fr_auto] items-center gap-3 px-3 py-3 transition-colors hover:bg-secondary/50 md:grid-cols-[64px_1fr_120px_88px_120px_88px] md:gap-4 md:px-4"
            >
              <span
                className={`inline-flex h-7 w-12 items-center justify-center font-mono text-[11px] font-bold tracking-wider ${typeStyle[f.type]}`}
              >
                {f.type}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm text-foreground">{f.name}</span>
                <span className="mt-0.5 block text-xs text-muted-foreground md:hidden">
                  {f.category} · {f.size} · {f.date}
                </span>
              </span>
              <span className="hidden truncate text-xs text-muted-foreground md:block">
                {f.category}
              </span>
              <span className="hidden text-right font-mono text-xs tabular-nums text-muted-foreground md:block">
                {f.size}
              </span>
              <time className="hidden text-right font-mono text-xs tabular-nums text-muted-foreground md:block">
                {f.date}
              </time>
              <a
                href="#"
                aria-label={`下载 ${f.name}`}
                className="inline-flex items-center justify-self-end gap-1 border border-border px-2.5 py-1 text-xs text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground md:justify-self-stretch md:justify-center"
              >
                <Download className="h-3.5 w-3.5" aria-hidden />
                下载
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
