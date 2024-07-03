const categoriyIcons = [
  { iconId: "cat-adults", title: "Adult", fill: true },
  { iconId: "cat-transmission", title: "Automatic", fill: false },
  { iconId: "cat-form", title: "Alcove", fill: false },
  { iconId: "cat-engine", title: "Petrol", fill: true },

  { iconId: "cat-kitchen", title: "Kitchen", fill: false },
  { iconId: "cat-beds", title: "Bed", fill: false },
  {
    iconId: "cat-airconditioner",
    title: "Conditioner",
    fill: false,
  },
  { iconId: "cat-cd", title: "CD", fill: false },

  { iconId: "cat-radio", title: "Radio", fill: false },
  { iconId: "cat-hob", title: "hob", fill: true },
  { iconId: "cat-toilet", title: "Toilet", fill: true },
  { iconId: "cat-shower", title: "Shower", fill: false },

  { iconId: "cat-freezer", title: "Freezer", fill: true },
  { iconId: "cat-gas", title: "Gas", fill: true },
  { iconId: "cat-water", title: "Water", fill: false },
  { iconId: "cat-microwave", title: "Microwave", fill: false },

  { iconId: "cat-tv", title: "TV", fill: false },
];

import getCategories from "./getCategories";

export default function getCategoryAllList(details) {
  return getCategories(details, categoriyIcons);
}
