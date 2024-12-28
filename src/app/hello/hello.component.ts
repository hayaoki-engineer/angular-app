import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent implements OnInit {
  // タイトルを保持する
  title: string = '';
  // メッセージを保持する
  message: string = 'ボタンをクリック';
  // 現在時刻を保持する
  now: Date = new Date();
  // スタイルクラスを保持する
  styleClass: string = 'alert';
  // クリック回数を保持する
  count: number = 0;

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
    // タイトルを設定 
    this.title = 'Hello-App';
    // メッセージを設定
    this.message = 'This is a message';
    // スタイルクラスを設定
    this.styleClass = 'alert';
  }

  // 現在時刻を取得するメソッド
  today() {
    return this.now.toLocaleString();
  }

  doClick() {
    this.message = ++this.count + '回クリックされました';
  }
}

