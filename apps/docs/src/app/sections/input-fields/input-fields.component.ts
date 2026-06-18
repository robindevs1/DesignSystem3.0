import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'docs-input-fields',
  imports: [SectionHeaderComponent, FormsModule],
  templateUrl: './input-fields.component.html',
  styleUrl: './input-fields.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldsComponent {
  readonly showPassword = signal(false);

  togglePassword(): void {
    this.showPassword.update(v => !v);
  }
}
