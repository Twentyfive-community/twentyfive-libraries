import {Component, Input} from '@angular/core';
import {emptyFunction} from "../constants/empty-function";
import { ButtonTheme } from 'twentyfive-style';

@Component({
  selector: 'lib-generic-button-only-icon',
  templateUrl: './generic-button-only-icon.component.html',
  styleUrls: ['./generic-button-only-icon.component.scss']
})
export class GenericButtonOnlyIconComponent {

  @Input() routerLink: string = '';
  @Input() icon: string = '';
  @Input() placement: string = '';
  @Input() tooltipText: string = '';
  @Input() click: any = emptyFunction;
  disabled: boolean = true;
  @Input() buttonStyle: any;
  @Input() customCssClass: string = '';

  protected ButtonTheme = ButtonTheme ;
}
