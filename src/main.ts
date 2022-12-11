import "./input.css";
import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;
  itemEntryForm.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
  });
  const clearItems = document.getElementById("clearItems") as HTMLButtonElement;
  clearItems.addEventListener("click", () => { });
};

document.addEventListener("DOMContentLoaded", initApp);
