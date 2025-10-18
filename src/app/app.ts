import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderContianer } from './shared/header-contianer/header-contianer';
import { Aside } from "./shared/aside/aside";
import { Home } from './home/home';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [HeaderContianer,Aside,Home,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
