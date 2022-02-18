import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () =>
      import('./pages/pages.module').then(
        (module) => module.PagesModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: '**',
    redirectTo: '/app'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
<<<<<<< HEAD
  exports: [RouterModule],
})
export class AppRoutingModule {}
=======
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> 19e35ccab8a5b6b2908b023e62d37af590e605a0
