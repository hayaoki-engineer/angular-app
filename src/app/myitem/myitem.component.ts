import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-myitem',
  standalone: true,
  imports: [],
  templateUrl: './myitem.component.html',
  styleUrl: './myitem.component.css'
})
export class MyitemComponent {
  // 親コンポーネントからメッセージを受け取る
  @Input() message: string = '';
  // 親コンポーネントにメッセージを送信するためのイベント
  @Output() messageChange = new EventEmitter<string>();

  updateMessage(newMsg: string) {
    this.message = newMsg;
    this.messageChange.emit(this.message);
  }
}
