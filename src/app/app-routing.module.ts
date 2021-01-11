import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component'
import { ComponentModule } from './component/component.module'

const routes: Routes = [
  {
    path: '', component: SideNavComponent,
    children: [
      { path: 'app', loadChildren: './component/component.module#ComponentModule' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
