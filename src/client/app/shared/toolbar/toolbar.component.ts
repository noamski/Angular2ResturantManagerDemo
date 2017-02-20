import {Component, OnInit, OnDestroy} from '@angular/core';

import { ToolbarSidebarService } from '../toolbar-sidebar-service/toolbar.sidebar.service';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private  toolbarSidebarService: ToolbarSidebarService ) {
  }

  public toggleSidebar() {
    this.toolbarSidebarService.notifyOther({option: 'toggle'});
  }
}

