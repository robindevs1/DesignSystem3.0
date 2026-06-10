import SectionHeader from '../SectionHeader'

// TODO (Claude Code): populate typography tokens from the Figma Make design.
// Reference: https://www.figma.com/make/x2nmf0sfIjp9dG6RYKUMHN/Coleman-Design-System-3.0

interface TypeScale {
  name: string
  size: string
  lineHeight: string
  weight: string
  sample: string
}

const TYPE_SCALE: TypeScale[] = [
  { name: 'Display', size: '3rem / 48px', lineHeight: '1.1', weight: '700', sample: 'The quick brown fox' },
  { name: 'H1', size: '2rem / 32px', lineHeight: '1.2', weight: '600', sample: 'The quick brown fox' },
  { name: 'H2', size: '1.5rem / 24px', lineHeight: '1.3', weight: '600', sample: 'The quick brown fox' },
  { name: 'H3', size: '1.25rem / 20px', lineHeight: '1.4', weight: '600', sample: 'The quick brown fox' },
  { name: 'H4', size: '1.125rem / 18px', lineHeight: '1.4', weight: '500', sample: 'The quick brown fox' },
  { name: 'Body Large', size: '1rem / 16px', lineHeight: '1.6', weight: '400', sample: 'The quick brown fox jumps over the lazy dog.' },
  { name: 'Body', size: '0.875rem / 14px', lineHeight: '1.6', weight: '400', sample: 'The quick brown fox jumps over the lazy dog.' },
  { name: 'Small', size: '0.75rem / 12px', lineHeight: '1.5', weight: '400', sample: 'The quick brown fox jumps over the lazy dog.' },
  { name: 'Caption', size: '0.625rem / 10px', lineHeight: '1.4', weight: '400', sample: 'THE QUICK BROWN FOX' },
]

const CLASS_MAP: Record<string, string> = {
  'Display': 'text-5xl font-bold',
  'H1': 'text-3xl font-semibold',
  'H2': 'text-2xl font-semibold',
  'H3': 'text-xl font-semibold',
  'H4': 'text-lg font-medium',
  'Body Large': 'text-base',
  'Body': 'text-sm',
  'Small': 'text-xs',
  'Caption': 'text-[10px] uppercase tracking-widest',
}

export default function TypographySection() {
  return (
    <div className="p-10">
      <SectionHeader
        title="Typography"
        description="Type scale and font styles used across Coleman's design system."
      />
      <div className="divide-y divide-border">
        {TYPE_SCALE.map((style) => (
          <div key={style.name} className="grid grid-cols-[160px_1fr] items-start gap-8 py-6">
            <div className="space-y-1 pt-1">
              <p className="text-sm font-medium text-foreground">{style.name}</p>
              <p className="font-mono text-[10px] text-muted-foreground">{style.size}</p>
              <p className="font-mono text-[10px] text-muted-foreground">lh {style.lineHeight}</p>
              <p className="font-mono text-[10px] text-muted-foreground">w {style.weight}</p>
            </div>
            <p className={`${CLASS_MAP[style.name]} text-foreground`}>{style.sample}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
