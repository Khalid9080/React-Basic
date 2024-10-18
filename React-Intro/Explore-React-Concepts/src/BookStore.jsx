//amra Book.jsx file ta import korsi , karon okhane kisu componenet ase ja ekhane use korte hobe.
import Book from './Book';

// Ei file take onno r ekta jsx file a use korte caile ekhan theke export deafult korte hobe.
export default function BookStore({boi}){
    return(
        <div>
            <h3>Books:{boi.length} </h3>
            {
                boi.map(bk=> <Book boi={bk}> </Book>)
            }
        </div>
    )
}

/* ------- point to be noted--------

--> App.jsx file theke books array of object ta k ekta variable boi er moddhe rakha hoisilo.
--> boi.lenght diye boi array er length ber kora hoise. or total koeyta object ase seta ber kora hoise.
--> boi.map() use kora hoise karon, map() array er shokol element k nie kaj kore kore. 
--> bk ekta variable , jetar mane hono boi array of object er prottek object k nie kaj korbe.
--> ki kaj korbe eitar jonno Book.jsx file ta import kora hoise. oi file er vitor dea ase Book:{boi.name}, Author:{boi.author} dekhate hobe. tai oitai return korbe.


*/