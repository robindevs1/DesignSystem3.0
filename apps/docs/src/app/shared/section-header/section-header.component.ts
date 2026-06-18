import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'docs-section-header',
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  title = input.required<string>();
  description = input<string>();
}
