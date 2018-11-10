import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { MathComponent } from './math/math.component';
import { AddComponent } from './math/add/add.component';
import { SubtractComponent } from './math/subtract/subtract.component';
import { MultiplyComponent } from './math/multiply/multiply.component';
import {AppRoutingModule} from  './routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevideComponent } from './math/devide/devide.component';
import {MatDialogModule} from "@angular/material";
import { DialogBodyComponent } from './math/dialog-body/dialog-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    AddComponent,
    SubtractComponent,
    MultiplyComponent,
    DevideComponent,
    DialogBodyComponent   
  ],
  imports: [
    
    BrowserModule,   
    AppRoutingModule,
    HttpClientModule  ,   
    ReactiveFormsModule,
    FormsModule, MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule { }
