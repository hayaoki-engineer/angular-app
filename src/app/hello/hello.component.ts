import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  title: string = 'Hello-App';
  message: string = '';
  visible: boolean = true;
  data: any[] = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 28 },
  ];

  constructor() {}

  // コンポーネントの初期化 → 初期値を設定
  ngOnInit(): void {}

  doClick() {
    this.visible = !this.visible;
  }

}

