import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Translation } from '../models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  // tslint:disable-next-line: variable-name
  private _translationsUrl = 'http://localhost:3000/data';

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {}

  getList(): Observable<any> {
    return this._http
      .get<any>(this._translationsUrl)
      .pipe(map(data => data[0]));
  }
}
