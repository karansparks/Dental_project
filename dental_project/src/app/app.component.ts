import { Component , OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { SocketService } from './services/socket.service';
import { FormsModule } from '@angular/forms';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dental_project';
  private messageSubscription: Subscription;
  messages: string[] = [];
  newMessage: string = '';
  constructor(private socketService: SocketService) {
    this.messageSubscription = this.socketService
      .on('message')
      .subscribe((data) => {
        this.messages.push(data.text);
      });


      const socket = io('http://localhost:4200');
      const todoInput = document.getElementById('todoInput'); 
      const addTodo = document.getElementById('addTodo');
      const todoList:any = document.getElementById('todoList');
      
      socket.on('update',(todos)=>{
        todoList.innerHTML = '';
        todos.forEach((todo:any) => {
          const li = document.createElement('li');
          li.textContent = todo;
          todoList.appendChild(li);
        });
      })
  }


  sendMessage() {
    this.socketService.emit('message', { text: this.newMessage });
    this.newMessage = '';
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }



}
