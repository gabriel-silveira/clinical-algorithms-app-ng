import {Component, inject} from '@angular/core';
import {TitleService} from '../../../lib/services/title-service';

@Component({
  selector: 'users-page',
  templateUrl: './/users.page.html',
})
export class UsersPage {
  private titleService = inject(TitleService);

  ngOnInit() {
    this.titleService.set('Usuários');
  }
}
