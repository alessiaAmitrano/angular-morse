export interface MorseStateModel {
  alphabet: any;
  inputText?: string;
  morseText?: string;
}

export const MORSE_INITIAL_STATE = {
  alphabet: {},
  inputText: null,
  morseText: null
};
