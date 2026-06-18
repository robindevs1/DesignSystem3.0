import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

interface TypeStyle {
  className: string;
  size: number;
  weight: number;
  style?: string;
  lineHeight: number;
}

interface TypeGroup {
  name: string;
  styles: TypeStyle[];
}

const TYPE_GROUPS: TypeGroup[] = [
  {
    name: 'Headings',
    styles: [
      { className: 'heading-xl-bold', size: 36, weight: 700, lineHeight: 1.2 },
      { className: 'heading-xl-medium', size: 36, weight: 500, lineHeight: 1.2 },
      { className: 'heading-xl-regular', size: 36, weight: 400, lineHeight: 1.2 },
      { className: 'heading-l-bold', size: 32, weight: 700, lineHeight: 1.2 },
      { className: 'heading-l-medium', size: 32, weight: 500, lineHeight: 1.2 },
      { className: 'heading-l-regular', size: 32, weight: 400, lineHeight: 1.2 },
      { className: 'heading-m-bold', size: 28, weight: 700, lineHeight: 1.2 },
      { className: 'heading-m-medium', size: 28, weight: 500, lineHeight: 1.2 },
      { className: 'heading-s-bold', size: 24, weight: 700, lineHeight: 1.2 },
      { className: 'heading-s-medium', size: 24, weight: 500, lineHeight: 1.2 },
      { className: 'heading-xs-bold', size: 20, weight: 700, lineHeight: 1.2 },
    ],
  },
  {
    name: 'Labels',
    styles: [
      { className: 'label-xl-bold', size: 20, weight: 700, lineHeight: 1.5 },
      { className: 'label-xl-medium', size: 20, weight: 500, lineHeight: 1.5 },
      { className: 'label-xl-regular', size: 20, weight: 400, lineHeight: 1.5 },
      { className: 'label-l-bold', size: 18, weight: 700, lineHeight: 1.5 },
      { className: 'label-l-medium', size: 18, weight: 500, lineHeight: 1.5 },
      { className: 'label-l-regular', size: 18, weight: 400, lineHeight: 1.5 },
      { className: 'label-m-bold', size: 16, weight: 700, lineHeight: 1.5 },
      { className: 'label-m-medium', size: 16, weight: 500, lineHeight: 1.5 },
      { className: 'label-m-regular', size: 16, weight: 400, lineHeight: 1.5 },
      { className: 'label-s-bold', size: 14, weight: 700, lineHeight: 1.5 },
      { className: 'label-s-medium', size: 14, weight: 500, lineHeight: 1.5 },
    ],
  },
  {
    name: 'Body',
    styles: [
      { className: 'body-l-medium', size: 16, weight: 500, lineHeight: 1.5 },
      { className: 'body-l-regular', size: 16, weight: 400, lineHeight: 1.5 },
      { className: 'body-m-medium', size: 14, weight: 500, lineHeight: 1.5 },
      { className: 'body-m-regular', size: 14, weight: 400, lineHeight: 1.5 },
      { className: 'body-s-medium', size: 12, weight: 500, lineHeight: 1.5 },
      { className: 'body-s-regular', size: 12, weight: 400, lineHeight: 1.5 },
    ],
  },
  {
    name: 'Captions',
    styles: [
      { className: 'caption-l-medium', size: 16, weight: 500, style: 'italic', lineHeight: 1.5 },
      { className: 'caption-l-regular', size: 16, weight: 400, style: 'italic', lineHeight: 1.5 },
      { className: 'caption-m-medium', size: 14, weight: 500, style: 'italic', lineHeight: 1.5 },
      { className: 'caption-m-regular', size: 14, weight: 400, style: 'italic', lineHeight: 1.5 },
      { className: 'caption-s-medium', size: 12, weight: 500, style: 'italic', lineHeight: 1.5 },
      { className: 'caption-s-regular', size: 12, weight: 400, style: 'italic', lineHeight: 1.5 },
    ],
  },
];

@Component({
  selector: 'docs-typography',
  imports: [SectionHeaderComponent],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypographyComponent {
  readonly groups = TYPE_GROUPS;
}
