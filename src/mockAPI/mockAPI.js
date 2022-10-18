const data = [
  {
    id: 1,
    title: "Air Jordan 1 Retro",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d775ebea-0bef-48b1-a3f1-9438d4db8bac/air-jordan-1-retro-high-og-zapatillas.png",
    price: 179.99,
    expired: true,
    detail: "Inspiradas en la equipación que llevó MJ!",
    stock: 10,
    category: "hombre",
  },
  {
    id: 2,
    title: "Nike Blazer Mid 77",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8992c10-41af-4da9-b2b7-2799e74a095d/blazer-mid-77-jumbo-zapatillas-5jqv6b.png",
    price: 109.99,
    expired: false,
    detail: "El diseño Swoosh extragrande y los cordones enormes!",
    stock: 8,
    category: "hombre",
  },
  {
    id: 3,
    title: "Air Jordan 1 Low",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0ae7e10a-8dca-4017-b9ed-edd2dc6276cd/air-jordan-1-low-zapatillas-NCzF6b.png",
    price: 119.99,
    expired: true,
    detail: "Logotipo Wings en el talón!",
    stock: 7,
    category: "mujer",
  },
  {
    id: 4,
    title: "Nike Air Uptempo",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1edeee9e-f68b-4ff5-bcd9-5d43aacb529f/air-more-uptempo-zapatillas-h6Zq5L.png",
    price: 95.97,
    expired: true,
    detail: "Con una parte superior inspirada en los grafitis de los 90!",
    stock: 10,
    category: "mujer",
  },
  {
    id: 5,
    title: "Nike Dunk High 85",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3ae39f3b-71e6-4c73-b768-869ac80810bd/dunk-high-85-undercover-zapatillas-r16H5S.png",
    price: 149.99,
    expired: false,
    detail: "Retro de las Dunk High!",
    stock: 8,
    category: "hombre",
  },
  {
    id: 6,
    title: "Nike Court Vision Low",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/235ac5d0-14fa-4372-a821-a4c0d95e5426/court-vision-low-next-nature-zapatillas-bZMv24.png",
    price: 74.99,
    expired: true,
    detail: "Look clásico del baloncesto de los 80!",
    stock: 7,
    category: "mujer",
  },
];

export function getCursos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
}

export function getUnCurso(idParams) {
  return new Promise((resolve) => {
    let cursoReq = data.find((item) => {
      return item.id === Number(idParams);
    });
    setTimeout(() => resolve(cursoReq), 1000);
  });
}

export function getCursosByCategory(idCategoryParams) {
  return new Promise((resolve) => {
    let arrayFilterCourses = data.filter(
      (item) => item.category === idCategoryParams
    );
    setTimeout(() => resolve(arrayFilterCourses), 1000);
  });
}
