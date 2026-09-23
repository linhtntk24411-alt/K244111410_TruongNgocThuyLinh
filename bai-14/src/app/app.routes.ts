import { Routes } from '@angular/router';
import { CatalogListComponent } from './catalog-list/catalog-list';

export const routes: Routes = [
  { path: '', component: CatalogListComponent },
  { path: 'catalog-list', component: CatalogListComponent },
];