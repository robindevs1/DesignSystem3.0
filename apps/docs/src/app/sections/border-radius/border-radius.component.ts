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
    { token: '--radius-4', value: '4px' },
    { token: '--radius-8', value: '8px' },
    { token: '--radius-12', value: '12px' },
    { token: '--radius-16', value: '16px' },
    { token: '--radius-360', value: '360px' },
  ];
}
