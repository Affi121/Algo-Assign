import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Import this

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule  // And add it here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
