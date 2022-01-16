import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CallSelectionFormComponent } from '../call-selection-form/call-selection-form.component';

@Component({
  selector: 'app-manager-toolbar',
  templateUrl: './manager-toolbar.component.html',
  styleUrls: ['./manager-toolbar.component.scss']
})
export class ManagerToolbarComponent implements OnInit, OnDestroy {

  selectedCallId: string
  routerSub: Subscription

  @ViewChild('callSelectionFormComponent') callForm: CallSelectionFormComponent

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.routerSub = this.router.events.subscribe((event: NavigationStart) => {

    }
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe()
  }

}
