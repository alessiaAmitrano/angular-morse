export class GetMorseAlphabet {
  public static readonly type = '[Alphabet] Get Morse Alphabet';
  constructor(public payload: any) {}
}

export class SetInputText {
  public static readonly type = '[Text] Set Input Text';
  constructor(public payload: string) {}
}

export class SetMorseText {
  public static readonly type = '[Text] Set Morse Text';
  constructor(public payload: any[]) {}
}

export class ResetInputs {
  public static readonly type = '[Text] Reset Inputs';
}
