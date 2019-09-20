import React from 'react'
import {Text,View} from 'react-native'

const Detalhes = ({navigation}) =>(
<View>
    <Text>Média:</Text>
    <Text>{navigation.state.params.media}</Text>
    <Text>Minimo</Text>
    <Text>{navigation.state.params.minimo}</Text>
    <Text>Máximo:</Text>
    <Text>{navigation.state.params.maximo}</Text>
</View>


)

export default Detalhes