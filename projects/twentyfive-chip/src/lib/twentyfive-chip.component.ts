import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChipTheme} from "twentyfive-style";

@Component({
  selector: 'lib-generic-button',
  templateUrl: './twentyfive-chip.component.html',
  styleUrls: ['./twentyfive-chip.component.scss']
})
export class TwentyfiveChipComponent {

  @Input() chipText: string = 'Testo della chip';
  @Input() closeableChip: boolean = true;
  @Input() showIcon: boolean = true;

  @Input() chipStyle: any;
  @Input() customCssClass: string = '';

  @Output() closeChip: EventEmitter<any> = new EventEmitter<any>();


  iconClicked() {
    this.closeChip.emit();
  }

  protected readonly ChipTheme = ChipTheme;
}
