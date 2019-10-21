import { Component, OnInit } from '@angular/core';
import { MorseFacadeService } from './core/facades/morse.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  morseAlphabet: object;
  // tslint:disable-next-line: variable-name
  constructor(private _morseFacade: MorseFacadeService) {}

  ngOnInit() {
    this._morseFacade.getMorseAlphabet().subscribe(data => {
      this.morseAlphabet = data.payload;
      console.log(this.morseAlphabet);
    });
  }
}
