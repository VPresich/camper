export default function getCategories(details, categoryIcons) {
  const formattedDetails = [];

  for (const key in details) {
    if (Object.prototype.hasOwnProperty.call(details, key)) {
      const value = details[key];
      if (value === 0 || value === "") {
        continue;
      }

      const iconMatch = categoryIcons.find((icon) =>
        icon.iconId.toLowerCase().includes(key.toLowerCase())
      );

      if (iconMatch) {
        const iconObj = { ...iconMatch };
        if (iconObj.title) {
          if (typeof value === "number" && value > 1) {
            iconObj.title = `${value} ${iconMatch.title.toLowerCase()}s`;
          }
          if (typeof value === "string") {
            iconObj.title = `${value.charAt(0).toUpperCase() + value.slice(1)}`;
          }
        }
        formattedDetails.push(iconObj);
      }
    }
  }

  return formattedDetails;
}
