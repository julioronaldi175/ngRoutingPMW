import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

}
