import SectionHeader from '../SectionHeader'

// TODO (Claude Code): populate spacing tokens from the Figma Make design.
// Reference: https://www.figma.com/make/x2nmf0sfIjp9dG6RYKUMHN/Coleman-Design-System-3.0

const SPACING_TOKENS = [
  { name: '1', value: '4px', rem: '0.25rem' },
  { name: '2', value: '8px', rem: '0.5rem' },
  { name: '3', value: '12px', rem: '0.75rem' },
  { name: '4', value: '16px', rem: '1rem' },
  { name: '5', value: '20px', rem: '1.25rem' },
  { name: '6', value: '24px', rem: '1.5rem' },
  { name: '8', value: '32px', rem: '2rem' },
  { name: '10', value: '40px', rem: '2.5rem' },
  { name: '12', value: '48px', rem: '3rem' },
  { name: '16', value: '64px', rem: '4rem' },
  { name: '20', value: '80px', rem: '5rem' },
  { name: '24', value: '96px', rem: '6rem' },
]

export default function SpacingSection() {
  return (
    <div className="p-10">
      <SectionHeader
        title="Spacing"
        description="Spacing scale used for padding, margin, and layout gaps."
      />
      <div className="space-y-3">
        {SPACING_TOKENS.map((token) => (
          <div key={token.name} className="flex items-center gap-6">
            <div className="w-10 text-right font-mono text-xs text-muted-foreground">
              {token.name}
            </div>
            <div
              className="h-5 rounded-sm bg-primary/20 border border-primary/30"
              style={{ width: token.value }}
            />
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span className="font-mono w-12">{token.value}</span>
              <span className="font-mono">{token.rem}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
