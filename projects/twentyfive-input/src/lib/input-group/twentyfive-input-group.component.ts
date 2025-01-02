import {Component, EventEmitter, Input, Output} from "@angular/core";
import {emptyFunction} from "../emptyFunction";
import {AddonTheme, InputGroupButtonTheme, InputTheme} from "twentyfive-style";

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
  @Input() ngModel: string = '';

  @Input() readOnly: boolean = false;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() showPrependIcon: boolean = false;
  @Input() showAppend: boolean = false;
  @Input() showPrepend: boolean = false;

  @Input() click: any = emptyFunction;

  @Input() inputStyle: InputTheme = InputTheme.Primary;
  @Input() addonStyle: any; //values from AddonTheme
  @Input() buttonStyle: any; //values from InputGroupButtonTheme

  @Input() customAddonCssClass: string = '';
  @Input() customCssClass: string = '';
  @Input() customButtonCssClass: string = '';
  @Output() appendClick: EventEmitter<any> = new EventEmitter<any>();

  protected readonly InputTheme = InputTheme;
  protected readonly AddonTheme = AddonTheme;
  protected readonly InputGroupButtonTheme = InputGroupButtonTheme;

  onAppendClick() {
    this.appendClick.emit();
  }
}

