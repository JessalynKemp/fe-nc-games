exports.addCategoryName = (categories) => {
  categories.forEach((category) => {
    category.name = category.slug.split("-").join(" ");
  });
  return categories;
};
