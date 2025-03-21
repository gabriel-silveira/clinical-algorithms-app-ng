import {Title} from '@angular/platform-browser';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TitleService {
  constructor(private titleService: Title) {
  }

  public set(value: string) {
    this.titleService.setTitle(`${value} | Algoritmos Clínicos`);
  }
}
