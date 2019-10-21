import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors
} from '@angular/forms';
import { MorseFacadeService } from 'src/app/core/facades/morse.facade';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const az09regex = /^[A-Za-z0-9 ]+$/;
@Component({
  selector: 'app-input-text-page',
  templateUrl: './input-text-page.component.html',
  styleUrls: ['./input-text-page.component.scss']
})
export class InputTextPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  morseAlphabet: any;
  private _destroyed$ = new Subject();

  constructor(
    private _store: Store,
    private _morseFacade: MorseFacadeService,
    private _translationService: TranslationService
  ) {
    this._morseFacade.morseAlphabet$
      .pipe(takeUntil(this._destroyed$))
      .subscribe(data => {
        this.morseAlphabet = data;
        console.log('morsealphabet', this.morseAlphabet);
      });
  }

  ngOnInit() {
    this.form = new FormGroup({
      message: new FormControl('', [Validators.required, this.isValidText])
    });
  }

  onTranslateClick() {
    const msg = this.form.get('message').value;
    console.log('msg', msg.length);
    this._morseFacade.onSetInputText(msg);
    this._translationService.translateToMorse(msg, this.morseAlphabet);
    this._store.dispatch(new Navigate(['results']));
  }

  private isValidText(control: FormControl): ValidationErrors {
    const textExp: RegExp = az09regex;
    if (!textExp.test(control.value)) {
      return { invalidText: true };
    }
    return null;
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
