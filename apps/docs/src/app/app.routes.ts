import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'colors', pathMatch: 'full' },
  { path: 'colors', loadComponent: () => import('./sections/colors/colors.component').then(m => m.ColorsComponent) },
  { path: 'typography', loadComponent: () => import('./sections/typography/typography.component').then(m => m.TypographyComponent) },
  { path: 'spacing', loadComponent: () => import('./sections/spacing/spacing.component').then(m => m.SpacingComponent) },
  {
    path: 'border-radius',
    loadComponent: () => import('./sections/border-radius/border-radius.component').then(m => m.BorderRadiusComponent),
  },
  { path: 'effects', loadComponent: () => import('./sections/effects/effects.component').then(m => m.EffectsComponent) },
  { path: 'icons', loadComponent: () => import('./sections/icons/icons.component').then(m => m.IconsComponent) },
  { path: 'buttons', loadComponent: () => import('./sections/buttons/buttons.component').then(m => m.ButtonsComponent) },
  { path: 'input-fields', loadComponent: () => import('./sections/input-fields/input-fields.component').then(m => m.InputFieldsComponent) },
  { path: '**', redirectTo: 'colors' },
];
