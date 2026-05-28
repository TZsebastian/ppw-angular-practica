import { Routes } from '@angular/router';

import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentPage } from './features/students/pages/student-page/student-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page';
import { SingupPage } from './features/singup-page/singup-page';
import ProfilePage from './features/profile/pages/profile-page';
import ProjectConfigPage from './features/profile/pages/project-config-page';
import { SimpsonsPage } from './features/simpsons/pages/simpsons-page/simpsons-page';
import { SimpsonDetailPage } from './features/simpsons/pages/simpsons-detail-page/simpsons-detail-page';
import { AuthPageComponent } from './features/auth/pages/auth-page/auth-page';


export const routes: Routes = [

  // HOME
  {
    path: '',
    component: HomePage,
  },

  // UI COMPONENTS
  {
    path: 'ui-components',
    loadComponent: () =>
      import('./features/ui-components/pages/ui-components-page')
        .then(m => m.default),
  },

  // STUDENTS
  {
    path: 'students',
    component: StudentPage,
  },

  {
  path: 'simpsons',
  component: SimpsonsPage,
},

  {
    path: 'students/:id',
    component: StudentDetailPage,
  },

  // LAYOUTS
  {
    path: 'layouts',
    component: LayoutsPage,
  },

  // FORMS
  {
    path: 'signup',
    component: SingupPage,
  },

{
  path: 'simpsons/:id',
  component: SimpsonDetailPage,
},

  {
    path: 'profile',
    component: ProfilePage,
  },

  {
    path: 'project-config',
    component: ProjectConfigPage,
  },

  {
  path: 'auth',
  component: AuthPageComponent
},

  // REDIRECT
  {
    path: '**',
    redirectTo: '',
  },

];
