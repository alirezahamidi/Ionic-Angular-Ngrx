import { Component, Input } from '@angular/core';
import { MainFacade } from '@core/main-state';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  activePage$ = this.mainState.activePage$;

  constructor(private mainState: MainFacade) { }
  @Input() name?: string;

}
