import { Injectable } from '@angular/core';
import { MorseFacadeService } from '../facades/morse.facade';
import { MorseSymbol } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private _morseFacade: MorseFacadeService) {}

  translateToMorse(text: string, morseAlphabet: any): void {
    const textArray = [...text];
    let morseArray = [];
    console.log(textArray);
    morseArray = this.fillMorseArray(textArray, morseAlphabet, morseArray);
    console.log(morseArray);
    this._morseFacade.onSetMorseText(morseArray);
  }

  private fillMorseArray(
    textArray: string[],
    morseAlphabet: any,
    morseArray: any[]
  ): any[] {
    textArray.forEach(letter => {
      if (letter !== ' ' && morseAlphabet[letter]) {
        const morseLetter: MorseSymbol = {
          morseCode: [...morseAlphabet[letter].morsecode],
          telephony: morseAlphabet[letter].telephony
        };
        console.log(morseLetter);
        morseArray.push(morseLetter);
      } else {
        const space = { morseCode: '', telephony: '' };
        morseArray.push(space);
      }
    });
    return morseArray;
  }
}
