import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToggleFormComponent } from './toggle-form/toggle-form.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleFormComponent,
    ToggleButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
