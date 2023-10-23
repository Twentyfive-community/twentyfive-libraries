import {Injectable} from "@angular/core";
import {NgbDateParserFormatter, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {formatDate} from "@angular/common";

@Injectable()
export class ItalianDateFormatter extends NgbDateParserFormatter {

  readonly DATE_FORMAT = 'dd/MM/yyyy';

  parse(value: string): NgbDateStruct | null {
    // Not implemented for this example
    return null;
  }

  format(date: NgbDateStruct): string {
    if (!date) {
      return '';
    }
    return formatDate(new Date(date.year, date.month - 1, date.day), this.DATE_FORMAT, 'en-EN');
  }

}
