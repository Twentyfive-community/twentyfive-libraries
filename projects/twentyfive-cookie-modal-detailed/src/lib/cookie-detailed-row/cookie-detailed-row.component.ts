import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-cookie-detailed-row',
  templateUrl: './cookie-detailed-row.component.html',
  styleUrls: ['./cookie-detailed-row.component.scss']
})
export class CookieDetailedRowComponent {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() value: boolean = false;

}
