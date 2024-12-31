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
  data: string[] = [
    '最初の項目',
    '2番目の項目',
    '最後の項目',
  ];

  constructor() {}

  // コンポーネントの初期化 → 初期値を設定
  ngOnInit(): void {}

  doClick() {
    this.visible = !this.visible;
  }

}

