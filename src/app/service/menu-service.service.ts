import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor() { }

  getMenuList() {
    const menuList: Menu[] = [
      {index: '1', name: 'หน้าหลัก', icon: 'home', link: 'menu1'},
      {index: '2', name: 'จัดเตรียมข้อมูลแบบ', icon: 'description', link: 'menu2'},
      {index: '3', name: 'โอนย้าย', icon: 'swap_horiz', link: 'menu3'},
      {index: '4', name: 'สำรองข้อมูล', icon: 'backup', link: 'menu4'},
      {index: '5', name: 'ตั้งค่า', icon: 'settings', link: 'menu5'},
      {index: '6', name: 'แนะนำการใช้งาน', icon: 'help', link: 'menu6'},
      {index: '7', name: 'เกี่ยวกับ', icon: 'info', link: 'menu7'},
      {index: '8', name: 'อัพเดท', icon: 'update', link: 'menu8'}
    ];
    return menuList;
  }

}

export interface Menu {
  index: string;
  name: string;
  icon: string;
  link: string;
}
