import React, {Component} from 'react';
import {View,TextInput,Text,Button} from 'react-native';

export default class Form extends Component{
   
    state = {
        DiaI:'',
        MesI:'',
        AnoI:'',

        DiaF:'',
        MesF:'',
        AnoF:'',
        }
    


    handleDiaI = (text) =>{
        this.setState({DiaI : text})
        
    }
    handleMesI = (text) =>{
        this.setState({MesI: text})
    }
    handleAnoI = (text) =>{
        this.setState({AnoI: text})
    }

    handleDiaF = (text) =>{
        this.setState({DiaF : text})
        
    }
    handleMesF = (text) =>{
        this.setState({MesF: text})
    }
    handleAnoF = (text) =>{
        this.setState({AnoF: text})
    }

    handleData = () => {
        if(this.state.DiaI == '' && this.state.MesI == '' && this.state.AnoI == ''
         && this.state.DiaF == '' && this.state.MesF == '' && this.state.AnoF == '' ){
             alert("Preencha a data corretamente")
         }else{
        this.props.Data(
            this.state.DiaI,
            this.state.MesI,
            this.state.AnoI,
            this.state.DiaF,
            this.state.MesF,
            this.state.AnoF,
            )
        }
    }    

    render(){
        return(
            <View>
                <View style={{flexDirection:"row"}}>
                <Text>Inicio:</Text>
                
                <Text>Dia:</Text>
                <TextInput
                placeholder = "DD"
                keyboardType = 'numeric'
                autoFocus=  'true'
                onChangeText = {this.handleDiaI}
                />

               

                <Text>Mês:</Text>
                <TextInput
                placeholder = "MM"
                keyboardType = 'numeric'
              
                onChangeText = {this.handleMesI}
                />
                <Text>Ano:</Text>
                <TextInput
                placeholder = "AAAA" 
                keyboardType = 'numeric'
               
                onChangeText = {this.handleAnoI}
                />

                </View >

                <View style={{flexDirection:"row"}}>

                <Text>Fim:</Text>
                
                <Text>Dia:</Text>
                <TextInput
                placeholder = "DD"
                keyboardType = 'numeric'
                onChangeText = {this.handleDiaF}
                />
                <Text>Mês:</Text>
                <TextInput
                placeholder = "MM"
                keyboardType = 'numeric'
                onChangeText = {this.handleMesF}
                />
                <Text>Ano:</Text>
                <TextInput
                placeholder = "AAAA" 
                keyboardType = 'numeric'
                onChangeText = {this.handleAnoF}
                />
               </View>

               
                <Button title='ok' onPress = {this.handleData}/>
            </View>

        )
    }
}