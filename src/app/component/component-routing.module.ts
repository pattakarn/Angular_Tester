import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menu1Component } from './menu1/menu1.component'
import { Menu2Component } from './menu2/menu2.component'
import { Menu3Component } from './menu3/menu3.component'
import { Menu4Component } from './menu4/menu4.component'
import { Menu5Component } from './menu5/menu5.component'
import { Menu6Component } from './menu6/menu6.component'
import { Menu7Component } from './menu7/menu7.component'
import { Menu8Component } from './menu8/menu8.component'


const routes: Routes = [
  { path: '', redirectTo: 'menu1', pathMatch: 'full' },
  { path: 'menu1', component: Menu1Component },
  { path: 'menu2', component: Menu2Component },
  { path: 'menu3', component: Menu3Component },
  { path: 'menu4', component: Menu4Component },
  { path: 'menu5', component: Menu5Component },
  { path: 'menu6', component: Menu6Component },
  { path: 'menu7', component: Menu7Component },
  { path: 'menu8', component: Menu8Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
