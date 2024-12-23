import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent implements OnInit {
  title: string = '';
  message: string = '';
  // 現在時刻を保持する
  now: Date = new Date();

  constructor() {
    setInterval(() => {
      // 1秒ごとにnowを更新
      this.now = new Date();
    }, 1000);
  }
  
  // コンポーネントの初期化 → 初期値を設定
  ngOnInit(): void {
    this.title = 'Hello-App';
    this.message = 'This is a message';
  }

  // 現在時刻を取得するメソッド
  today() {
    return this.now.toLocaleDateString();
  }
}

