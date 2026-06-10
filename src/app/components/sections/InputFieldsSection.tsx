import SectionHeader from '../SectionHeader'
import { Search } from 'lucide-react'

// TODO (Claude Code): update to match the Figma Make input field designs.
// Reference: https://www.figma.com/make/x2nmf0sfIjp9dG6RYKUMHN/Coleman-Design-System-3.0

export default function InputFieldsSection() {
  return (
    <div className="p-10">
      <SectionHeader
        title="Input Fields"
        description="Form input variants, states, and sizes."
      />

      <div className="max-w-md space-y-10">
        {/* Variants */}
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Variants
          </h2>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Default</label>
              <input
                type="text"
                placeholder="Placeholder text"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">With icon</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">With label & helper</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <p className="text-xs text-muted-foreground">We'll never share your email.</p>
            </div>
          </div>
        </div>

        {/* States */}
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            States
          </h2>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Focus</label>
              <input
                type="text"
                defaultValue="Focused input"
                className="w-full rounded-md border border-ring bg-background px-3 py-2 text-sm ring-2 ring-ring focus:outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">Error</label>
              <input
                type="text"
                defaultValue="Invalid value"
                className="w-full rounded-md border border-destructive bg-background px-3 py-2 text-sm ring-2 ring-destructive focus:outline-none"
              />
              <p className="text-xs text-destructive">This field is required.</p>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Disabled</label>
              <input
                type="text"
                value="Disabled input"
                disabled
                className="w-full rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Textarea */}
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Textarea
          </h2>
          <textarea
            placeholder="Enter a longer description..."
            rows={4}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
        </div>
      </div>
    </div>
  )
}
