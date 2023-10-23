import {NgbDate} from "@ng-bootstrap/ng-bootstrap";

export class TwentyDate{
    fromDate: NgbDate | undefined | null;
    toDate: NgbDate | undefined | null;

    constructor(fromDate: NgbDate | undefined | null, toDate: NgbDate | undefined | null) {
        this.fromDate = fromDate;
        this.toDate = toDate;
    }
}
