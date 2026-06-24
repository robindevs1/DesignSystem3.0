import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ButtonComponent, ButtonForceState, ButtonIconSize, ButtonSize, ButtonVariant } from '@design-system3.0-angular/design-system';

type PlaygroundState = 'Active' | 'Hovered' | 'Pressed' | 'Focused' | 'Disabled';

@Component({
  selector: 'docs-buttons',
  imports: [SectionHeaderComponent, ButtonComponent, FormsModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {
  readonly variants: ButtonVariant[] = ['primary', 'secondary', 'tertiary', 'neutral', 'destructive', 'link'];
  readonly sizes: ButtonSize[] = ['large', 'medium', 'small'];
  readonly states: PlaygroundState[] = ['Active', 'Hovered', 'Pressed', 'Focused', 'Disabled'];
  readonly icons = [
    { name: 'Plus', file: 'plus.svg' },
    { name: 'Chevron Down', file: 'chevron-down.svg' },
    { name: 'Chevron Up', file: 'chevron-up.svg' },
    { name: 'Information', file: 'information-outlined.svg' },
    { name: 'Error', file: 'error-outlined.svg' },
    { name: 'Success', file: 'success-outlined.svg' },
    { name: 'Warning', file: 'warning-outlined.svg' },
  ];
  readonly iconSizes: { token: ButtonIconSize; px: number }[] = [
    { token: 'xs', px: 16 },
    { token: 'sm', px: 20 },
    { token: 'md', px: 24 },
  ];

  variant = signal<ButtonVariant>('primary');
  size = signal<ButtonSize>('large');
  state = signal<PlaygroundState>('Active');
  leadingIcon = signal<boolean>(false);
  trailingIcon = signal<boolean>(true);
  iconFile = signal<string>('plus.svg');
  iconSize = signal<ButtonIconSize>('md');
  label = signal<string>('Button');

  readonly iconPath = computed(() => `/assets/icons/${this.iconFile()}`);

  readonly forceState = computed<ButtonForceState>(() => this.forceFor(this.state()));
  readonly isDisabled = computed(() => this.disabledFor(this.state()));

  forceFor(state: PlaygroundState): ButtonForceState {
    switch (state) {
      case 'Hovered':
        return 'hovered';
      case 'Pressed':
        return 'pressed';
      case 'Focused':
        return 'focused';
      default:
        return 'none';
    }
  }

  disabledFor(state: PlaygroundState): boolean {
    return state === 'Disabled';
  }

  copied = signal<boolean>(false);

  /** Live `<ds-button>` usage reflecting the selected controls. */
  readonly codeSnippet = computed(() => {
    const lines: string[] = ['<ds-button'];
    lines.push(`  variant="${this.variant()}"`);
    lines.push(`  size="${this.size()}"`);
    lines.push(`  label="${this.label()}"`);
    if (this.leadingIcon()) {
      lines.push('  [leadingIcon]="true"');
    }
    if (this.trailingIcon()) {
      lines.push('  [trailingIcon]="true"');
    }
    if (this.leadingIcon() || this.trailingIcon()) {
      lines.push(`  icon="${this.iconPath()}"`);
      lines.push(`  iconSize="${this.iconSize()}"`);
    }
    if (this.forceState() !== 'none') {
      lines.push(`  forceState="${this.forceState()}"`);
    }
    if (this.isDisabled()) {
      lines.push('  [disabled]="true"');
    }
    lines.push('/>');
    return lines.join('\n');
  });

  setVariant(value: string): void {
    this.variant.set(value as ButtonVariant);
  }

  setSize(value: string): void {
    this.size.set(value as ButtonSize);
  }

  setState(value: string): void {
    this.state.set(value as PlaygroundState);
  }

  setIcon(value: string): void {
    this.iconFile.set(value);
  }

  setIconSize(value: string): void {
    this.iconSize.set(value as ButtonIconSize);
  }

  titleCase(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  copy(): void {
    void navigator.clipboard?.writeText(this.codeSnippet());
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 1500);
  }

  reset(): void {
    this.variant.set('primary');
    this.size.set('large');
    this.state.set('Active');
    this.leadingIcon.set(false);
    this.trailingIcon.set(true);
    this.iconFile.set('plus.svg');
    this.iconSize.set('md');
    this.label.set('Button');
  }
}
