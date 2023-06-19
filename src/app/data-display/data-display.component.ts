import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-display',
  template: `
    <ul>
      <li *ngFor="let item of data">{{ item }}</li>
    </ul>
  `,
})
export class DataDisplayComponent {
  @Input()
  data!: any[];
}
