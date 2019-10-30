import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MorseAlphabetService {
  // tslint:disable-next-line: variable-name
  private _alphabetUrl = 'http://localhost:3000/data';

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {}

  getList(): Observable<any> {
    return this._http.get<any>(this._alphabetUrl).pipe(map(data => data[0]));
  }
}
