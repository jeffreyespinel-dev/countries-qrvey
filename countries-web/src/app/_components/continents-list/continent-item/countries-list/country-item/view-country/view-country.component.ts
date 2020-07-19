import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.scss']
})
export class ViewCountryComponent {

  country: any = null;

  constructor(private dialogRef: MatDialogRef<ViewCountryComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    public api: DataService) {
    this.country = data.country;
  }

  getFullNameByAlpha3Code = (border: string) => this.api.getFullNameByAlpha3Code(border);

  getDisplayCurrencies = (currencies: any[]) => currencies.map(x => x.name).join(', ');

  getDisplayLanguages = (languages: any[]) => languages.map(x => x.name).join(', ');

  getDisplayBorders = (borders: any[]) => borders.map(x => this.getFullNameByAlpha3Code(x)).join(', ');

}
