import PropTypes from 'prop-types'; // use for error handling

// Amra ekta cart add kore purchase kora product gulo show korabo.
import './Cart.css';
const Cart = ({ cart_props, handleRemovefromCart_props }) => {
    return (
        <div>
            <h4>Cart : {cart_props.length}</h4>
            <div className="cart-img">
                {
                    cart_props.map(bottle =>
                        <div key={bottle.id}>
                            <img src={bottle.img}></img>
                            <button onClick={() => handleRemovefromCart_props(bottle.id)}>Remove</button>
                        </div>)
                }

            </div>
        </div>
    );
};

// use for error handling
Cart.propTypes = {
    cart_props: PropTypes.array.isRequired,
    handleRemovefromCart_props: PropTypes.func.isRequired
}

export default Cart;
