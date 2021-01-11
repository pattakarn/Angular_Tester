import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuServiceService, Menu } from '../service/menu-service.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  menuList: Menu[];
  menuSelected: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private menuService: MenuServiceService) {
      this.menuList = this.menuService.getMenuList();
    }

    selectMenu(menuGroup: Menu) {
      if (this.menuSelected === menuGroup.link) {
        this.menuSelected = null;
        return;
      }
      this.menuSelected = menuGroup.link;
    }

}
