
import React,  {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './componets/Header';
import Formulario from './componets/Formulario';
import axios from 'axios';


export default function App() {

    //Generamos nuestros useSate
    const [moneda,    setMoneda] = useState('');    
    const [cripto,    setCripto] = useState('');  
    const [consultarAPI,  setConsultarAPI] = useState(false);  


    useEffect(()=>{
      
     const cotizarValor = async ()=>{

          if (consultarAPI === true ){
            console.log('Listo para consultar');

            const url       = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
            const resultado = await axios.get(url);

            console.log(resultado.data.DISPLAY);

          }      

          
     }
     cotizarValor();

    }, [consultarAPI])  

  return (
    <>
        <Header />
        <Image  
            style={styles.imagen}
            source={require('./assets/img/cryptomonedas.png')}
        />

        <View  style={styles.contenido}>
            <Formulario
                moneda    =   {moneda}
                cripto    =   {cripto}
                setMoneda =   {setMoneda}
                setCripto =   {setCripto}
                setConsultarAPI =   {setConsultarAPI}

            />
        </View>
    </>

  );
}

const styles = StyleSheet.create({
  imagen: {
    width:'100%',
    height:150,
    marginHorizontal:'2.5%',

  },
  contenido:{
     marginHorizontal:'2.5%',
  }
});
