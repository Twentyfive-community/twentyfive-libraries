import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LabelTheme} from  "twentyfive-input";
import {TranslationWidth} from "@angular/common";


@Component({
  selector: 'lib-twentyfive-datepicker',
  templateUrl: './twentyfive-datepicker.component.html',
  styleUrls: ['./twentyfive-datepicker.component.scss']
})
export class TwentyfiveDatepickerComponent {

  @Input() labelText: string = 'Label';
  @Input() placeholder: string = 'dd/mm/yyyy';
  @Input() type: string = 'button';
  @Input() buttonIcon: string = 'bi bi-calendar-week';
  @Input() name: string = 'dp';


  @Input() readOnly: boolean = true;
  @Input() showLabel: boolean = true;
  @Input() disabledInput: boolean = false;
  @Input() required: boolean = false;

  @Input() datePickerStyle: DatePickerTheme = DatePickerTheme.Primary;
  @Input() datePickerButtonStyle: DatePickerButtonTheme = DatePickerButtonTheme.ButtonPrimary;
  @Input() labelStyle: LabelTheme = LabelTheme.LabelMedium;

  @Input() customLabelClass: string = '';
  @Input() customCssClass: string = '';
  @Input() customButtonClass: string = '';

  protected readonly DatePickerTheme = DatePickerTheme;
  protected readonly DatePickerButtonTheme = DatePickerButtonTheme;
  protected readonly LabelTheme = LabelTheme;


  @Output() dateSelected = new EventEmitter<Date>();
  selectedDate: Date = new Date();


  onDateSelect(event: any) {
    const selectedDate = new Date(event.year, event.month - 1, event.day);
    this.dateSelected.emit(selectedDate);
  }

  protected readonly TranslationWidth = TranslationWidth;
}
export enum DatePickerTheme {
  Primary = 'datepicker-25',
}

export enum DatePickerButtonTheme {
  ButtonPrimary = 'btn datepicker-button-primary',
}

