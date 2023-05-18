import { createAction, props } from "@ngrx/store";

export class MainActions {
    static activePageChanged = createAction('[Main] Active Page Change', props<{ page: number }>());
}
