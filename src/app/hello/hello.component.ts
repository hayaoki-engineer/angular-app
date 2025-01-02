import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  title = 'Hello World';
  message = 'Hello, Angular!';
  isTemplateVisible = true;
  count: number[] = [];
  msg1 = 'First Message';
  msg2 = 'Second Message'

  showTemplate() {
    this.isTemplateVisible = !this.isTemplateVisible;
  }

  countUp(n: number) {
    // 配列の要素が未定義の場合は0を代入
    if (this.count[n] === undefined) {
      this.count[n] = 0;
    }
    // 配列の要素をインクリメント
    this.count[n]++;
  }

  // コンポーネントの初期化 → 初期値を設定
  ngOnInit(): void { }
  
}

