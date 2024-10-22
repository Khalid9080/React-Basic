import { useState } from 'react';
import './Country.css';
import CountryDetails from '../CountryDetail/CountryDetail';

const Country = ({ country_props, handleVisitedCountry_props, handleVisitedFlags_props }) => { //s4

    const { name, flags, population, area, cca3 } = country_props;
    // visit korsi ki korinai etar ekta flag thakbe, default flag thakbe false, visit korinai.

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited); // true o use kora jay.
    }




    /*
    evabe likha jae,
    const passWithParams = () => {
        handleVisitedCountry_props(country_props);
    or,
    const passWithParams = () =>handleVisitedCountry_props(country_props);

    **or,
      <button onClick={() =>handleVisitedCountry_props(country_props)}>Visited </button>
    }

    */

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>

            {/* Conditional CSS */}
            <h4 style={{ color: visited ? 'purple' : 'white' }}>Name : {name.common}</h4>
            <img src={flags.png} alt="" />
            <p>Populations : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>

            <button onClick={() => handleVisitedCountry_props(country_props)}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags_props(country_props.flags.png)}>Add Flag</button>

            <button onClick={handleVisited}>Visited </button>
            {visited && 'I have vsited this country.'}
            {/* visited ? 'I have vsited this country.' : 'I want to visit' */}

            <hr />

            {/* Prop_Drilling Theory --> 
            ekta props amara ektar por ekta componenet a use korbo.
            jemon - ({ country_props,handleVisitedCountry_props,handleVisitedFlags_props }) props gula Country.jsx file a pathano hoise.
            */}

            <CountryDetails
            new_country_props={country_props}
            new_handleVisitedCountry_props={handleVisitedCountry_props}
            new_handleVisitedFlags_props={handleVisitedFlags_props}
            >

            </CountryDetails>

        </div>
    );
};

export default Country;