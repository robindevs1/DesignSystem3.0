import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ColorsSection from './components/sections/ColorsSection'
import TypographySection from './components/sections/TypographySection'
import SpacingSection from './components/sections/SpacingSection'
import ButtonsSection from './components/sections/ButtonsSection'
import IconsSection from './components/sections/IconsSection'
import InputFieldsSection from './components/sections/InputFieldsSection'
import EffectsSection from './components/sections/EffectsSection'
import BorderRadiusSection from './components/sections/BorderRadiusSection'

export type SectionId =
  | 'colors'
  | 'typography'
  | 'spacing'
  | 'buttons'
  | 'icons'
  | 'input-fields'
  | 'effects'
  | 'border-radius'

const SECTIONS: { id: SectionId; label: string }[] = [
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'spacing', label: 'Spacing' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'icons', label: 'Icons' },
  { id: 'input-fields', label: 'Input Fields' },
  { id: 'effects', label: 'Effects' },
  { id: 'border-radius', label: 'Border Radius' },
]

function renderSection(section: SectionId) {
  switch (section) {
    case 'colors': return <ColorsSection />
    case 'typography': return <TypographySection />
    case 'spacing': return <SpacingSection />
    case 'buttons': return <ButtonsSection />
    case 'icons': return <IconsSection />
    case 'input-fields': return <InputFieldsSection />
    case 'effects': return <EffectsSection />
    case 'border-radius': return <BorderRadiusSection />
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('colors')

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <Sidebar
        sections={SECTIONS}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="flex-1 overflow-y-auto">
        {renderSection(activeSection)}
      </main>
    </div>
  )
}
