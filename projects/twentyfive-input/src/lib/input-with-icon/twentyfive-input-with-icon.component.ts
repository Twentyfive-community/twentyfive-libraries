import {Component,Input} from "@angular/core";
import {InputTheme} from "../input/twentyfive-input.component";

@Component({
  selector: 'lib-twentyfive-input-with-icon',
  templateUrl: `./twentyfive-input-with-icon.component.html`,
  styleUrls: ['../../../src/styles.scss']
})
export class TwentyfiveInputWithIconComponent {
  @Input() placeholder: string = 'Placeholder';
  @Input() inputType: string = 'text';
  @Input() icon: string = '';
  @Input() maxWidth: string = '500px';
  @Input() minWidth: string = '200px';
  @Input() readOnly: boolean = false;
  @Input() disabled: boolean = false;

  @Input() iconStyle: InputIconTheme = InputIconTheme.Primary;
  @Input() boxStyle: BoxTheme = BoxTheme.Primary;
  @Input() inputStyle: InputWithIconTheme = InputWithIconTheme.Primary;
  @Input() customIconCssClass: string = '';
  @Input() customBoxCssClass: string = '';
  @Input() customInputCssClass: string = '';

  protected readonly InputTheme = InputTheme;
  protected readonly InputIconTheme = InputIconTheme;
  protected readonly BoxTheme = BoxTheme;
  protected readonly InputWithIconTheme = InputWithIconTheme;
}
export enum InputIconTheme {
  Primary = 'icon-primary-25',
}
export enum BoxTheme {
  Primary = 'box-primary-25',
}

export enum InputWithIconTheme {
  Primary = 'input-primary-25',
}
