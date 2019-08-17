import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatUiModuleModule } from '@projects-ca/chat-ui-module/chat-ui-module.module';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChatAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // custome UI
    ChatUiModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
