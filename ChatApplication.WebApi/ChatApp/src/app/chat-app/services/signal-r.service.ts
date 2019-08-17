import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data: any[];

  private hubConnection: signalR.HubConnection

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('/chatHub')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferChartDataListener = () => {
    this.hubConnection.on('ReceiveMessage', (data) => {
      this.data = data;
      console.log(data);
    });
    // this.hubConnection.onclose((e) => {
    //   console.log('Connection closed!', e);
    // });
  }
}