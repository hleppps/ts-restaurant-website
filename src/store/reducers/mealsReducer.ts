import { stat } from "fs";
import { getMealById } from "../../data/dummyMeals";
import { MealProps } from "../../interfaces";
import {
  TAddSelectedMealAction,
  TRemoveSelectedMealAction,
} from "../actions/mealsActions";
import { ADD_SELECTED_MEAL, REMOVE_SELECTED_MEAL } from "../types/mealsTypes";

interface InitialState {
  selectedMeals: MealProps[];
}

const INITIAL_STATE: InitialState = {
  selectedMeals: [],
};

type Actions = TAddSelectedMealAction | TRemoveSelectedMealAction;

const mealsReducer = (state = INITIAL_STATE, action: Actions): InitialState => {
  switch (action.type) {
    case ADD_SELECTED_MEAL:
      return reduceAddSelectedMealAction(state, action);

    case REMOVE_SELECTED_MEAL:
      return reduceRemoveSelectedMealAction(state, action);

    default:
      return { ...state };
  }
};

const reduceAddSelectedMealAction = (
  state: InitialState,
  action: TAddSelectedMealAction
) => {
  let selectedMeal = getMealById(action.payload.mealId);
  let selectedMeals = state.selectedMeals
  let foundMeal: MealProps | undefined
  let quantity = 1

  if (state.selectedMeals.length !== 0) {
    foundMeal = state.selectedMeals.find(
      (meal) => meal.id === action.payload.mealId
    );
  }

  if (foundMeal) {
    selectedMeal = foundMeal;
    quantity = ++foundMeal.quantity!
    selectedMeals = state.selectedMeals.filter(
      (meal) => meal.id !== action.payload.mealId
    );
  }

  const newSelectedMeal: MealProps = {...selectedMeal, quantity} 

  return {
    ...state,
    selectedMeals: [newSelectedMeal, ...selectedMeals],
  };
};

const reduceRemoveSelectedMealAction = (
  state: InitialState,
  action: TRemoveSelectedMealAction
) => {
  const newSelectedMeals = state.selectedMeals.filter(
    (meal) => meal.id !== action.payload.mealId
  );

  return {
    ...state,
    selectedMeals: newSelectedMeals,
  };
};

export default mealsReducer;
