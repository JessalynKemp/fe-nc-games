exports.addCategoryName = (categories) => {
  categories.forEach((category) => {
    category.name = category.slug.split("-").join(" ");
    category.name = category.name[0].toUpperCase() + category.name.substr(1);
  });
  return categories;
};

exports.formatDateAndTime = (utcString) => {
  const date = new Date(utcString);
  const formattedDate = date.toLocaleDateString("en-GB");
  const formattedTime = date.toLocaleTimeString(["en-GB"], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return { formattedDate, formattedTime };
};
