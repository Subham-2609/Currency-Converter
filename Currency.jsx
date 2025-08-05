// import { useState, useEffect } from 'react'

// function useCurrencyInfo(Currency){
//   let [data,setData] = useState({})
//   useEffect(()=>{

//     fetch(`https://open.er-api.com/v6/latest/${Currency}`)
//     .then((res)=> res.json())
//     .then((res)=> setData(res[Currency]))
//     console.log(data)
//   }, [Currency])

//   return data
// }

// export default useCurrencyInfo;

import { useState, useEffect } from 'react';

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!baseCurrency) return;

    fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.rates) {
          setData(res.rates); // ✅ FIXED HERE
        } else {
          console.error("Invalid API response:", res);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;



