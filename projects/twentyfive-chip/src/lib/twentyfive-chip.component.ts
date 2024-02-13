import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lib-twentyfive-chip',
  templateUrl: './twentyfive-chip.component.html',
})
export class TwentyfiveChipComponent {

  @Input() chipText: string = 'Testo della chip';
  @Input() closeableChip: boolean = true;
  @Input() showIcon: boolean = true;
  @Input() backgroundChipColor: string = '#1A1660';
  @Input() textColor: string = 'white';

  @Output() closeChip: EventEmitter<any> = new EventEmitter<any>();


  iconClicked() {
    this.closeChip.emit();
  }
}
