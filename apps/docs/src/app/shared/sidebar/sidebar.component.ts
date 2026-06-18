import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  id: string;
  label: string;
  route: string;
}

const FOUNDATIONS: NavItem[] = [
  { id: 'colors', label: 'Colors', route: '/colors' },
  { id: 'typography', label: 'Typography', route: '/typography' },
  { id: 'border-radius', label: 'Border Radius', route: '/border-radius' },
  { id: 'effects', label: 'Effects', route: '/effects' },
  { id: 'spacing', label: 'Spacing', route: '/spacing' },
  { id: 'icons', label: 'Icons', route: '/icons' },
];

const COMPONENTS: NavItem[] = [
  { id: 'buttons', label: 'Buttons', route: '/buttons' },
  { id: 'input-fields', label: 'Input Fields', route: '/input-fields' },
];

@Component({
  selector: 'docs-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  readonly foundations = FOUNDATIONS;
  readonly components = COMPONENTS;
}
