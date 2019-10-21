import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { MorseFacadeService } from 'src/app/core/facades/morse.facade';
import { MorseSymbol } from 'src/app/core/models';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {
  morseText: MorseSymbol[];

  constructor(private _store: Store, private _morseFacade: MorseFacadeService) {
    this._morseFacade.morseText$.subscribe(data => {
      console.log('data', data);
      this.morseText = data;
    });
  }

  ngOnInit() {}
}
