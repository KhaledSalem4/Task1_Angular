import { Component } from '@angular/core';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-header-contianer',
  imports: [Header,Navbar],
  templateUrl: './header-contianer.html',
  styleUrl: './header-contianer.css'
})
export class HeaderContianer {

}
