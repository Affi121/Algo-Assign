import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  standalone: false
})
export class ViewComponent {
  @Input() formValues: any;

  constructor() {}
}
