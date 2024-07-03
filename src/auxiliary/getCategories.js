export default function getCategories(details, categoriyIcons) {
  const formattedDetails = [];

  for (const key in details) {
    if (Object.prototype.hasOwnProperty.call(details, key)) {
      const value = details[key];
      if (value === 0 || value === "") {
        continue;
      }

      const iconMatch = categoriyIcons.find((icon) =>
        icon.iconId.toLowerCase().includes(key.toLowerCase())
      );

      if (iconMatch) {
        const iconObj = { ...iconMatch };
        if (typeof value === "number" && value > 1) {
          iconObj.title = `${value} ${iconMatch.title.toLowerCase()}s`;
        }
        if (typeof value === "string") {
          iconObj.title = `${value}`;
        }
        formattedDetails.push(iconObj);
      }
    }
  }

  return formattedDetails;
}
