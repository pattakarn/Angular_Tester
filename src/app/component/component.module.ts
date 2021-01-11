import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';

import { Menu1Component } from './menu1/menu1.component'
import { Menu2Component } from './menu2/menu2.component'
import { Menu3Component } from './menu3/menu3.component'
import { Menu4Component } from './menu4/menu4.component'
import { Menu5Component } from './menu5/menu5.component'
import { Menu6Component } from './menu6/menu6.component'
import { Menu7Component } from './menu7/menu7.component'
import { Menu8Component } from './menu8/menu8.component'


@NgModule({
  declarations: [
    Menu1Component,
    Menu2Component,
    Menu3Component,
    Menu4Component,
    Menu5Component,
    Menu6Component,
    Menu7Component,
    Menu8Component,
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ]
})
export class ComponentModule { }
