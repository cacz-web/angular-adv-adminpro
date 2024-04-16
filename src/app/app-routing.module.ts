import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//
import { PageRoutingModule } from './page/page.routing';
import { AuthRountingModule } from './auth/auth.routing';

//
import { NotpageFoundComponent } from './notpage-found/notpage-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotpageFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
  PageRoutingModule,
  AuthRountingModule
  ],
  exports: [RouterModule]
})
export class AppRountingModule { }
