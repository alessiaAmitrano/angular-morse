export interface MorseStateModel {
  alphabet: any;
  inputText?: string;
  morseText?: any[];
}

export const MORSE_INITIAL_STATE = {
  alphabet: {},
  inputText: null,
  morseText: null
};
