import { faCog, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import {PAGE_URLS} from "../constants";
import { NavigationPage } from "../interfaces";

const DUMMY_PAGES: NavigationPage[] = [
  { linkTo: PAGE_URLS.home, icon: faHome },
  {
    linkTo: PAGE_URLS.messages,
    icon: faEnvelope,
  },
  {
    linkTo: PAGE_URLS.settings,
    icon: faCog,
  },
];

export default DUMMY_PAGES;
