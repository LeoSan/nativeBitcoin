import React from 'react'; 
import {Text, StyleSheet, Platform, View} from 'react-native';


const Formulario = () => {
    return(
           <View>
               <Text style={styles.label}>Moneda</Text>
               <Text style={styles.label}>Tipos Crip</Text>
           </View>        
    );
};


//Aqui los estilos que vamos a usar 
const styles = StyleSheet.create({
 label:{
     //fontFamily:'Arial', 
     textTransform: 'uppercase',
     fontSize:22,
     marginVertical:20, 
       
 }

})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

export default Formulario; 