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
  price: number = 0;

  constructor() { }
  
  // コンポーネントの初期化 → 初期値を設定
  ngOnInit(): void {
    this.title = 'Hello-App';
    this.message = 'This is a message';
    this.price = 12345;
  }
}

