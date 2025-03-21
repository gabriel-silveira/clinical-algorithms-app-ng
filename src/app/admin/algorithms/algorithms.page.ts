import {Component, inject} from '@angular/core';
import {TitleService} from '../../../lib/services/title-service';

@Component({
  selector: 'algorithms-page',
  templateUrl: './algorithms.page.html',
})
export class AlgorithmsPage {
  private titleService = inject(TitleService);

  ngOnInit() {
    this.titleService.set('Algoritmos');
  }
}
