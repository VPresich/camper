const categoriyIcons = [
  { iconId: "cat-adults", title: "Adult", fill: true },
  { iconId: "cat-transmission", title: "Automatic", fill: false },
  { iconId: "cat-engine", title: "Petrol", fill: true },

  { iconId: "cat-kitchen", title: "Kitchen", fill: false },
  { iconId: "cat-beds", title: "Bed", fill: false },
  { iconId: "cat-form", title: "Alcove", fill: false },
];

import getCategories from "./getCategories";

export default function getCategoryShortList(details) {
  return getCategories(details, categoriyIcons);
}
