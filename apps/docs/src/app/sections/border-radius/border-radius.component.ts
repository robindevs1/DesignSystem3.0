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
    { token: 'radius-4', value: 4 },
    { token: 'radius-8', value: 8 },
    { token: 'radius-12', value: 12 },
    { token: 'radius-16', value: 16 },
    { token: 'radius-360', value: 360 },
  ];
}
