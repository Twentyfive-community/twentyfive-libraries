import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslationWidth} from "@angular/common";
import {DatePickerButtonTheme, DatePickerTheme, LabelTheme } from 'twentyfive-style';
import {NgbCalendar, NgbDate, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'lib-twentyfive-datepicker',
  templateUrl: './twentyfive-datepicker.component.html',
  styleUrls: ['./twentyfive-datepicker.component.scss']
})
export class TwentyfiveDatepickerComponent implements OnInit{

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

  @Output() dateSelected = new EventEmitter<Date>();
  @Input()  selectedDate: Date | undefined;

  @Input() minDate!: NgbDate;
  @Input() maxDate!: NgbDate;

  /**
  * Using this parameter, minDate will be overridden
  **/
  @Input() setMinDateToToday: boolean = false;

  @Input() disabledDates: NgbDate[] = [];
  @Input() enabledDates: NgbDate[] = [];



  constructor(private calendar: NgbCalendar) {
  }

  ngOnInit(): void {
    if (this.setMinDateToToday) {
      this.minDate = this.calendar.getToday();
    }
  }

  markDisabled = (date: NgbDate): boolean => {
    if (this.disabledDates.length > 0) {
      return this.disabledDates.some(disabledDate => date.equals(disabledDate));
    }
    if (this.enabledDates.length > 0) {
      return !this.enabledDates.some(enabledDate => date.equals(enabledDate));
    }
    return false;
  };

  onDateSelect(event: any) {
    const selectedDate = new Date(event.year, event.month - 1, event.day);
    this.dateSelected.emit(selectedDate);
  }

  protected TranslationWidth = TranslationWidth;
  protected DatePickerTheme = DatePickerTheme;
  protected DatePickerButtonTheme = DatePickerButtonTheme;
  protected LabelTheme = LabelTheme;
}

