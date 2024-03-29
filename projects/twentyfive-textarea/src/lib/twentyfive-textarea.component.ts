import {Component, Input} from '@angular/core';
import {LabelTheme, TextareaTheme } from 'twentyfive-style';
@Component({
  selector: 'lib-twentyfive-textarea',
  templateUrl: `./twentyfive-textarea.component.html`
})
export class TwentyfiveTextareaComponent {

  @Input() placeholder: string = 'Placeholder';
  @Input() rows: string = '5';
  @Input() labelText: string = 'Label text';
  @Input() value: string = '';
  @Input() readOnly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() labelStyle: LabelTheme = LabelTheme.LabelMedium;
  @Input() showLabel: boolean = true;

  @Input() maxCharacters?: number; // New input for maximum characters

  @Input() textareaStyle: TextareaTheme = TextareaTheme.Primary;

  @Input() customCssClass: string = '';
  @Input() customLabelClass: string = '';

  protected readonly LabelTheme = LabelTheme;
  protected readonly TextareaTheme = TextareaTheme;
}

