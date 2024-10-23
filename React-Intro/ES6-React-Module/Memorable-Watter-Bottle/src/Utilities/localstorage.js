
// System 1: Jokoni product cart a add korbo tokoni oi product ta local a storage a save korbo.
//  jodi cart local storage a thake tahole eta,  json.stringify akare ase 
// etake json.parse() kore object a convert kore use korte hobe ekhane.
const getStoredCard=()=>{
   const storedCardString=localStorage.getItem('cart');
   if(storedCardString){
    return JSON.parse(storedCardString);
   }
   return [];
}

const saveCarttoLS=cart=>{
    const cartStringify=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify);

}

// kono product k cart a add korle oi product ta local storage a save korbe
const addToLS = id =>{  // `id` is the product id
    const cart = getStoredCard();
    // cart hocche normal variable , r getStoredCard() er vitor jodi kisu thake sheta array of obj akare thkbe,
    // kisu na thkle empty array akare thkbe.
    // array te kisu add korar jonno push() use kora jabe
    cart.push(id);   
    saveCarttoLS(cart);

    //save to local storage
 }

 // Cart theke product remove korara jonno -- 
 const removeFormLS=id=>{
     const cart=getStoredCard();
     // selected id bade baki cart gulo show korbo.
     //(productId!==id) etar mane shob  productId theke id bad diye baki gulo neawa.
     const newCart=cart.filter(productId=>productId!==id); 
     saveCarttoLS(newCart);
 }


 

 export {addToLS, getStoredCard,removeFormLS};