const products = [
    {
        id: "verano1",
        name: "Body estrellas",
        price: 15000,
        description: "Body estampado de algodón y lycra con cuello estilo americano.",
        stock: 10,
        image: "/img/Verano1.jpg",
        category: "verano",
    },

    {
        id: "verano2",
        name: "Shorts",
        price: 8000,
        description: "Short de gabardina estampada. Super amplios y cómodos.",
        stock: 10,
        image: "/img/Verano2.jpg",
        category: "verano",
    },

    {
        id: "verano3",
        name: "Conjunto Peque",
        price: 15000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/Verano3.jpg",
        category: "verano",
    },
    {
        id: "verano4",
        name: "Remera Cangrejo",
        price: 7000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/Verano4.jpg",
        category: "verano",
    },

    {
        id: "BuzoAnimales",
        name: "Buzo Animales",
        price: 15000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/1.jpg",
        category: "invierno",
    },
 
    {
        id: "BuzoAnimales2",
        name: "Buzo Animales B&N",
        price: 15000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/2.jpg",
        category: "invierno",
    },

    {
        id: "BuzoCombinado",
        name: "Buzo combinado",
        price: 15000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/3.jpg",
        category: "nuevo",
    }, 

    {
        id: "BuzoCombinado2",
        name: "Buzo Combinado Tenns",
        price: 15000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/4.jpg",
        category: "nuevo",
    }, 
    {
        id: "BuzoRosa",
        name: "Buzo Pinks",
        price: 15000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/5.jpg",
        category: "liquidacion",
    }, 
    {
        id: "BuzoSnopy",
        name: "Buzo Snopy",
        price: 20000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/6.jpg",
        category: "liquidacion",
    }, 

    {
        id: "Invierno1",
        name: "Campera de lana",
        price: 15000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/Invierno1.jpg",
        category: "invierno",
    },
    
    {
        id: "Invierno2",
        name: "Pantalones de lana",
        price: 10000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/Invierno2.jpg",
        category: "invierno",
    },
    
    {
        id: "Invierno3",
        name: "Jardinero de lana",
        price: 17000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/Invierno3.jpg",
        category: "invierno",
    },

    {
        id: "Invierno4",
        name: "Campera Pony",
        price: 20000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/invierno4.jpg",
        category: "invierno",
    },
    
    {
        id: "Liquidacion1",
        name: "Conjunto",
        price: 8000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/Liqui1.jpg",
        category: "liquidacion",
    },
    
    {
        id: "Liquidacion2",
        name: "Body cebra",
        price: 8000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/Liqui2.jpg",
        category: "liquidacion",
    },

    {
        id: "Nuevo1",
        name: "Camisa cuadritos",
        price: 18000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/Nuevo1.jpg",
        category: "nuevo",
    },
    
    {
        id: "Nuevo2",
        name: "Pantalon acuadros",
        price: 18000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/Nuevo2.jpg",
        category: "nuevo",
    },
    
    {
        id: "Nuevo3",
        name: "Vestido Tere",
        price: 28000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
        stock: 10,
        image: "/img/Nuevo3.jpg",
        category: "nuevo",
    },
]

const getProducts = () => {
    return new Promise( (resolve, reject) => {
      
      setTimeout(()=>{
        resolve(products)
      }, 1000)
    })
  }
  
  export { getProducts }