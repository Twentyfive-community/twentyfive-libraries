import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'lib-icon-with-counter',
  templateUrl: './icon-with-counter.component.html',
  styleUrls: ['./icon-with-counter.component.css']
})
export class IconWithCounterComponent implements OnChanges {

  /**
   * The CSS class used to display the icon.
   * For example, you can pass a Bootstrap class like 'bi bi-person'.
   */
  @Input() iconClass!: string;

  /**
   * The URL where the user will be navigated when the icon is clicked.
   */
  @Input() navigationUrl!: string;

  /**
   * Determines whether the counter should be displayed. Default is `false`.
   */
  @Input() showCounter?: boolean = false;

  /**
   * If true, the counter will be hidden when its value is zero. Default is `false`.
   */
  @Input() dynamicCounter?: boolean = false;

  /**
   * Current value of the counter. Default is `0`.
   */
  @Input() counterValue?: number = 0;

  /**
   * Optional background color for the counter. You can pass any valid CSS color value.
   */
  @Input() counterColor?: string;

  /**
   * Optional font color for the counter value. You can pass any valid CSS color value.
   */
  @Input() counterFontColor?: string;

  ngOnChanges(): void {
    this.manageCounterBehavior();
  }

  manageCounterBehavior(): void {
    this.counterValue = Math.max(0, this.counterValue ?? 0);
    if (this.dynamicCounter) {
      this.showCounter = this.counterValue > 0;
    }
  }
}
