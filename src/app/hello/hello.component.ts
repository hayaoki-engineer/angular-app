import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, TitleCasePipe],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  title = 'hello world';
  price = 0;
  date = new Date();

  updatePrice(newvalue: number) {
    this.price = (newvalue * 1.1);
  }

  // コンポーネントの初期化 → 初期値を設定
  ngOnInit(): void { }
  
}

