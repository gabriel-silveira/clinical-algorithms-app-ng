import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'admin-layout',
  templateUrl: './admin.layout.html',
  imports: [RouterOutlet],
  styleUrls: ['./admin.layout.sass']
})
export class AdminLayout {
}
