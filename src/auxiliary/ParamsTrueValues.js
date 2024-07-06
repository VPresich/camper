export default function ParamsTrueValues(obj) {
  const filteredObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "string" && obj[key].trim() !== "")
        filteredObj[key] = obj[key];
      if (typeof obj[key] === "boolean" && obj[key])
        filteredObj[key] = obj[key];
    }
  }
  return filteredObj;
}
