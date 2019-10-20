import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Translation } from '../models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private _translationsUrl = 'http://localhost:3000/data';

  constructor(private _http: HttpClient) {}

  getList(): Observable<any> {
    return this._http
      .get<any>(this._translationsUrl)
      .pipe(map(data => data[0]));
  }
}
