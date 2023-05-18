import { Component } from '@angular/core';
import { MainFacade } from '@core/main-state';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private mainState: MainFacade) { }

  tabChanged(e: number) {
    console.log("called");
    console.log(e);
    this.mainState.updateActivePage(e)
  }
}
