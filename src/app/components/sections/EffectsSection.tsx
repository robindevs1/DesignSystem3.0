import SectionHeader from '../SectionHeader'

// TODO (Claude Code): update shadow/effect tokens from the Figma Make design.
// Reference: https://www.figma.com/make/x2nmf0sfIjp9dG6RYKUMHN/Coleman-Design-System-3.0

const SHADOWS = [
  { name: 'None', className: '', css: 'none' },
  { name: 'XS', className: 'shadow-sm', css: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  { name: 'SM', className: 'shadow', css: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' },
  { name: 'MD', className: 'shadow-md', css: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
  { name: 'LG', className: 'shadow-lg', css: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
  { name: 'XL', className: 'shadow-xl', css: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
  { name: '2XL', className: 'shadow-2xl', css: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
]

const BLURS = [
  { name: 'SM', className: 'backdrop-blur-sm', css: 'blur(4px)' },
  { name: 'MD', className: 'backdrop-blur', css: 'blur(8px)' },
  { name: 'LG', className: 'backdrop-blur-lg', css: 'blur(16px)' },
]

export default function EffectsSection() {
  return (
    <div className="p-10">
      <SectionHeader
        title="Effects"
        description="Shadows, blurs, and other visual effects."
      />

      <div className="space-y-12">
        {/* Shadows */}
        <div>
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Shadows
          </h2>
          <div className="flex flex-wrap gap-6">
            {SHADOWS.map((shadow) => (
              <div key={shadow.name} className="flex flex-col items-center gap-3">
                <div
                  className={`h-20 w-32 rounded-lg bg-card border border-border ${shadow.className}`}
                />
                <div className="text-center">
                  <p className="text-xs font-medium text-foreground">{shadow.name}</p>
                  <p className="font-mono text-[9px] text-muted-foreground mt-0.5 max-w-[128px] truncate">
                    {shadow.css}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blur */}
        <div>
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Backdrop Blur
          </h2>
          <div className="flex flex-wrap gap-6">
            {BLURS.map((blur) => (
              <div key={blur.name} className="flex flex-col items-center gap-3">
                <div className="relative h-20 w-32 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />
                  <div className={`absolute inset-0 ${blur.className} bg-white/30`} />
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium text-foreground">{blur.name}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{blur.css}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
