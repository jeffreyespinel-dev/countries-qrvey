import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewCountryComponent } from './country-item/view-country/view-country.component';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent {

  @Input() countries: any[];

  constructor(
    private dialog: MatDialog) { }

  trackById(index, item) {
    return item.name;
  }

  viewDetail = (country) => {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      country: country
    };
    dialogConfig.width = '590px';
    dialogConfig.panelClass = 'custom-modal';
    this.dialog.open(ViewCountryComponent, dialogConfig);
  }

}
