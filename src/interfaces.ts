import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { PAGE_URLS } from "./constants";

export interface MealProps {
  id: string;
  title: string;
  price: number;
  imageUrl?: string;
  availability?: number;
  quantity?: number;
}

export interface NavigationPage {
  linkTo: string;
  icon: IconDefinition;
}
