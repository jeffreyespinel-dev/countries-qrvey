import { Component } from '@angular/core';
import { DataService } from './_services/data.service'
import { ClsContinent } from "./_model/cls-continent";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'countries-web';
  data: ClsContinent[] = [];
  fullData: ClsContinent[] = [];

  constructor(private api: DataService) {
    this.loadData();
  }

  filterCountryByName = (text) => {
    if (text == '') {
      this.data = this.fullData;
    }
    else {
      let filteredArray = this.fullData
        .filter(val => val.countries
          .some(country => country.name.toLowerCase().includes(text.toLowerCase()))
        )
        .map(element => {
          let cont = Object.assign({}, element, {
            'countries': element.countries.filter(
              country => country.name.toLowerCase().includes(text.toLowerCase())
            )
          })
          return cont;
        });
      this.data = filteredArray;
    }
  }

  loadData = () => {
    this.api.getPlainData().subscribe(
      plain_data => {
        this.groupData(plain_data);
      },
      error => {
        this.data = [];
      }
    )
  }

  groupData = (plain_data: any[]) => {
    this.api.getInfoGroupByContinent(plain_data).subscribe(
      data => {
        const values = (data as ClsContinent[]).sort(function (a, b) {
          if (a.name == '') { return 2; }
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          return 0;
        });
        this.api.setGlobalData(values);
        this.fullData = values;
        this.data = values;
      },
      error => {
        this.data = [];
      }
    )
  }

}
