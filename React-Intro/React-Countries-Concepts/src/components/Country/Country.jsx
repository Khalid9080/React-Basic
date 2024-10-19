
import './Country.css';

const Country = ({country_props}) => {
    const {name,flags} =country_props;
    return (
        <div className='country'>
            <h4>Name : {name?.common}</h4>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;