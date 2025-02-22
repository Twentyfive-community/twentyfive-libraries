import {Component, EventEmitter, Input, Output} from "@angular/core";
import {BoxTheme, InputIconTheme, InputTheme, InputWithIconTheme } from "twentyfive-style";

@Component({
  selector: 'lib-twentyfive-input-with-icon',
  templateUrl: `./twentyfive-input-with-icon.component.html`
})
export class TwentyfiveInputWithIconComponent {

  @Input() placeholder: string = 'Placeholder';
  @Input() inputType: string = 'text';
  @Input() icon: string = '';
  @Input() maxWidth: string = '500px';
  @Input() minWidth: string = '200px';
  @Input() customIconCssClass: string = '';
  @Input() customBoxCssClass: string = '';
  @Input() customInputCssClass: string = '';

  @Input() readOnly: boolean = false;
  @Input() disabled: boolean = false;

  @Input() iconStyle: InputIconTheme = InputIconTheme.Primary;
  @Input() boxStyle: BoxTheme = BoxTheme.Primary;
  @Input() inputStyle: InputWithIconTheme = InputWithIconTheme.Primary;

  @Input() buttonText: string = '';
  @Input() textColor: string = 'white'

  @Input() inputValue: string = '';

  @Output() inputValueChange = new EventEmitter<string>();
  @Output() iconClick = new EventEmitter<string>();

  onInputChange(value: string) {
    this.inputValue = value;
    this.inputValueChange.emit(value); // Notifica il valore al genitore
  }

  onIconClick() {
    this.iconClick.emit(this.inputValue);
  }

  protected readonly InputTheme = InputTheme;
  protected readonly InputIconTheme = InputIconTheme;
  protected readonly BoxTheme = BoxTheme;
  protected readonly InputWithIconTheme = InputWithIconTheme;
}
