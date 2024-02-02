import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lib-cookie-detailed-row',
  templateUrl: './cookie-detailed-row.component.html',
  styleUrls: ['./cookie-detailed-row.component.scss']
})
export class CookieDetailedRowComponent {

  @Input() code: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() value: boolean = false;

  @Output() changedValue: any = new EventEmitter<any>();

  changeInput() {
    this.changedValue.emit({code: this.code, value: !this.value});
  }
}
