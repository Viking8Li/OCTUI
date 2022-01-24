import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ClsBinComponent } from './cls-bin/cls-bin.component';
import { StylBinComponent } from './styl-bin/styl-bin.component';
import { TemRefVarComponent } from './tem-ref-var/tem-ref-var.component';
import { FormsModule } from '@angular/forms';
import { StrDirComponent } from './str-dir/str-dir.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ClsBinComponent,
    StylBinComponent,
    TemRefVarComponent,
    StrDirComponent,
    SignupComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
