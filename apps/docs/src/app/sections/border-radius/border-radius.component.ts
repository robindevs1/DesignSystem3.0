import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'docs-border-radius',
  imports: [SectionHeaderComponent],
  templateUrl: './border-radius.component.html',
  styleUrl: './border-radius.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BorderRadiusComponent {
  readonly tokens = [
    { token: '--radius-0', value: '0px' },
    { token: '--radius-2', value: '2px' },
    { token: '--radius-4', value: '4px' },
    { token: '--radius-6', value: '6px' },
    { token: '--radius-8', value: '8px' },
    { token: '--radius-10', value: '10px' },
    { token: '--radius-12', value: '12px' },
    { token: '--radius-16', value: '16px' },
    { token: '--radius-20', value: '20px' },
    { token: '--radius-24', value: '24px' },
    { token: '--radius-360', value: '360px' },
  ];
}
