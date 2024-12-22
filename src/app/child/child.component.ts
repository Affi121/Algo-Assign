import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: false
})
export class ChildComponent implements OnChanges {
  @Input() configurations!: any[];
  @Output() submit = new EventEmitter<any>();
  childForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.childForm = this.fb.group({});
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['configurations']) {
      this.updateForm();
    }
  }

  updateForm() {
    const group: any = {};
    this.configurations.forEach(config => {
      const validators = [];
      if (config.validators.includes('required')) {
        validators.push(Validators.required);
      }
      if (config.validators.includes('minLength')) {
        validators.push(Validators.minLength(3)); // Example minimum length
      }
      group[config.label] = ['', validators];
    });
    this.childForm = this.fb.group(group);
  }

  onSubmit() {
    if (this.childForm.valid) {
      this.submit.emit(this.childForm.value); // Emit form values, not the event
    }
  }
}
