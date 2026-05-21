import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExtensionListComponent } from './components/extension-list/extension-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ExtensionListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}