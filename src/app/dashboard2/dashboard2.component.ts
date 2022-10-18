import { Component, Renderer2, OnInit, AfterViewInit } from '@angular/core';

declare const $ : any;
declare const Plugin : any;

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit, AfterViewInit {

  constructor(private renderer:Renderer2) { }

  ngAfterViewInit(): void {
      this.renderer.removeClass(document.body, "login-page");
      this.renderer.removeClass(document.body, "sidebar-open");
      this.renderer.addClass(document.body, "sidebar-closed");

      $('[data-widget="treeview"]').treeview("init");
      Plugin.call($(this))
  }

  ngOnInit(): void {
  }

}
