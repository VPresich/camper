const categoriyIcons = [
  { iconId: "cat-adults", fill: true },
  { iconId: "cat-kitchen", fill: false },
  { iconId: "cat-beds", fill: false },
  { iconId: "cat-airconditioner", fill: false },
  { iconId: "cat-toilet", fill: true },
  { iconId: "cat-shower", fill: false },
  { iconId: "cat-freezer", fill: true },
  { iconId: "cat-gas", fill: true },
  { iconId: "cat-water", fill: false },
  { iconId: "cat-microwave", fill: false },
  { iconId: "cat-tv", fill: false },
];

import getCategories from "./getCategories";

export default function getCategoryFavorites(details) {
  return getCategories(details, categoriyIcons);
}
