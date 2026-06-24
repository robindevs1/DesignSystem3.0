import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

interface IconItem {
  name: string;
  hasFillVariant: boolean;
}

interface IconSize {
  px: number;
  token: string;
}

const ICONS: IconItem[] = [
  { name: 'Information', hasFillVariant: true },
  { name: 'Error', hasFillVariant: true },
  { name: 'Success', hasFillVariant: true },
  { name: 'Warning', hasFillVariant: true },
  { name: 'Plus', hasFillVariant: false },
  { name: 'Chevron Down', hasFillVariant: false },
  { name: 'Chevron Up', hasFillVariant: false },
];

const SIZES: IconSize[] = [
  { px: 16, token: 'icon-xs' },
  { px: 20, token: 'icon-sm' },
  { px: 24, token: 'icon-md' },
  { px: 28, token: 'icon-lg' },
  { px: 32, token: 'icon-xl' },
];

@Component({
  selector: 'docs-icons',
  imports: [SectionHeaderComponent, FormsModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsComponent {
  readonly icons = ICONS;
  readonly sizes = SIZES;

  playgroundIcon = signal<IconItem>(ICONS[0]);
  playgroundSize = signal<IconSize>(SIZES[2]);

  selectPlaygroundIcon(name: string): void {
    const icon = ICONS.find(i => i.name === name);
    if (icon) {
      this.playgroundIcon.set(icon);
    }
  }

  selectPlaygroundSize(token: string): void {
    const size = SIZES.find(s => s.token === token);
    if (size) {
      this.playgroundSize.set(size);
    }
  }

  toFileName(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }

  outlinedFile(icon: IconItem): string {
    return `${this.toFileName(icon.name)}${icon.hasFillVariant ? '-outlined' : ''}.svg`;
  }

  filledFile(icon: IconItem): string {
    return `${this.toFileName(icon.name)}-filled.svg`;
  }
}
