import { Component, OnInit } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  title: string = 'Hello-App';
  message: string = 'data list';
  switch: string = 'one';

  constructor() {}

  // コンポーネントの初期化 → 初期値を設定
  ngOnInit(): void { }
  
  doSelect(val: string) {
    this.switch = val;
  }

}

