import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'docs-effects',
  imports: [SectionHeaderComponent],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EffectsComponent {
  readonly shadows = [
    {
      name: 'Shadow XS',
      token: 'shadow-xs',
      value: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      description: 'Subtle elevation for inputs and cards',
    },
    { name: 'Shadow S', token: 'shadow-s', value: '0px 2px 4px rgba(16, 24, 40, 0.08)', description: 'Low elevation for dropdowns' },
    { name: 'Shadow M', token: 'shadow-m', value: '0px 4px 8px rgba(16, 24, 40, 0.10)', description: 'Medium elevation for modals' },
    { name: 'Shadow L', token: 'shadow-l', value: '0px 8px 16px rgba(16, 24, 40, 0.12)', description: 'High elevation for overlays' },
    {
      name: 'Shadow XL',
      token: 'shadow-xl',
      value: '0px 16px 32px rgba(16, 24, 40, 0.16)',
      description: 'Maximum elevation for tooltips and popovers',
    },
  ];
}
