

// 1.array of objects --> map(), return korbe. [property gulire nie r ekta jaegae rakhte cai.]

const products = [
    {
        name: 'laptop',
        price: 32000,
        brand: 'iphone',
        color: 'silver'
    },
    {
        name: 'phone',
        price: 3000,
        brand: 'lenovo',
        color: 'black',
    },
    {
        name: 'watch',
        price: 2000,
        brand: 'casio',
        color: 'yellow',
    },
    {
        name: 'sunglass',
        price: 22000,
        brand: 'canon',
        color: 'red',
    },
    {
        name: 'camera',
        price: 88000,
        brand: 'lg',
        color: 'yellow',
    },
    {
        name: 'kyboard',
        price: 290800,
        brand: 'logitech',
        color: 'gray',
    }

]

const brands = products.map(product => product.brand) //map() pura array of object theke property gulo nie ekta array[] banay dibe.
console.log(brands);
const prices = products.map(product => product.price)
console.log(prices);


// 2. For each loop - return kore na, kintu kaj kore.
products.forEach(product => console.log(product.color))
products.forEach(product => {
    // console.log(product.color)
})


// 3. filter() - array of objects theke condition onujayi kisu property gulo nie ekta array banay dibe.
const cheap = products.filter(product => product.price <= 5000)
console.log(cheap);

 // jader moddhe shudhu 'n' ache tarai dekhabe.
const SpecificName = products.filter(prdct=>prdct.name.includes('n'))
console.log(SpecificName);


// 4. find() - array of objects theke condition onujayi jegulo match korbe oigulo propertyr first letter nie  object banay dibe.
const special = products.find(p=>p.name.includes('n'))
console.log(special);