
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    //To show The flags --
    const [flags, setFlags] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));

    }, [])

    const handleVisitedCountry = (country_prameter) => { //s1
        console.log('add this to ypur visited country list', country_prameter); //s2
        const newVisitedCountries = [...visitedCountries, country_prameter];  //R1
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag_prameter => { 
        const newVisitedFlags = [...flags, flag_prameter];
        setFlags(newVisitedFlags);
    }

/* S
   --> 1. Amra prottek Mark Visited Button a click korle, Country gulo page a list akare show korte cai. er jonno handleVisitedCountry name ekta arrow function declear kora hoise.
   --> 2. er jonno, 2nd step holo, Coutries.jsx er vitor ekta massage likha jate eta console a ekta masg show korae.
   --> 3. 2nd step holo, handleVisitedCountry arrow function k props akare Country.jsx file a pathanor jonno ekat props creat kora.Country tag er vitor.(handleVisitedCountry_props)
   --> 4. Country.jsx file er main Country arrow function/Component er vitpor handleVisitedCountry_props function er props add kora. --> go to Country.jsx file
   --> 5. passWithParams name r ekta arrow function create korta , then er vitor handleVisitedCountry_props function call kora. function er paramenter hishebe country_props pass kora.
   --> 6. passWithParams function ta, Mark visited button a call kora hoise. onk rokom vabe call kora jae.
*/

/* ---visited country set korar jonno-- R
    --> koto gulo country visit korsi eta dekhar jonno spred operator use korte hobe, spreead operator ager visited coutry gulo k array banaia copy kore rakhe,
        then, setVisitedCountries(newVisitedCountries); er maddhome setVisitedCountries a newVisitedCountries array ta pass kore dite hobe.
    --> return er vitor visitedCountries.map() use kore {visitedCountry.name.common} coutry gulor obj die dite hobe.
*/



    return (

        <div>
            <h3>Countries: {countries.length}</h3>
        {/* Visited Coutries */}
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        // R2
                        visitedCountries.map(visitedCountry => 
                        <li key={visitedCountry.cca3}>
                        {visitedCountry.name.common}</li>)
                    }
                   
                </ul>
            </div>

            <div className="flag-container">
                {
                    flags.map(flag => <img src={flag} alt="" />)
                }

            </div>

            {/* Display Countries */}
            <div className="country-container">
            {
                countries.map(cntry => <Country key={cntry.cca3}
                     handleVisitedCountry_props={handleVisitedCountry}
                     handleVisitedFlags_props={handleVisitedFlags}
                      country_props={cntry}> </Country> )
            }
            </div>
          
        </div>
    );
};

export default Countries;

