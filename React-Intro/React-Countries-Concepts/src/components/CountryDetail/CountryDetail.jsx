
 import CountryData from "../CountryData/CountryData";

const CountryDetails = ({new_country_props,new_handleVisitedCountry_props,new_handleVisitedFlags_props}) => {
    return (
        <div>
            <h4>Country Details:</h4>
            
            <hr />
            <CountryData
            new_country_props={new_country_props}
            new_handleVisitedCountry_props={new_handleVisitedCountry_props}
            new_handleVisitedFlags_props={new_handleVisitedFlags_props}
            ></CountryData>


        </div>
    );
};

export default CountryDetails;