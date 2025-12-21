import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from 'src/components/login/login.component';
import { SheetSelectorComponent } from 'src/components/sheet-selector/sheet-selector.component';
import { SheetViewerComponent } from 'src/components/sheet-viewer/sheet-viewer.component';
import { SafePipe } from 'src/pipes/safe.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SheetViewerComponent,
    SafePipe,
    LoginComponent,
    SheetSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
