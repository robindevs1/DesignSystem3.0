import SectionHeader from '../SectionHeader'
import {
  AlertCircle, ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight,
  ChevronUp, Circle, Copy, Edit, ExternalLink, Eye, EyeOff, File, Filter,
  Grid, HelpCircle, Home, Info, Link, Loader2, Mail, Menu, Minus, Moon,
  MoreHorizontal, MoreVertical, Plus, Search, Settings, Star, Sun, Trash2,
  Upload, User, X, ZoomIn, ZoomOut,
} from 'lucide-react'

// TODO (Claude Code): update icon list to match the icons used in the Figma Make design.
// Reference: https://www.figma.com/make/x2nmf0sfIjp9dG6RYKUMHN/Coleman-Design-System-3.0

const ICONS = [
  { name: 'AlertCircle', icon: AlertCircle },
  { name: 'ArrowRight', icon: ArrowRight },
  { name: 'Check', icon: Check },
  { name: 'ChevronDown', icon: ChevronDown },
  { name: 'ChevronLeft', icon: ChevronLeft },
  { name: 'ChevronRight', icon: ChevronRight },
  { name: 'ChevronUp', icon: ChevronUp },
  { name: 'Circle', icon: Circle },
  { name: 'Copy', icon: Copy },
  { name: 'Edit', icon: Edit },
  { name: 'ExternalLink', icon: ExternalLink },
  { name: 'Eye', icon: Eye },
  { name: 'EyeOff', icon: EyeOff },
  { name: 'File', icon: File },
  { name: 'Filter', icon: Filter },
  { name: 'Grid', icon: Grid },
  { name: 'HelpCircle', icon: HelpCircle },
  { name: 'Home', icon: Home },
  { name: 'Info', icon: Info },
  { name: 'Link', icon: Link },
  { name: 'Loader2', icon: Loader2 },
  { name: 'Mail', icon: Mail },
  { name: 'Menu', icon: Menu },
  { name: 'Minus', icon: Minus },
  { name: 'Moon', icon: Moon },
  { name: 'MoreHorizontal', icon: MoreHorizontal },
  { name: 'MoreVertical', icon: MoreVertical },
  { name: 'Plus', icon: Plus },
  { name: 'Search', icon: Search },
  { name: 'Settings', icon: Settings },
  { name: 'Star', icon: Star },
  { name: 'Sun', icon: Sun },
  { name: 'Trash2', icon: Trash2 },
  { name: 'Upload', icon: Upload },
  { name: 'User', icon: User },
  { name: 'X', icon: X },
  { name: 'ZoomIn', icon: ZoomIn },
  { name: 'ZoomOut', icon: ZoomOut },
]

const SIZES = [
  { label: 'SM', px: 16 },
  { label: 'MD', px: 20 },
  { label: 'LG', px: 24 },
]

export default function IconsSection() {
  return (
    <div className="p-10">
      <SectionHeader
        title="Icons"
        description="Lucide icon set used throughout Coleman's design system."
      />

      <div className="space-y-10">
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Sizes
          </h2>
          <div className="flex items-end gap-6">
            {SIZES.map((size) => (
              <div key={size.label} className="flex flex-col items-center gap-2">
                <Search size={size.px} className="text-foreground" />
                <div className="text-center">
                  <p className="text-xs font-medium text-foreground">{size.label}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{size.px}px</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Icon Set
          </h2>
          <div className="flex flex-wrap gap-4">
            {ICONS.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 rounded-lg border border-border p-3 w-24"
              >
                <Icon size={20} className="text-foreground" />
                <p className="text-center font-mono text-[9px] text-muted-foreground leading-tight">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
