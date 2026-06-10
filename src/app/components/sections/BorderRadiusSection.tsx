import SectionHeader from '../SectionHeader'

// TODO (Claude Code): update border radius tokens from the Figma Make design.
// Reference: https://www.figma.com/make/x2nmf0sfIjp9dG6RYKUMHN/Coleman-Design-System-3.0

const RADIUS_TOKENS = [
  { name: 'None', className: 'rounded-none', css: '0px', token: '--radius-none' },
  { name: 'XS', className: 'rounded-sm', css: '2px', token: '--radius-xs' },
  { name: 'SM', className: 'rounded', css: '4px', token: '--radius-sm' },
  { name: 'MD', className: 'rounded-md', css: '6px', token: '--radius-md' },
  { name: 'LG', className: 'rounded-lg', css: '8px', token: '--radius-lg' },
  { name: 'XL', className: 'rounded-xl', css: '12px', token: '--radius-xl' },
  { name: '2XL', className: 'rounded-2xl', css: '16px', token: '--radius-2xl' },
  { name: '3XL', className: 'rounded-3xl', css: '24px', token: '--radius-3xl' },
  { name: 'Full', className: 'rounded-full', css: '9999px', token: '--radius-full' },
]

export default function BorderRadiusSection() {
  return (
    <div className="p-10">
      <SectionHeader
        title="Border Radius"
        description="Corner radius scale used for components and containers."
      />

      <div className="flex flex-wrap gap-8">
        {RADIUS_TOKENS.map((token) => (
          <div key={token.name} className="flex flex-col items-center gap-3">
            <div
              className={`h-20 w-20 bg-primary/15 border-2 border-primary/40 ${token.className}`}
            />
            <div className="text-center">
              <p className="text-xs font-medium text-foreground">{token.name}</p>
              <p className="font-mono text-[10px] text-muted-foreground">{token.css}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
