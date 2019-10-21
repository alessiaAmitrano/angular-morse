import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  group
} from '@angular/animations';

const easing = 'cubic-bezier(0.445, 0.05, 0.55, 0.95)';

export const InputFadeAnimation = trigger('inputFadeTrigger', [
  transition(':enter', [
    group([
      query(
        '.input-page__form-title, app-input-form, .input-page__form-counter',
        [
          style({ opacity: 0 }),
          animate(`0.5s 0.3s ${easing}`),
          style({ opacity: 1 })
        ]
      ),
      query('.input-page__form-btn', [
        style({ opacity: 0 }),
        animate(`0.8s 1s ${easing}`),
        style({ opacity: 1 })
      ])
    ])
  ]),
  transition(':leave', [
    query('*', [animate(`0.5s 0.2s ${easing}`), style({ opacity: 0 })])
  ])
]);

export const ResultsFadeAnimation = trigger('resultsFadeTrigger', [
  transition(':enter', [
    group([
      query('.results-page__title, .results-page__restart-btn', [
        style({ opacity: 0 }),
        animate(`0.5s 0.5s ${easing}`),
        style({ opacity: 1 })
      ]),
      query('.results-page__items-container', [
        style({ opacity: 0 }),
        animate(`1s 1s ${easing}`),
        style({ opacity: 1 })
      ])
    ])
  ]),
  transition(':leave', [
    query('*', [animate(`0.5s 0.2s ${easing}`), style({ opacity: 0 })])
  ])
]);
