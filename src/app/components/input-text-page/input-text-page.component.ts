import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors
} from '@angular/forms';

const az09regex = /^[A-Za-z0-9 ]+$/;
@Component({
  selector: 'app-input-text-page',
  templateUrl: './input-text-page.component.html',
  styleUrls: ['./input-text-page.component.scss']
})
export class InputTextPageComponent implements OnInit {
  form: any;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      message: new FormControl('', [Validators.required, this.isValidText])
    });
  }

  private isValidText(control: FormControl): ValidationErrors {
    const textExp: RegExp = az09regex;
    if (!textExp.test(control.value)) {
      return { invalidText: true };
    }
    return null;
  }
}
