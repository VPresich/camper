export default function createFilters(obj) {
  const filters = [];
  const keys = Object.keys(obj);
  if (keys.length === 0) return filters;

  for (const key of keys) {
    if (key === "automatic") {
      const filter = { transmission: "automatic" };
      filters.push(filter);
      continue;
    }
    if (key === "shower") {
      const filter1 = { shower: 0 };
      filters.push(filter1);
      const filter2 = { toilet: 0 };
      filters.push(filter2);
      continue;
    }
    if (key === "vehicle") {
      const filter = { form: obj[key] };
      filters.push(filter);
      continue;
    }
    if (obj[key] === true) {
      const filter = { [key]: 0 };
      filters.push(filter);
      continue;
    }
    if (typeof obj[key] === "string") {
      const filter = { [key]: obj[key] };
      filters.push(filter);
      continue;
    }
  }
  return filters;
}
