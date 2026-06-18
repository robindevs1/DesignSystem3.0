import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

const TOKENS = [2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96];
const MAX = 96;

@Component({
  selector: 'docs-spacing',
  imports: [SectionHeaderComponent],
  templateUrl: './spacing.component.html',
  styleUrl: './spacing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacingComponent {
  readonly tokens = TOKENS.map(v => ({ token: `spacing-${v}`, value: v, barWidth: (v / MAX) * 320 }));
}
