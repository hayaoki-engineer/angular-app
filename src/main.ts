import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HelloComponent } from './app/hello/hello.component';

// HelloComponentをルートコンポーネントとしてアプリケーションを起動
bootstrapApplication(HelloComponent, appConfig)
  .catch((err) => console.error(err));
