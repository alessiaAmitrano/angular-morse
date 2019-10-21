import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Store } from '@ngxs/store';
import { MorseFacadeService } from 'src/app/core/facades/morse.facade';
import { MorseSymbol } from 'src/app/core/models';
import { Navigate } from '@ngxs/router-plugin';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResultsFadeAnimation } from 'src/app/animations/fade-animations';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
  animations: [ResultsFadeAnimation]
})
export class ResultPageComponent implements OnInit, OnDestroy {
  morseText: MorseSymbol[];
  @HostBinding('@resultsFadeTrigger')
  public animateElements = true;
  private _destroyed$ = new Subject();

  constructor(private _store: Store, private _morseFacade: MorseFacadeService) {
    this._morseFacade.morseText$
      .pipe(takeUntil(this._destroyed$))
      .subscribe(data => {
        console.log('data', data);
        this.morseText = data;
      });
  }

  ngOnInit() {}

  onTryAgainClick() {
    this._morseFacade.onResetInputs();
    this._store.dispatch(new Navigate(['']));
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
