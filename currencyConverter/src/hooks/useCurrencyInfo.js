import { useEffect, useState } from "react";
// custom hook creation there is a standard that to use name (use) word like prefix in any react hooks name
function useCurrencyInfo(currency){  // for currency conversion using fetch api 
   
    const [data, setData] = useState({})
   
    useEffect(
        ()=>{ //most api response is in string form 
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res)=>(res.json()))
            .then((res)=>setData(res[currency]))
        },
        [currency] // when change in currency
    )

    console.log(data);
    return data;
}

export default useCurrencyInfo; // now this useCurrencyInfo is a custom hook 