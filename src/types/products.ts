const products = [
    {
        id : 1,
        code : "modernchair",
        name : "Modern Chair"  ,
        image : "product1.png",
        price : 249,
        isNew : true,
        type : "chair"
    },
    {
        id : 2,
        code : "elegantlamp",
        name : "Elegant Lamp"  ,
        image : "product2.png",
        price : 129,
        isNew : false,
        type : "lamp"
    },
    {
        id : 3,
        code : "blackchair",
        name : "Black Chair",
        image : "product3.png",
        price : 199,
        isNew : false,
        type : "chair"
    },
    {
        id : 4,
        code : "lisbonsofa",
        name : "Lisbon Sofa",
        image : "product4.png",
        price : 1699,
        isNew : false,
        type : "sofa"
    },
    {
        id : 5,
        code : "retrochair",
        name : "Retro Chair",
        image : "product5.png",
        price : 399,
        isNew : false,
        type : "chair"
    },
    {
        id : 6,
        code : "cushionchair",
        name : "Cushion Chair",
        image : "product6.png",
        price : 199,
        isNew : false,
        type : "chair"
    },
    {
        id : 7,
        code : "woodenstool",
        name : "Wooden Stool",
        image : "product7.png",
        price : 99,
        isNew : false,
        type : "chair"
    },
    {
        id : 8,
        code : "oakwoodbench",
        name : "Oakwood Bench",
        image : "product8.png",
        price : 119,
        isNew : false,
        type : "chair"
    },
    {
        id : 9,
        code : "bluechair",
        name : "Blue Chair",
        image : "product9.png",
        price : 229,
        isNew : false,
        type : "chair"
    },
    {
        id : 10,
        code : "darkwoodchair",
        name : "Darkwood Chair",
        image : "product10.png",
        price : 149,
        isNew : false,
        type : "chair"
    },
    {
        id : 11,
        code : "caskettable",
        name : "Casket Table",
        image : "product11.png",
        price : 99,
        isNew : false,
        type : "table"
    },
    {
        id : 12,
        code : "modernhanger",
        name : "Modern Hanger",
        image : "product12.png",
        price : 199,
        isNew : false,
        type : "hanger"
    },
    {
        id : 13,
        code : "lightwoodstool",
        name : "Lightwood Stool",
        image : "product13.png",
        price : 129,
        isNew : false,
        type : "chair"
    },
    {
        id : 14,
        code : "oslosofa",
        name : "Oslo Sofa",
        image : "product14.png",
        price : 599,
        isNew : false,
        type : "sofa"
    },
    {
        id : 15,
        code : "porcelainchair",
        name : "Porcelain Chair",
        image : "product15.png",
        price : 299,
        isNew : false,
        type : "chair"
    },
    {
        id : 16,
        code : "modernmounted",
        name : "Modern Mounted",
        image : "product16.png",
        price : 499,
        isNew : false,
        type : "table"
    }
]

export function getProducts () {
    return products;
} 
export function getProductById (id : number) {
    return products.find((item) => item.id === id);
} 
export function getProductsByType (type : string | null) {
    if(!type) return products
    return products.filter((item) => item.type === type);
} 
export function getProductsByCode (code : string) {
    return products.find((item) => item.code === code);
} 