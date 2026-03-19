import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const [visited, setVisited] = useState(false);
    console.log(handleVisitedCountries);

    const handleVisited = () => {
        setVisited(!visited);

        //or

        /*if(visited){
            setVisited(false);
        } else {
            setVisited(true);
        }*/

        //or

        //setVisited(visited ? false : true);
        handleVisitedCountries(country);

    }

    return (
        //<div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}>

        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.png} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? 'Big country' : 'Small country'}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not visited'}
            </button>
            <button onClick={() => {handleVisitedFlags(country?.flags?.flags?.png)}}>Add Visited Flags: </button>
        </div>
    );
};

export default Country;