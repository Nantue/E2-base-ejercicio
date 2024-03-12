const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a) Pizzas con ID impar
console.log("Pizzas con ID impar:");
pizzas.forEach((pizza) => {
  if (pizza.id % 2 === 1) {
    console.log(`${pizza.nombre} (ID: ${pizza.id})`);
  }
});

// b) ¿Hay alguna pizza que valga menos de $600?
const hayPizzaBarata = pizzas.some((pizza) => pizza.precio < 600);
console.log("\n¿Hay alguna pizza que valga menos de $600?");
console.log(hayPizzaBarata ? "Sí, hay pizzas económicas." : "No, todas las pizzas cuestan $600 o más.");

// c) Nombre de cada pizza con su respectivo precio
console.log("\nNombre de cada pizza con su respectivo precio:");
pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre}: $${pizza.precio}`);
});

// d) Ingredientes de cada pizza
console.log("\nIngredientes de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre}: ${pizza.ingredientes.join(", ")}`);
});