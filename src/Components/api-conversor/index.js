import React, { useState, useEffect } from 'react';


const ConversorMonedas = () => {
    const [ conversor, setConversor] = useState({});

    useEffect(()=>{
       consultarApi();
    },[]);


  const consultarApi = async () => {  
    // const respuesta = await fetch('https://free.currconv.com/api/v7/convert?q=USD_ARS,EUR_ARS&compact=ultra&apiKey=f9b32090ff7f133a5aed')
      const respuesta = await fetch(`http://apilayer.net/api/live?access_key=654ea1405523915dc066fae847294ccf&currencies=EUR,GBP,CAD,ARS,BRL,PLN&source=USD`)
      const resultado = await respuesta.json();
    //   console.log(resultado);
    //   setConversor(resultado);
      console.log(resultado.quotes);
      setConversor(resultado.quotes);
  }
  console.log('conversor', conversor);
       
    // const   resultadoConversor1  =  conversor.EUR_ARS  
    // const   resultadoConversor2  =  conversor.USD_ARS
    const   resultadoConversor1  =  conversor.USDEUR  
    const   resultadoConversor2  =  conversor.USDCAD
    const   resultadoConversor3  =  conversor.USDGBP
    const   resultadoConversor4  =  conversor.USDPLN
    const   resultadoConversor5  =  conversor.USDARS
    const   resultadoConversor6  =  conversor.USDBRL

    return(
        <>
            <h1>conversor de Monedas</h1>

        <div  className='text-center border border-dark '>
           {/* <h5>EURO: {resultadoConversor1} </h5>
           <h5>DOLAR : { resultadoConversor2}</h5>  */}
           <h5> USDEUR: {resultadoConversor1} </h5>
           <h5> USDCAD: { resultadoConversor2}</h5> 
           <h5> USDGBP: { resultadoConversor3}</h5> 
           <h5> USDPLN: { resultadoConversor4}</h5> 
           <h5> USDARS: { resultadoConversor5}</h5> 
           <h5> USDBRL: { resultadoConversor6}</h5> 
        </div>

         

        </>
    )
}

export default ConversorMonedas;

 // var miInit = { method: 'GET',
    //            mode: 'no-cors',
    //            cache: 'default' };
    // https:
    


//   api.exchangeratesapi.io/latest
//   http://apilayer.net/api/live?access_key=654ea1405523915dc066fae847294ccf&currencies=EUR,GBP,CAD,PLN&source=USD&format=1
//   http://api.currencylayer.com/live?access_key=654ea1405523915dc066fae847294ccf
//   https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=269801bf3966516da2f7
//   https://openexchangerates.org/api/latest.json?app_id=9cf58f0d6b1443e7b4dad7c2be6e1104
//   https://api.cambio.today/v1/full/EUR/json?key=4913|BcUKT7DBSm7n7oROr3h~586ArBbpN^qd
// https:
//free.currconv.com/api/v7/convert?q=${querrySet}&compact=ultra&apiKey=${apiKey}
 
// https:
//free.currconv.com/api/v7/convert?q=$%7BquerrySet%7D&compact=ultra&apiKey=f9b32090ff7f133a5aed

// https : 
//api.currencylayer.com/ convert ? from = EUR & to = GBP & amount = 100