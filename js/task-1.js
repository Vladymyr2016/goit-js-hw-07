const arr = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${arr.length}`);

arr.forEach((elem) => {
  const categoryTitle = elem.querySelector("h2").textContent;

  console.log(`Category: ${categoryTitle}`);

  const categoryItemsCount = elem.querySelectorAll("ul > li").length;
  console.log(`Elements: ${categoryItemsCount}`);
});
