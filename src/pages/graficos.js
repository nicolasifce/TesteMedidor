import React, { Component } from 'react';
import {View,Text,Button,ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';
import Form from '../controles/formularioG';
import axios from 'axios';



export default class Graficos extends Component{
 

        state = {
            diaI: '', mesI: '',anoI:'',

            diaF:'',mesF:'',anoF:'',

            media1 :'',media2:'',media3:'',

            minimo1:'',minimo2:'',minimo3:'',

            maximo1:'',maximo2:'',maximo3:'',
        }

        setData = async(diaI,mesI,anoI,diaF,mesF,anoF)=>{
           
            
            this.setState({diaI})
            this.setState({mesI})
            this.setState({anoI})

            this.setState({diaF})
            this.setState({mesF})
            this.setState({anoF})
            await this.Dados();
           

        }

        Dados = async()=>{
            await this.Media()
            await this.Minimo()
            await this.Maximo()
        }
        

        Media = async () =>{
            for(j=1;j<4;j++){
            let res = await axios.get(`https://api.thingspeak.com/channels/859902/fields/${j}.json?start=${this.state.anoI}-${this.state.mesI}-${this.state.diaI}%2000:00:00&end=${this.state.anoF}-${this.state.mesF}-${this.state.diaF}%2000:00:00&average=60`)
            let {feeds} = res.data
            let valor = 0
            for(i=1;i<feeds.length;i++){
                if(feeds[i]['field'+j]!=null){
                    valor = feeds[i]['field'+j]
                }
            }
            this.setState({['media'+j] : valor})
            }
        }
        
        Minimo = async () => {
           for(j=1;j<4;j++)
            { let res = await axios.get(`https://api.thingspeak.com/channels/859902/fields/${j}.json?start=${this.state.anoI}-${this.state.mesI}-${this.state.diaI}%2000:00:00&end=${this.state.anoF}-${this.state.mesF}-${this.state.diaF}%2000:00:00`)
            let {feeds} = res.data
            let minimo = 4
            for(i=1;i<feeds.length;i++){
                if(feeds[i]['field'+j]<minimo && feeds[i]['field'+j] != null ){
                    minimo = feeds[i]['field'+j]
                }
            }
        this.setState({['minimo'+j]:minimo})
        }}

        Maximo = async () => {
            for(j=1;j<4;j++)
             { let res = await axios.get(`https://api.thingspeak.com/channels/859902/fields/${j}.json?start=${this.state.anoI}-${this.state.mesI}-${this.state.diaI}%2000:00:00&end=${this.state.anoF}-${this.state.mesF}-${this.state.diaF}%2000:00:00`)
             let {feeds} = res.data
             let maximo = 0
             for(i=1;i<feeds.length;i++){
                 if(feeds[i]['field'+j]>maximo && feeds[i]['field'+j] != null ){
                     maximo = feeds[i]['field'+j]
                 }
             }
         this.setState({['maximo'+j]:maximo})
         }}

            render(){
            return(    
            <ScrollView>    
            <Form Data={(diaI,mesI,anoI,diaF,mesF,anoF) => this.setData(diaI,mesI,anoI,diaF,mesF,anoF)}/>

            <View style={{flex:1}}>
            <Text>Gráfico de Voltagem</Text>   
            <WebView
            style = {{width:400,height:100}} 
            source={{uri:`https://api.thingspeak.com/channels/859902/charts/1?title=Voltagem&color=blue&width=850&xaxis=Time&start=${this.state.anoI}-${this.state.mesI}-${this.state.diaI}%2000:00:00&end=${this.state.anoF}-${this.state.mesF}-${this.state.diaF}%2000:00:00`}}
            />    
            <Button title='Detalhes' onPress={()=>{
                this.props.navigation.navigate("Detalhes",{
                    media:this.state.media1,
                    minimo:this.state.minimo1,
                    maximo:this.state.maximo1
                }
                )}}/>  
           
            <Text>Gráfico de Intesidade</Text>  
            <WebView
            style = {{width:400,height:100}} 
            source={{uri:`https://api.thingspeak.com/channels/859902/charts/2?title=Intesidade&color=blue&width=850&xaxis=Time&start=${this.state.anoI}-${this.state.mesI}-${this.state.diaI}%2000:00:00&end=${this.state.anoF}-${this.state.mesF}-${this.state.diaF}%2000:00:00`}}
            />   
            <Button title='Detalhes' onPress={()=>{
                this.props.navigation.navigate("Detalhes",{
                    media:this.state.media2,
                    minimo:this.state.minimo2,
                    maximo:this.state.maximo2
                }
                )}}/>  
            <Text>Gráfico de Calor</Text>  
            <WebView
            style = {{width:400,height:100}} 
            source={{uri:`https://api.thingspeak.com/channels/859902/charts/3?title=Calor&color=blue&width=850&xaxis=Time&start=${this.state.anoI}-${this.state.mesI}-${this.state.diaI}%2000:00:00&end=${this.state.anoF}-${this.state.mesF}-${this.state.diaF}%2000:00:00`}}
            />   
           <Button title='Detalhes' onPress={()=>{
                this.props.navigation.navigate("Detalhes",{
                    media:this.state.media3,
                    minimo:this.state.minimo3,
                    maximo:this.state.maximo3
                }
                )}}/>  
          


            </View>
            </ScrollView>
            

        
        )
    }
}
