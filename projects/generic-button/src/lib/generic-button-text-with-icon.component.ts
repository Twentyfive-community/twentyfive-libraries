import {Component, Input} from '@angular/core';
import {emptyFunction} from "twentyfive-style";

@Component({
  selector: 'lib-generic-button-text-with-icon',
  templateUrl: './generic-button-text-with-icon.component.html',
  styleUrls: ['./generic-button-text-with-icon.component.scss']
})
export class GenericButtonTextWithIconComponent {

  @Input() buttonText: string = 'Button text';
  @Input() routerLink: string = '';
  @Input() suffixIcon: string = '';
  @Input() prefixIcon: string = '';
  @Input() placement: string = '';
  @Input() tooltipText: string = '';
  @Input() click: any = emptyFunction;
  disabled: boolean = true;
  @Input() iconLeft: boolean = true;

  @Input() buttonStyle: any;
  @Input() buttonSize: any;

  @Input() customCssClass: string = '';
  @Input() customSizeCssClass: string = '';
  ButtonTheme: any;
  ButtonSizeWithIconTheme: any;
  ButtonSizeTheme: any;
}

