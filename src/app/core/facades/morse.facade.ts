import { Injectable } from '@angular/core';
import { MorseAlphabetService } from '../services/morse-alphabet.service';
import { Select } from '@ngxs/store';
import {
  MorseSelectors,
  GetMorseAlphabet,
  SetInputText,
  SetMorseText,
  ResetInputs
} from '../store';
import { Observable } from 'rxjs';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MorseFacadeService {
  constructor(private _alphabetService: MorseAlphabetService) {}

  @Select(MorseSelectors.getAlphabet)
  morseAlphabet$: Observable<any>;

  @Select(MorseSelectors.getInputText)
  inputText$: Observable<string>;

  @Select(MorseSelectors.getMorseText)
  morseText$: Observable<any[]>;

  @Dispatch()
  getMorseAlphabet() {
    return this._alphabetService
      .getList()
      .pipe(map(data => new GetMorseAlphabet(data)));
  }

  @Dispatch()
  onSetInputText = (inputText: string) => new SetInputText(inputText);

  @Dispatch()
  onSetMorseText = (morseText: any[]) => new SetMorseText(morseText);

  @Dispatch()
  onResetInputs = () => new ResetInputs();
}
