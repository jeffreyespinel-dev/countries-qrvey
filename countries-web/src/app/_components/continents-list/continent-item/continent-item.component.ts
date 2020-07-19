import { Component, Input } from '@angular/core';
import { ClsContinent } from 'src/app/_model/cls-continent';

@Component({
  selector: 'app-continent-item',
  templateUrl: './continent-item.component.html',
  styleUrls: ['./continent-item.component.scss']
})
export class ContinentItemComponent {

  @Input() continent: ClsContinent;

  constructor() { }

}
