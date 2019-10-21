import { Component, OnInit } from '@angular/core';
import { MorseFacadeService } from './core/facades/morse.facade';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'angular-idle-timeout';
  morseAlphabet: object;

  constructor(
    private _idle: Idle,
    private _keepalive: Keepalive,
    private _morseFacade: MorseFacadeService,
    private _store: Store
  ) {
    _idle.setIdle(30);
    _idle.setTimeout(10000);
    _idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    _idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle.';
      console.log(this.idleState);
      this.reset();
    });

    _idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      console.log(this.idleState);
      this._store.dispatch(new Navigate(['']));
    });

    _idle.onIdleStart.subscribe(() => {
      this.idleState = "You've gone idle!";
      console.log(this.idleState);
      this._store.dispatch(new Navigate(['']));
    });

    // _idle.onTimeoutWarning.subscribe(countdown => {
    //   this.idleState = 'You will time out in ' + countdown + ' seconds!';
    //   console.log(this.idleState);
    // });

    // sets the ping interval to 15 seconds
    _keepalive.interval(15);

    _keepalive.onPing.subscribe(() => (this.lastPing = new Date()));

    this.reset();
  }

  ngOnInit() {
    this._morseFacade.getMorseAlphabet().subscribe(data => {
      this.morseAlphabet = data.payload;
      console.log(this.morseAlphabet);
    });
  }

  reset() {
    this._idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
}
