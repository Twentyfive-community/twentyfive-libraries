import {Component, Input} from '@angular/core';
import {ButtonTheme, ButtonSizeTheme} from "twentyfive-style";
import {emptyFunction} from "../constants/empty-function";
@Component({
  selector: 'lib-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss']
})
export class GenericButtonComponent {

  @Input() buttonText: string = 'Button text';
  @Input() routerLink: string = '';
  @Input() placement: string = '';
  @Input() tooltipText: string = '';
  @Input() type: string = '';
  @Input() click: any = emptyFunction;
  disabled: boolean = true;

  @Input() buttonStyle: any;
  @Input() buttonSize: any;

  @Input() customCssClass: string = '';
  @Input() customSizeCssClass: string = '';

  protected ButtonTheme = ButtonTheme ;
  protected ButtonSizeTheme = ButtonSizeTheme;
}



