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
      name: 'Elevation 1',
      token: '--elevation-1',
      value: '0px 1px 4px 0px rgba(0, 0, 0, 0.37)',
      description: 'Subtle elevation for inputs and cards',
    },
    {
      name: 'Elevation 2',
      token: '--elevation-2',
      value: '0px 2px 2px 0px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.3)',
      description: 'Low elevation for dropdowns',
    },
    {
      name: 'Elevation 3',
      token: '--elevation-3',
      value: '0px 11px 7px 0px rgba(0, 0, 0, 0.19), 0px 13px 25px 0px rgba(0, 0, 0, 0.3)',
      description: 'Medium elevation for modals',
    },
    {
      name: 'Elevation 4',
      token: '--elevation-4',
      value: '0px 14px 12px 0px rgba(0, 0, 0, 0.17), 0px 20px 40px 0px rgba(0, 0, 0, 0.3)',
      description: 'High elevation for overlays',
    },
    {
      name: 'Elevation 5',
      token: '--elevation-5',
      value: '0px 17px 17px 0px rgba(0, 0, 0, 0.15), 0px 27px 55px 0px rgba(0, 0, 0, 0.3)',
      description: 'Maximum elevation for tooltips and popovers',
    },
  ];
}
