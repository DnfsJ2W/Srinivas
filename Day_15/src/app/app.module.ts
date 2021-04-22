import { SummaryPipe } from './pipescomponent/SummaryPipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { productcomponent } from './products.component';
import { CourseComponent } from './course/course.component';
import { PipescomponentComponent } from './pipescomponent/pipescomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    productcomponent,
    CourseComponent,
    PipescomponentComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
