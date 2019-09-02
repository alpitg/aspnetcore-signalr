import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMessageModel } from '../models/message-model';

@Injectable({
  providedIn: 'root'
})
export class ChatAppService {

  constructor(private http: HttpClient) { }


  sendMessage(model: IMessageModel) {
    return this.http.post('/api/ChatMessaging/SendMessage', model);
  }
}
