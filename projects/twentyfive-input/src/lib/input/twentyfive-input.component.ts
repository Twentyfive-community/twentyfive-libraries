import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InputTheme, LabelTheme} from 'twentyfive-style';

@Component({
  selector: 'lib-twentyfive-input',
  templateUrl: `./twentyfive-input.component.html`
})
export class TwentyfiveInputComponent {

  @Input() placeholder: string = 'Placeholder';
  @Input() inputType: string = 'text';
  @Input() value: string = '';
  @Input() labelText: string = '';
  @Input() invalidText: string = '';
  @Input() validText: string = '';
  @Input() id: string = '';

  @Input() readOnly: boolean = false;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() showLabel: boolean = true;

  @Input() inputStyle: InputTheme = InputTheme.Primary;
  @Input() labelStyle: LabelTheme = LabelTheme.LabelMedium;

  @Input() customCssClass: string = '';
  @Input() customLabelClass: string = '';
  @Input() isClearable: boolean = false;

  @Input() maxCharacters?: number; // New input for maximum characters

  /**
   sensibilità dell'incremento del valore numerico default è 1
   */
  @Input() stepValue: any = 1;


  @Output() changeValue = new EventEmitter<any>();

  changeInput(event: any) {
    this.changeValue.emit(event);
  }

  clearInput() {
    this.value = '';
    this.changeValue.emit(this.value);
  }

  protected readonly InputTheme = InputTheme;
  protected readonly LabelTheme = LabelTheme;
}


