

const Watch = ({watch_props}) => {
    const {name, price} = watch_props;
    return (
        <div>
            <h2>Watch: {name}</h2>
            <p>Price:{price}</p>
        </div>
    );
};

export default Watch;