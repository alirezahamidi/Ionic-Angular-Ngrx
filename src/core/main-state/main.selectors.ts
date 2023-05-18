import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MAIN_FEATURE_KEY, mainState, mainAdapter } from "./main.entity";
const { selectAll } = mainAdapter.getSelectors();

export class MainSelectors {
    static featureSelector = createFeatureSelector<mainState>(MAIN_FEATURE_KEY);

    static activePage = createSelector(MainSelectors.featureSelector, (state) => state.activeTabNumber);
}