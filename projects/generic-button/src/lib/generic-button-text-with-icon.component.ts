import {Component, Input} from '@angular/core';
import {emptyFunction} from "./constants/empty-function";
import {ButtonTheme, ButtonSizeTheme} from "./generic-button.component";

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

  protected readonly ButtonTheme = ButtonTheme;
  protected readonly ButtonSizeWithIconTheme = ButtonSizeWithIconTheme;
  protected readonly ButtonSizeTheme = ButtonSizeTheme;
}
export enum ButtonSizeWithIconTheme {
  Small = 'btn-icon-small',
  Medium = 'btn-icon-medium',
  Large = 'btn-icon-large',
  ExtraLarge = 'btn-icon-extra-large',
}
