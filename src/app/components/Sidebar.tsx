import Logo from './Logo'
import { cn } from '@/lib/utils'
import type { SectionId } from '../App'

interface SidebarProps {
  sections: { id: SectionId; label: string }[]
  activeSection: SectionId
  onSectionChange: (id: SectionId) => void
}

export default function Sidebar({ sections, activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="flex h-full w-56 shrink-0 flex-col border-r border-border bg-card">
      <Logo />
      <div className="px-2 pb-2">
        <p className="px-2 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Design Tokens
        </p>
        <nav className="space-y-0.5">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={cn(
                'flex w-full items-center rounded-md px-2 py-1.5 text-sm transition-colors',
                activeSection === section.id
                  ? 'bg-accent font-medium text-accent-foreground'
                  : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground',
              )}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-auto border-t border-border px-4 py-3">
        <p className="text-[10px] text-muted-foreground">Design System 3.0</p>
      </div>
    </aside>
  )
}
