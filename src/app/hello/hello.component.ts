import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  title: string = 'Hello-App';
  message: string = '';
  visible: boolean = true;

  constructor() {}

  // コンポーネントの初期化 → 初期値を設定
  ngOnInit(): void {}

  doClick() {
    this.visible = !this.visible;
  }

}

