import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { MainStateModel } from './main.state.model';

export const MAIN_FEATURE_KEY = "main";

export interface mainState extends EntityState<MainStateModel> {
    activeTabNumber: number;
}


export const mainAdapter: EntityAdapter<MainStateModel> = createEntityAdapter<MainStateModel>();

export const initialState: mainState = mainAdapter.getInitialState({
    activeTabNumber: 0
});

export interface mainPartialState {
    [MAIN_FEATURE_KEY]: "main"
}