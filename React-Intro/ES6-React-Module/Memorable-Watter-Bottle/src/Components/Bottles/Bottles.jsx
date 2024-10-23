
// 1. bottles.json er data gulo load kore ekhane dekhte cai


import Bottle from "../Bottle/Bottle";
import { useEffect } from "react";
import { useState } from "react";
import './Bottles.css';
import { addToLS, getStoredCard,removeFormLS } from "../../Utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    // 2. 1st state use korbo jeta data load korar jonno use korbo
    const [bottles, setBottles] = useState([]);
    // 5. cart a add korar por amra bottke gular jonno state decleare korbo
    const [cart, setCart] = useState([]);

    // 3. data load korar jonno useEffect hook use korbo
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))

    }, []);

    // 11. NEXT STEP: local Storage er cart a add hoa product guli k nie ene, brwoser a show kore rakhte hobe.
    // --> but ei kaj ta amdr korai ase, amra getStoredCart() function use korsi. etare export korte hobe 

    // 12. Bottles er data gulo k load korar jonno amara r ekta useEffect hook use korbo
    useEffect(() => {
        // 13. browser er console a gele amra id gulo pabo, akhon kaj hocche id gulo dhore prodct gulo k khuje ber korte hobe. Then sopping cart a set korte hobe.
        console.log('Call the useEffect', bottles.length);

        // 15. botles er length 0 theke oro hoilei store kora shuru korbe.
        if (bottles.length > 0) {
            const storedCart = getStoredCard(); //localstorage.js theke cart guli load korlam
            //console.log(storedCart, bottles); // PTN: storedCart a id gulo array akare ase.

            // 16. protteke id dhore , id onushare cart a product add korbo
            // --> id gulo jehutu array amra (for of loop) use kore kaj korbo

            // 18. cart a add korar jonno ekta empty array decleare korlam
            const savedCart=[]; 
            for (const id of storedCart) {
                console.log(id);

                // 17. etar maddhome j id gulo cart a add kora hoise oigulo pawa jabe.
                // --> akhon bottles er data gulo theke ei id die product gulo match kore khuje ber korbo
                const matchedProduct = bottles.find(match_bottle => match_bottle.id === id);

                if(matchedProduct){
                    // 19. matchedProduct gulo savedCart a add korbo
                    savedCart.push(matchedProduct)
                }

            }
            // 20. savedCart a add korar jonno setCart array k call korbo
            console.log('Saved Cart',savedCart);
            // 21. lastly acrd a set korbo
            setCart(savedCart);
        }

        // 14. amra ekta dependency decleare korte hobe jate kore, jokon bottles er length change hobe tokon ei useEffect ta run hobe
    }, [bottles]);


    // 4. ekta event handler use korbo jeta maddhome bottle gulo cart a add korte parbo
    // --> handleAddToCart function ekta function hishebe jabe Bottle.jsx a 
    const handleAddToCart = (bottle_param) => {

        // 6.  state a card guli decleare korar jonno, direct push() use kora jabe na.
        // --> Spread operator (... ) use kore ager cart ta copy kore nite hobe
        // --> tarpor new cart a new bottle ta add korte hobe

        const newCart = [...cart, bottle_param];  // cart a new bottle add korlam
        // 7. cart a new bottle add korlam
        setCart(newCart);

        // 10. local storage a add korar jonno addToLS function call korbo
        addToLS(bottle_param.id);
    }

    // TO EMOVE PRODUCT FOM CART---
    //  Two ways to remove - 1. Vsiual Cart Remove
    //                       2. Remove from Local Storage

    // 1. id dhore remove korte cai
    // local storage theke remove korte cai
    const handleRemovefromCart=id=>{ 
        const newcart=cart.filter(bottle=>bottle.id!==id);
        setCart(newcart);
        removeFormLS(id); 
    }

    return (
        <div>
            <h2>Bottles Available:  {bottles.length}</h2>
            {/* 8. Display Cart product count */}
           <Cart cart_props={cart}
                 handleRemovefromCart_props={handleRemovefromCart}
                ></Cart>

            {/* 
            --> 9. Display Cart product show korbe but refresh dile haray jabe.
            --> To store cart data in we use
                    - data base
                    - Browser
                          - local storage - amra ei kaje use korbo. er jonno utilities file create korbo
                          - session storage
                          - cookies
                          - indexDB


            
            */}


            <div className="bottle-container">

                {
                    bottles.map(btl =>
                        <Bottle
                            key={btl.id}
                            bottle_props={btl}
                            handleAddToCart_props={handleAddToCart}
                            
                        ></Bottle>)
                }

            </div>

        </div>
    );
};

export default Bottles;