import {Component, inject} from '@angular/core';
import {TitleService} from '../../../lib/services/title-service';

@Component({
  selector: 'categories-page',
  templateUrl: './categories.page.html',
})
export class CategoriesPage {
  private titleService = inject(TitleService);

  ngOnInit() {
    this.titleService.set('Categorias');
  }
}
