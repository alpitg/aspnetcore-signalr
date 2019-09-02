import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { IMessageModel } from '../models/message-model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;
  private messagesList$ = new BehaviorSubject<IMessageModel[]>([]);
  // messagesList = this.messagesList$.asObservable();

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('/chatHub')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public getMessages() {
    return this.messagesList$; 
  }

  public messagesListener = () => {
    this.hubConnection.on('ReceiveMessage', (response: any) => {
      console.log(response);
      const responseObj: IMessageModel = {
        MessageId: response.messageId,
        TextMessage: response.textMessage,
        Date: response.date
      };
      this.messagesList$.next([...this.messagesList$.value, responseObj]);
    });
    // this.hubConnection.onclose((e) => {
    //   console.log('Connection closed!', e);
    // });
  }
}