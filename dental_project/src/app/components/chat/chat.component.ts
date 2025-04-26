import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ThemeModuleModule } from '../../@modules/theme-module/theme-module.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'; 

class Message {
  text?: string;
  type?: MessageType;
}

enum MessageType {
  Bot = 'bot',
  User = 'user',
  Loading = 'loading'
}

@Component({
  selector: 'app-chat',
   standalone:true,
     imports:[ThemeModuleModule,ReactiveFormsModule  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('messageContainer')  messageContainer!: ElementRef;
  @Input()  display!: string;

   form!: FormGroup;
  public messages: Array<Message> = [];
  private canSendMessage = true;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      message: ['']
    });
    this.getBotMessage();
  }

  ngAfterViewChecked(): void {        
    this.scrollToBottom();        
  } 


  usermsg:boolean = false;
  public onClickSendMessage(): void {
    const message = this.form.get('message')?.value;

    if (message && this.canSendMessage) {
      const userMessage: Message = {text: message, type: MessageType.User};
      this.messages.push(userMessage);
      this.usermsg = true;
      this.form.get('message')?.setValue('');
      this.form.updateValueAndValidity();
      this.getBotMessage();
    }
  }
  hidebotmsg:boolean = false;
  private getBotMessage(): void {
    this.canSendMessage = false;
    const waitMessage: Message = {type: MessageType.Loading};
    this.messages.push(waitMessage);

    setTimeout(() => {
      this.messages.pop();
      let msg:string = '';
      if(this.usermsg){
        console.log(this.messages.filter(msg => msg.type === "user"));
        let latestUserMessage = this.messages.filter(msg => msg.type === "user").slice(-1)[0].text;
        console.log(latestUserMessage);
        latestUserMessage?.toLowerCase();
        if (latestUserMessage?.includes("start") || latestUserMessage?.includes("time")) {
          msg=' The Clinic Opens At 9 AM From Monday To Saturday';
        }
        else if (latestUserMessage?.includes("hello") || latestUserMessage?.includes("hi")) {
          msg='Iam a Dentist Doctor, what can I do for you?';
        }
        else if (latestUserMessage?.includes("location") || latestUserMessage?.includes("address")) {
          msg='The Clinic is located at 123 Main Street, Cityville';
        }
        else if (latestUserMessage?.includes("doctor") || latestUserMessage?.includes("dentist")) {
          msg='Dr. John Doe is our lead dentist with over 10 years of experience.';
        }
        else if (latestUserMessage?.includes("treatment") || latestUserMessage?.includes("services")) {
          msg='We offer a variety of treatments including cleanings, fillings, and cosmetic dentistry.';
        }
        else if (latestUserMessage?.includes("appointment") || latestUserMessage?.includes("book")) {
          msg='You can book an appointment by calling us at (123) 456-7890.';
        }
        else if (latestUserMessage?.includes("insurance") || latestUserMessage?.includes("payment")) {
          msg='We accept most major insurance plans and also offer financing options.';
        }
         else if (latestUserMessage?.includes("contact") || latestUserMessage?.includes("phone")) {
          msg='You can reach us at (123) 456-7890 or email us at'}
        else{
          msg='Oops! I’m not sure what you mean. Can you explain a bit more?';
        }
        
      }
      else{
        msg='Hello! How can I help you?'
      }
      const botMessage: Message = {text: msg, type: MessageType.Bot};
      this.messages.push(botMessage);
      this.canSendMessage = true;
   }, 2000);
  }

  public onClickEnter(event: any): void {
    event.preventDefault();
    this.onClickSendMessage();
  }

  private scrollToBottom(): void {
    this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;         
  }
}



// setTimeout(() => {
//   this.messages.pop();
//   let botMessage: Message;
//   let str = '';
//   if(this.messages.length > 0){
//     str = this.messages[-1].text || '';
//     if (str.includes("start") || str.includes("open")) {
    
//       botMessage = {text: ' The Clinic Opens At 9 AM From Monday To Saturda', type: MessageType.Bot};
//     }
//     else{
//     botMessage = {text: 'Oops! I’m not sure what you mean. Can you explain a bit more?', type: MessageType.Bot};
//     }
//   this.messages.push(botMessage);
//   this.canSendMessage = true;

//   }
