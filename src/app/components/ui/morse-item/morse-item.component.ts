import { Component, OnInit, Input } from '@angular/core';
import { MorseSymbol } from 'src/app/core/models';

@Component({
  selector: 'app-morse-item',
  templateUrl: './morse-item.component.html',
  styleUrls: ['./morse-item.component.scss']
})
export class MorseItemComponent implements OnInit {
  @Input() morseSymbol: MorseSymbol;
  constructor() {}

  ngOnInit() {}

  getImgSrc(symbol: string): string {
    let src = '';
    if (symbol === '-') {
      src = 'assets/dash.png';
    } else if (symbol === '.') {
      src = 'assets/dot.png';
    } else {
    }
    return src;
  }
}
