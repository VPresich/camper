export default function filterObjectByTrueValues(obj) {
  const filteredObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (Boolean(obj[key]) === true) {
        filteredObj[key] = obj[key];
      }
    }
  }
  return filteredObj;
}
