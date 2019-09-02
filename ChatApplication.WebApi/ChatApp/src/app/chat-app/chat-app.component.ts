import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';
import { HttpClient } from '@angular/common/http';
import { IMessageModel } from './models/message-model';
import { ChatAppService } from './services/chat-app.service';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.scss']
})
export class ChatAppComponent implements OnInit {

  messagesList: IMessageModel[] = [];

  constructor(
    private http: HttpClient,
    private chatAppService: ChatAppService,
    public signalRService: SignalRService,
    ) {
    this.getMessages();
  }

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.messagesListener();
    // this.startHttpRequest();
  }

  getMessages() {
    this.signalRService.getMessages().subscribe((x: IMessageModel[]) => {
      this.messagesList = x;
    });
  }

  sendMessage(textMessage: any) {
    console.log(textMessage);
    const msgModel: IMessageModel = {
      MessageId: 0,
      TextMessage: textMessage,
      Date: new Date()
    };
    this.chatAppService.sendMessage(msgModel).subscribe(x => {
      console.log('Sent successfull');
    });
  }
}