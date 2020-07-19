import { Component, Input } from '@angular/core';
import { ClsContinent } from 'src/app/_model/cls-continent';

@Component({
  selector: 'app-continents-list',
  templateUrl: './continents-list.component.html',
  styleUrls: ['./continents-list.component.scss']
})
export class ContinentsListComponent {
  
  @Input() continents: ClsContinent[];

  constructor() { }

  trackById(index, item) {
    return item.name;
  }
  
}
