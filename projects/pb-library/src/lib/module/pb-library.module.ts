import { NgModule } from '@angular/core';
import { PbLibraryComponent } from '../pb-components/pb-library.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PbLibraryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    PbLibraryComponent
  ]
})
export class PbLibraryModule { }
