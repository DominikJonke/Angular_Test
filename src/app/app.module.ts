import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReusableInputComponent } from './reusable-input/reusable-input.component';
import { FormsModule } from '@angular/forms';
import { PupilEditComponent } from './pupil-edit/pupil-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ReusableInputComponent,
    PupilEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
