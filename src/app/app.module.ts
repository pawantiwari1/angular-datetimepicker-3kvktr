import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 import { library as fontLibrary } from '@fortawesome/fontawesome-svg-core';
import { faCalendar,  faClock } from '@fortawesome/free-regular-svg-icons';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';

fontLibrary.add(
    faCalendar,
    faClock
);
   
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, DateTimePickerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
