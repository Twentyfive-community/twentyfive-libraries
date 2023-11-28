import {Component,Input} from "@angular/core";
import {InputTheme} from "../input/twentyfive-input.component";
import {emptyFunction} from "../emptyFunction";

@Component({
  selector: 'lib-twentyfive-input-group',
  templateUrl: `./twentyfive-input-group.component.html`
})
export class TwentyfiveInputGroupComponent {
  @Input() placeholder: string = 'Placeholder';
  @Input() inputType: string = 'text';
  @Input() labelText: string = 'text';
  @Input() appendIcon: string = 'bi bi-person';
  @Input() prependIcon: string = 'bi bi-person';
  @Input() value: string = '';
  @Input() id: string = '';
  @Input() readOnly: boolean = false;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() showPrependIcon: boolean = false;
  @Input() showAppend: boolean = false;
  @Input() showPrepend: boolean = false;
  @Input() click: any = emptyFunction;

  @Input() inputStyle: InputTheme = InputTheme.Primary;
  @Input() addonStyle: AddonTheme = AddonTheme.Primary;
  @Input() buttonStyle: InputGroupButtonTheme = InputGroupButtonTheme.Primary;

  @Input() customAddonCssClass: string = '';
  @Input() customCssClass: string = '';
  @Input() customButtonCssClass: string = '';

  protected readonly InputTheme = InputTheme;
  protected readonly AddonTheme = AddonTheme;
  protected readonly InputGroupButtonTheme = InputGroupButtonTheme;
}

export  enum  AddonTheme{
  Primary= 'input-group-addon',
}

export enum InputGroupButtonTheme {
  Primary = 'btn-input-group-primary',
}
