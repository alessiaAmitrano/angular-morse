import { Selector } from '@ngxs/store';
import { MorseState } from './morse.state';
import { MorseStateModel } from './morse.adapter';

export class MorseSelectors {
  @Selector([MorseState])
  static getAlphabet(state: MorseStateModel): any {
    return state.alphabet;
  }

  @Selector([MorseState])
  static getInputText(state: MorseStateModel): string {
    return state.inputText;
  }

  @Selector([MorseState])
  static getMorseText(state: MorseStateModel): string {
    return state.morseText;
  }
}
