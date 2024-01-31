import {Component, EventEmitter, HostListener, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {ItalianDateFormatter} from "../utilities/italian-date-formatter";
import {TwentyDate} from "./twenty-date";
import {TranslationWidth} from "@angular/common";
import {DatePickerButtonTheme, DatePickerTheme, LabelTheme } from 'twentyfive-style';
@Component({
  selector: 'lib-twentyfive-datepicker-range',
  templateUrl : 'twentyfive-datepicker-range.component.html',
  styleUrls: ['twentyfive-datepicker-range.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: NgbDateParserFormatter, useClass: ItalianDateFormatter }
  ],

})
export class TwentyfiveDatepickerRangeComponent  implements OnInit{

  @Input() labelText: string = 'Label';
  @Input() showLabel: boolean = true;
  @Input() labelStyle: LabelTheme = LabelTheme.LabelMedium;
  @Input() customLabelClass: string = '';
  @Input() buttonIcon: string = 'bi bi-calendar-week';
  @Input() disabledInput: boolean = false;
  @Input() disableText: boolean = false;
  @Input() datePickerStyle: DatePickerTheme = DatePickerTheme.Primary;
  @Input() datePickerButtonStyle: DatePickerButtonTheme = DatePickerButtonTheme.ButtonPrimary;
  @Input() customCssClass: string = '';
  @Input() customButtonClass: string = '';
  @Output() dateSelect:EventEmitter<any> = new EventEmitter<any>();

  @Input() hoveredDate: NgbDate | undefined | null = undefined;
  @Input() fromDate: NgbDate | undefined | null;
  @Input() toDate: NgbDate | undefined | null;
  @Input() placeHolderDateStart: string = 'Data inizio';
  @Input() placeHolderDateEnd: any = 'Data fine';
  @Input() minDateRange: any;
  @Input() maxDateRange: any;


  @Input() maxDate: NgbDate | undefined | null;
  @Input() minDate: NgbDate | undefined | null;

  numberOfMonths: number = 2;

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
    if(window.innerWidth <= 768){
      this.numberOfMonths = 1;
    } else {
      this.numberOfMonths = 2;
    }
  }

  disableOutRange = (date: NgbDateStruct) => {

    return true
  } ;


  onDateSelection(date: NgbDate) {
    if(date.before(this.minDate) || date.after(this.maxDate)) return;
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    this.dateSelect.emit(new TwentyDate(this.fromDate , this.toDate))
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | undefined | null, input: string): NgbDate | undefined | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  @HostListener("window:resize" , []) changeSize() {
    if(window.innerWidth < 768){
      this.numberOfMonths = 1;
    } else {
      this.numberOfMonths = 2;
    }
  }


  readonly TranslationWidth = TranslationWidth;
  protected readonly LabelTheme = LabelTheme;
  protected readonly DatePickerTheme = DatePickerTheme;
  protected readonly DatePickerButtonTheme = DatePickerButtonTheme;

}

