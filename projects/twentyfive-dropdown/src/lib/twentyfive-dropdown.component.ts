import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lib-twentyfive-dropdown',
  templateUrl: `./twentyfive-dropdown.component.html`
})
export class TwentyfiveDropdownComponent {
  @Input() toggleIcon:string = '';
  @Input() value:string = '';

  @Input() model:any;
  @Input() dropdownItems:any = [];

  @Output() modelChange:EventEmitter<number> = new EventEmitter<number>();

  @Input() showButton: boolean = true;
}
