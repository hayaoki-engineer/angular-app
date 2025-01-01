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
  count: number = 0;

  showTemplate() {
    this.isTemplateVisible = !this.isTemplateVisible;
  }

  countUp() {
    this.count++;
  }

  // コンポーネントの初期化 → 初期値を設定
  ngOnInit(): void { }
  
}

