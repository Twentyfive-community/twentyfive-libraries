import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LabelTheme} from "twentyfive-input";
import {NgbTimepickerConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'lib-twentyfive-timepicker',
  templateUrl: `./twentyfive-timepicker.component.html`,
  styleUrls: ['../../src/styles.scss']
})
export class TwentyfiveTimepickerComponent {
  @Input() time: any;
  @Output() timeChange = new EventEmitter<any>();

  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() showLabel: boolean = true;
  @Input() labelText: string = 'Label text';
  @Input() labelStyle: LabelTheme = LabelTheme.LabelMedium;
  @Input() customLabelClass: string = '';
  constructor(config: NgbTimepickerConfig) {
    config.spinners = false;
  }

  protected readonly LabelTheme = LabelTheme;
}
