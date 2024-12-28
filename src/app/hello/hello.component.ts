import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  title: string = '';
  message: string = 'you type: ';
  now: Date = new Date();
  styleClass: string = 'alert';
  count: number = 0;
  input: string = '';

  constructor() {
    setInterval(() => {
      // 1秒ごとにnowを更新
      // this.now = new Date();
      // スタイルクラスを更新
      // this.styleClass = this.styleClass === 'alert' ? 'card' : 'alert';
    }, 1000);
  }

  // コンポーネントの初期化 → 初期値を設定
  ngOnInit(): void {
    // this.title = 'Hello-App';
    // this.message = 'This is a message';
    // this.styleClass = 'alert';
  }

  // 現在時刻を取得するメソッド
  today() {
    return this.now.toLocaleString();
  }

  doClick() {
    this.message = ++this.count + '回クリックされました';
  }

  doType(val: string) {
    this.input = val;
    this.message = 'you type: ' + this.input;
  }
}

