import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatUiModuleComponent } from './chat-ui-module.component';



@NgModule({
  declarations: [ChatUiModuleComponent],
  imports: [
    CommonModule
  ],
  exports: [ChatUiModuleComponent]
})
export class ChatUiModuleModule { }
