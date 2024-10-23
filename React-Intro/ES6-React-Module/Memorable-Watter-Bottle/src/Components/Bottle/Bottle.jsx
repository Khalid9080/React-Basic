
import PropTypes from 'prop-types';
import './Bottle.css';
const Bottle = ({bottle_props,handleAddToCart_props}) => {
    const {name, img, price} = bottle_props;
    return (
        <div className="bottle">
            <h3>Bottle:  {name}</h3>
            <img src={img} alt=""/>
            <p>price: ${price}</p>
            <button onClick={()=>handleAddToCart_props(bottle_props)}>Add to cart</button>

        </div>
    );
};

Bottle.propTypes = {
    bottle_props: PropTypes.object.isRequired,
    handleAddToCart_props: PropTypes.func.isRequired
}

export default Bottle;