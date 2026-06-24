import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'destructive' | 'link';
export type ButtonSize = 'large' | 'medium' | 'small';

/** Icon dimension override. Empty string keeps the size that matches the button size. */
export type ButtonIconSize = '' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Forces a visual state instead of relying on real interaction. `none` keeps the
 * native :hover / :active / :focus-visible behaviour; the others pin a state,
 * which is useful for documentation and visual tests.
 */
export type ButtonForceState = 'none' | 'hovered' | 'pressed' | 'focused';

const ICON_SIZE_PX: Record<Exclude<ButtonIconSize, ''>, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};

@Component({
  selector: 'ds-button',
  imports: [NgTemplateOutlet],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('large');
  label = input<string>('Button');
  disabled = input<boolean>(false);
  leadingIcon = input<boolean>(false);
  trailingIcon = input<boolean>(false);
  /** URL of an SVG asset. Rendered via CSS mask so it inherits the text colour. */
  icon = input<string>('');
  iconSize = input<ButtonIconSize>('');
  forceState = input<ButtonForceState>('none');

  /** Class list for the button element (variant, size, and any forced state). */
  readonly buttonClasses = computed(() => {
    const classes = ['ds-btn', `ds-btn--${this.variant()}`, `ds-btn--${this.size()}`];
    if (this.forceState() !== 'none') {
      classes.push(`is-${this.forceState()}`);
    }
    return classes.join(' ');
  });

  /**
   * The `link` variant reads as a hyperlink, so when disabled it keeps the
   * native `disabled` attribute off (to stay in the tab order) and uses
   * `aria-disabled` instead. Every other variant uses the native attribute.
   */
  readonly nativeDisabled = computed(() => this.disabled() && this.variant() !== 'link');
  readonly ariaDisabled = computed(() => (this.disabled() && this.variant() === 'link' ? 'true' : null));

  /** CSS mask-image value for the chosen icon. */
  readonly iconMask = computed(() => `url("${this.icon()}")`);

  /** Explicit icon size in px, or null to inherit the button-size default. */
  readonly iconPx = computed(() => {
    const size = this.iconSize();
    return size ? ICON_SIZE_PX[size] : null;
  });
}
