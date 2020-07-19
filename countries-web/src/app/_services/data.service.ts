import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import { toArray } from 'rxjs/internal/operators/toArray';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { map } from 'rxjs/internal/operators/map';
import { ClsContinent } from '../_model/cls-continent';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public global_data: ClsContinent[] = [];

  constructor(private http: HttpClient) { }

  setGlobalData = (pData: ClsContinent[]) => {
    this.global_data = pData;
  }

  getFullNameByAlpha3Code = (pAlpha3Code: string): string => this.global_data
    .filter(val => val.countries
      .some(country => country.alpha3Code == pAlpha3Code)
    )
    .map(element => {
      let cont = Object.assign({}, element, {
        'countries': element.countries.filter(
          country => country.alpha3Code == pAlpha3Code)
      })
      return cont;
    })[0].countries[0].name;


  getPlainData = (): Observable<any> => this.http.get(environment.url_api_countries);

  getInfoGroupByContinent(plainData: any[]): Observable<ClsContinent[]> {

    const values = plainData.map(
      ({ name,  region, flag, population, capital, currencies, languages, borders, alpha3Code }) => ({
        name, region, flag, population, capital, currencies, languages, borders, alpha3Code
      }));

    return from(values).pipe(
      groupBy(val => val.region),
      mergeMap(group => {
        return group.pipe(toArray());
      }),
      map((val, idx) => {
        const continent: ClsContinent = new ClsContinent(val[0].region, val);
        return continent;
      }),
      toArray()
    );

  }
}
