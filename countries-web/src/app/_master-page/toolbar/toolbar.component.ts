import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output() filterEvent = new EventEmitter<any>();

  filter: string = '';
  constructor() { }

  onFilterCountries = () => {
    this.filterEvent.emit(this.filter);
  }

}
