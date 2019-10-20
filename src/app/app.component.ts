import { Component, OnInit } from '@angular/core';
import { TranslationService } from './core/services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  morseAlphabet: object;
  // tslint:disable-next-line: variable-name
  constructor(private _translationService: TranslationService) {
    this._translationService.getList().subscribe(data => {
      this.morseAlphabet = data;
      console.log(this.morseAlphabet);
    });
  }

  ngOnInit() {}
}
