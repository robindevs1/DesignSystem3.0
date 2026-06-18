import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

interface ColorSwatch {
  step: string;
  hex: string;
}

interface ColorGroup {
  name: string;
  tokenPrefix: string;
  descriptions: string[];
  swatches: ColorSwatch[];
}

const COLOR_GROUPS: ColorGroup[] = [
  {
    name: 'Grey',
    tokenPrefix: 'grey',
    descriptions: ['Used for text, backgrounds, and subtle shadows.', 'Taken and refined from coleman design system 2.1.'],
    swatches: [
      { step: '25', hex: '#FAFAFA' },
      { step: '50', hex: '#F3F3F3' },
      { step: '100', hex: '#E6E6E6' },
      { step: '200', hex: '#CCCCCC' },
      { step: '300', hex: '#B3B3B3' },
      { step: '400', hex: '#999999' },
      { step: '500', hex: '#7F7F7F' },
      { step: '600', hex: '#666666' },
      { step: '700', hex: '#4D4D4D' },
      { step: '800', hex: '#333333' },
      { step: '900', hex: '#1A1A1A' },
    ],
  },
  {
    name: 'Coleman Blue',
    tokenPrefix: 'coleman-blue',
    descriptions: [
      'Primary color used for call to action (CTAs) within ERM platforms.',
      'Taken and refined from coleman design system 2.1.',
    ],
    swatches: [
      { step: '50', hex: '#EFF6FE' },
      { step: '100', hex: '#E0EFFE' },
      { step: '200', hex: '#BAE0FD' },
      { step: '300', hex: '#7CC7FD' },
      { step: '400', hex: '#0177D2' },
      { step: '500', hex: '#005FA8' },
      { step: '600', hex: '#064D86' },
      { step: '700', hex: '#0B406F' },
      { step: '800', hex: '#082949' },
    ],
  },
  {
    name: 'Blue',
    tokenPrefix: 'blue',
    descriptions: [
      'Informational elements, links, and secondary accents.',
      'It is best suited for providing supplementary information and guiding users to additional resources or actions.',
    ],
    swatches: [
      { step: '50', hex: '#EBF5FF' },
      { step: '100', hex: '#BFD6FF' },
      { step: '200', hex: '#92B6FF' },
      { step: '300', hex: '#6697FF' },
      { step: '400', hex: '#3375FF' },
      { step: '500', hex: '#0052FF' },
      { step: '600', hex: '#0042CC' },
      { step: '700', hex: '#003199' },
      { step: '800', hex: '#00277A' },
    ],
  },
  {
    name: 'Green',
    tokenPrefix: 'green',
    descriptions: [
      'Success messages, confirmation, and positive feedback.',
      'Employ it to provide feedback when users complete tasks successfully or to convey a sense of accomplishment.',
    ],
    swatches: [
      { step: '50', hex: '#F0FDF4' },
      { step: '100', hex: '#DCFCE8' },
      { step: '200', hex: '#BBF7D2' },
      { step: '300', hex: '#86EFAF' },
      { step: '400', hex: '#4ADE85' },
      { step: '500', hex: '#22C563' },
      { step: '600', hex: '#16A34E' },
      { step: '700', hex: '#157F40' },
      { step: '800', hex: '#166537' },
    ],
  },
  {
    name: 'Yellow',
    tokenPrefix: 'yellow',
    descriptions: [
      'Alerts, warnings, and potential issues.',
      'Use it to highlight situations that require extra attention or immediate action.',
    ],
    swatches: [
      { step: '50', hex: '#FFFBF2' },
      { step: '100', hex: '#FFF6E5' },
      { step: '200', hex: '#FBE3B7' },
      { step: '300', hex: '#FFC657' },
      { step: '400', hex: '#FAAF19' },
      { step: '500', hex: '#CF8F36' },
      { step: '600', hex: '#B57520' },
      { step: '700', hex: '#70470D' },
      { step: '800', hex: '#4B2F06' },
    ],
  },
  {
    name: 'Red',
    tokenPrefix: 'red',
    descriptions: [
      'Error messages, validation issues, and critical notifications.',
      'It should be reserved for situations that demand immediate user action or resolution.',
    ],
    swatches: [
      { step: '50', hex: '#FFF2F2' },
      { step: '100', hex: '#FDC7C3' },
      { step: '200', hex: '#FB9D95' },
      { step: '300', hex: '#F97266' },
      { step: '400', hex: '#F51400' },
      { step: '500', hex: '#D41100' },
      { step: '600', hex: '#B40F00' },
      { step: '700', hex: '#930C00' },
      { step: '800', hex: '#731819' },
    ],
  },
  {
    name: 'Purple',
    tokenPrefix: 'purple',
    descriptions: [
      'Purple can be effectively used in product design to evoke a sense of sophistication and luxury.',
      'Utilize purple in areas where you want to highlight premium/special features.',
    ],
    swatches: [
      { step: '50', hex: '#F8E8FF' },
      { step: '100', hex: '#EBBDFF' },
      { step: '200', hex: '#DE91FF' },
      { step: '300', hex: '#D166FF' },
      { step: '400', hex: '#B200FF' },
      { step: '500', hex: '#9A00DD' },
      { step: '600', hex: '#8300BB' },
      { step: '700', hex: '#6B0099' },
      { step: '800', hex: '#56007A' },
    ],
  },
];

@Component({
  selector: 'docs-colors',
  imports: [SectionHeaderComponent],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsComponent {
  readonly groups = COLOR_GROUPS;

  isLight(hex: string): boolean {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return r * 0.299 + g * 0.587 + b * 0.114 > 220;
  }

  tokenExample(prefix: string): string {
    return `--${prefix}-500`;
  }

  bullets(group: ColorGroup): string[] {
    return [...group.descriptions, `token name example: --${group.tokenPrefix}-500`];
  }
}
