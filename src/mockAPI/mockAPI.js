const data = [
  {
    id: 1,
    title: "Air Jordan 1 Retro",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d775ebea-0bef-48b1-a3f1-9438d4db8bac/air-jordan-1-retro-high-og-zapatillas.png",
    price: 179.99,
    expired: true,
    detail: "Inspiradas en la equipación que llevó MJ",
    stock: 10,
    category: "Zapatillas - Mujer",
  },
  {
    id: 2,
    title: "Nike Blazer Mid 77",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8992c10-41af-4da9-b2b7-2799e74a095d/blazer-mid-77-jumbo-zapatillas-5jqv6b.png",
    price: 109.99,
    expired: false,
    detail: "El diseño Swoosh extragrande y los cordones enormes ",
    stock: 8,
    category: "Zapatillas - Hombre",
  },
  {
    id: 3,
    title: "Air Jordan 1 Low",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0ae7e10a-8dca-4017-b9ed-edd2dc6276cd/air-jordan-1-low-zapatillas-NCzF6b.png",
    price: 119.99,
    expired: true,
    detail: "Logotipo Wings en el talón",
    stock: 7,
    category: "Zapatillas - Mujer",
  },
];

export function getCursos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000);
  });
}
