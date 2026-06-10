import SectionHeader from '../SectionHeader'

// TODO (Claude Code): populate button variants from the Figma Make design.
// Reference: https://www.figma.com/make/x2nmf0sfIjp9dG6RYKUMHN/Coleman-Design-System-3.0

export default function ButtonsSection() {
  return (
    <div className="p-10">
      <SectionHeader
        title="Buttons"
        description="Button variants, sizes, and states."
      />

      <div className="space-y-10">
        {/* Variants */}
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Variants
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Primary
            </button>
            <button className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">
              Secondary
            </button>
            <button className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">
              Outline
            </button>
            <button className="rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">
              Ghost
            </button>
            <button className="rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground transition-opacity hover:opacity-90">
              Destructive
            </button>
            <button className="text-sm font-medium text-primary underline-offset-4 hover:underline">
              Link
            </button>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Sizes
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded px-2.5 py-1 text-xs font-medium bg-primary text-primary-foreground hover:opacity-90">
              Small
            </button>
            <button className="rounded-md px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90">
              Medium
            </button>
            <button className="rounded-md px-5 py-2.5 text-base font-medium bg-primary text-primary-foreground hover:opacity-90">
              Large
            </button>
          </div>
        </div>

        {/* States */}
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            States
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              Default
            </button>
            <button className="rounded-md bg-primary/80 px-4 py-2 text-sm font-medium text-primary-foreground ring-2 ring-ring ring-offset-2">
              Focus
            </button>
            <button className="rounded-md bg-primary/70 px-4 py-2 text-sm font-medium text-primary-foreground">
              Hover
            </button>
            <button
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground opacity-50 cursor-not-allowed"
              disabled
            >
              Disabled
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
