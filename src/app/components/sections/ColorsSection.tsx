import SectionHeader from '../SectionHeader'

// TODO (Claude Code): populate color tokens from the Figma Make design.
// Reference: https://www.figma.com/make/x2nmf0sfIjp9dG6RYKUMHN/Coleman-Design-System-3.0
// Read src/app/components/sections/ColorsSection.tsx from the Figma Make source.

interface ColorSwatch {
  name: string
  value: string
  textColor?: string
}

interface ColorGroup {
  label: string
  swatches: ColorSwatch[]
}

const COLOR_GROUPS: ColorGroup[] = [
  {
    label: 'Primary',
    swatches: [
      { name: '900', value: '#0a0a0a', textColor: 'white' },
      { name: '800', value: '#1a1a1a', textColor: 'white' },
      { name: '700', value: '#2a2a2a', textColor: 'white' },
      { name: '600', value: '#404040', textColor: 'white' },
      { name: '500', value: '#595959', textColor: 'white' },
      { name: '400', value: '#737373', textColor: 'white' },
      { name: '300', value: '#9e9e9e' },
      { name: '200', value: '#c9c9c9' },
      { name: '100', value: '#e8e8e8' },
      { name: '50', value: '#f5f5f5' },
    ],
  },
  {
    label: 'Secondary',
    swatches: [
      { name: '500', value: '#6366f1', textColor: 'white' },
      { name: '400', value: '#818cf8', textColor: 'white' },
      { name: '300', value: '#a5b4fc' },
      { name: '200', value: '#c7d2fe' },
      { name: '100', value: '#e0e7ff' },
    ],
  },
  {
    label: 'Semantic',
    swatches: [
      { name: 'Success', value: '#22c55e', textColor: 'white' },
      { name: 'Warning', value: '#f59e0b', textColor: 'white' },
      { name: 'Error', value: '#ef4444', textColor: 'white' },
      { name: 'Info', value: '#3b82f6', textColor: 'white' },
    ],
  },
]

export default function ColorsSection() {
  return (
    <div className="p-10">
      <SectionHeader
        title="Colors"
        description="The core color palette used across Coleman's design system."
      />
      <div className="space-y-10">
        {COLOR_GROUPS.map((group) => (
          <div key={group.label}>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {group.label}
            </h2>
            <div className="flex flex-wrap gap-3">
              {group.swatches.map((swatch) => (
                <div key={swatch.name} className="flex flex-col gap-1.5">
                  <div
                    className="h-14 w-24 rounded-md border border-border"
                    style={{ backgroundColor: swatch.value }}
                  />
                  <div className="space-y-0.5">
                    <p className="text-xs font-medium text-foreground">{swatch.name}</p>
                    <p className="font-mono text-[10px] text-muted-foreground">{swatch.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
