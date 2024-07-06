export function createQueryParams(obj) {
  const qeryParams = {};
  const keys = Object.keys(obj);
  if (keys.length === 0) return qeryParams;

  for (const key of keys) {
    if (key === "automatic") {
      qeryParams.transmission = "automatic";
      continue;
    }
    if (key === "shower") {
      qeryParams.shower = 1;
      qeryParams.toilet = 1;
      continue;
    }
    if (key === "vehicle") {
      qeryParams.form = obj[key];
      continue;
    }
    if (obj[key] === true) {
      qeryParams[key] = 1;
      continue;
    }
    if (typeof obj[key] === "string") {
      qeryParams[key] = obj[key];
      continue;
    }
  }
  return qeryParams;
}
