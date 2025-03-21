import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AdminHeaderComponent} from '../../ui/headers/admin-header/admin-header.component';
import {AdminFooterComponent} from '../../ui/footers/admin-footer/admin-footer.component';
import {AdminMainMenuComponent} from '../../ui/menus/admin-main-menu/admin-main-menu.component';

@Component({
  selector: 'admin-layout',
  templateUrl: './admin.layout.html',
  imports: [RouterOutlet, AdminHeaderComponent, AdminFooterComponent, AdminMainMenuComponent],
  styleUrls: ['./admin.layout.sass']
})
export class AdminLayout {
}
