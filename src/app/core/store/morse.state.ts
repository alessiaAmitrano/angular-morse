import { State, Action, StateContext } from '@ngxs/store';
import { MorseStateModel, MORSE_INITIAL_STATE } from './morse.adapter';
import {
  GetMorseAlphabet,
  SetInputText,
  SetMorseText,
  ResetInputs
} from './morse.actions';

@State<MorseStateModel>({
  name: 'morse',
  defaults: MORSE_INITIAL_STATE
})
export class MorseState {
  @Action(GetMorseAlphabet)
  getMorseAlphabet(
    { getState, setState }: StateContext<MorseStateModel>,
    { payload }: GetMorseAlphabet
  ) {
    const state = getState();
    setState({
      ...state,
      alphabet: payload
    });
  }

  @Action(SetInputText)
  setInputText(
    { getState, setState }: StateContext<MorseStateModel>,
    { payload }: SetInputText
  ) {
    const state = getState();
    setState({
      ...state,
      inputText: payload
    });
  }

  @Action(SetMorseText)
  setMorseText(
    { getState, setState }: StateContext<MorseStateModel>,
    { payload }: SetMorseText
  ) {
    const state = getState();
    setState({
      ...state,
      morseText: payload
    });
  }

  @Action(ResetInputs)
  resetInputs({ getState, setState }: StateContext<MorseStateModel>) {
    const state = getState();
    setState({
      ...state,
      morseText: null,
      inputText: null
    });
  }
}
