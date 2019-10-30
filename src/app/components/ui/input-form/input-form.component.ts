import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ViewChild,
  ElementRef
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @Input() messageControl: FormControl;
  @ViewChild('msgInput', { static: true }) msgInput: ElementRef;

  constructor() {}

  ngOnInit() {
    this.msgInput.nativeElement.focus();
  }
}
