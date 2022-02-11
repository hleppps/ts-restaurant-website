import { Action, createAction } from ".";
import { ADD_SELECTED_MEAL, REMOVE_SELECTED_MEAL } from "../types/mealsTypes";

export type TAddSelectedMealAction = Action<
  typeof ADD_SELECTED_MEAL,
  { mealId: string }
>;
export type TRemoveSelectedMealAction = Action<
  typeof REMOVE_SELECTED_MEAL,
  { mealId: string }
>;

export const addSelectedMealAction = (
  mealId: string
): TAddSelectedMealAction => {
  return createAction(ADD_SELECTED_MEAL, { mealId });
};

export const removeSelectedMealAction = (
  mealId: string
): TRemoveSelectedMealAction => {
  return createAction(REMOVE_SELECTED_MEAL, { mealId });
};
