import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';


@Pipe({
  name: 'myCustom',
  standalone: true,
})
export class MyCustomPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
  
@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [MyCustomPipe],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  title = 'hello-world';
  message = 'メッセージを入力してください';

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }

  // コンポーネントの初期化 → 初期値を設定
  ngOnInit(): void { }
  
}

