import {Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Config } from './shared/config/env.config';
import { Subscription } from 'rxjs/Subscription';

import { ToolbarSidebarService } from './shared/toolbar-sidebar-service/toolbar.sidebar.service';

import './operators';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  @ViewChild('start') sidenav: any;

  constructor(private toolbarSidebarService: ToolbarSidebarService) {
    console.log('Environment config', Config);
  }

  ngOnInit() {
    this.subscription = this.toolbarSidebarService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'toggle') {
        this.sidenav.toggle();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
