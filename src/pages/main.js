import React, { Component } from 'react';
import {View,Text,TouchableOpacity,Button} from 'react-native';
import axios from 'axios';


const Main = ({navigation}) => (      
        
    
            <View style={{flex:1}}>
            <View 
            style={{backgroundColor:'#da552f',
            marginTop:5,
            marginLeft:5,
            marginRight:5,
            alignItems:"center",
           
            }}
            >
                <TouchableOpacity onPress={()=>{
                 navigation.navigate('Graficos');
             }}>
               <Text 
               style={{padding:20,color:'#FFF'}}
               >
                   Geladeira
               </Text>
               </TouchableOpacity>
            </View>
            
            <View>
                <Button 
                title='Ligar'
                onPress={()=> Interruption()}
                />
                
            </View>
            </View>
        );
    
        Main.navigationOptions = {
            title: 'Equipamentos',
        }
    

    Interruption = () => {
    
    axios.get('https://api.thingspeak.com/channels/862705/fields/1/last.json').then(function(responce){
        ligado(responce.data.field1) 

    });

    function ligado(dado){
       if(dado!=1){
            dado = 1;
             console.log(dado);

             axios.get(`https://api.thingspeak.com/update.json?api_key=VXO7SNNTUD4ELF58&field1=1`);
        }else{
          dado = 0;
          console.log(dado);
          axios.get(`https://api.thingspeak.com/update.json?api_key=VXO7SNNTUD4ELF58&field1=0`);
       }
    }
   
    }


export default Main;