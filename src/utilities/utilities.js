exports.addCategoryName = (categories) => {
  categories.forEach((category) => {
    category.name = category.slug.split("-").join(" ");
    category.name = category.name[0].toUpperCase() + category.name.substr(1);
  });
  return categories;
};
