import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  standalone: false
})
export class ParentComponent implements OnInit {
  parentForm!: FormGroup;  // Use the definite assignment assertion operator
  inputTypes: string[] = ['text', 'select', 'radio'];
  validators: string[] = ['required', 'minLength'];
  submittedValues: any;  // Add this property

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.parentForm = this.fb.group({
      configurations: this.fb.array([])
    });
    this.addConfiguration();  // Add initial configuration
  }

  get configurations(): FormArray {
    return this.parentForm.get('configurations') as FormArray;
  }

  addConfiguration() {
    this.configurations.push(this.fb.group({
      label: [''],
      inputType: [''],
      validators: [[]]
    }));
  }

  onSubmit(formValues: any) {
    this.submittedValues = formValues;  // Store the submitted form values
    console.log('Form Values:', formValues);
  }
}
