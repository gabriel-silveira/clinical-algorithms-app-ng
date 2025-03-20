import { Routes } from '@angular/router';
import {AdminLayout} from './admin/admin.layout.component';
import {UsersPage} from './admin/users/users.page';
import {CategoriesPage} from './admin/categories/categories.page';
import {AlgorithmsPage} from './admin/algorithms/algorithms.page';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      {
        path: 'users',
        component: UsersPage,
      },
      {
        path: 'categories',
        component: CategoriesPage,
      },
      {
        path: 'algorithms',
        component: AlgorithmsPage,
      },
    ]
  }
];
