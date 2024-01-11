import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {useNavigation} from '@react-navigation/native'

export const EventItem = ({id,temperature_iot,temp_mode_iot, uss_iot}) => {
    const navigation  = useNavigation()
  return (
    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Events',{eventId:id, temperature_iot,temp_mode_iot,uss_iot})}>
      <View style={styles.card2}>
        <Text style={{fontSize:20,color:"red", marginVertical:5}}> Temperature : {temperature_iot}</Text>
        <Text style={{fontSize:20,color:"blue", marginVertical:5}}>Temp Mode : {temp_mode_iot}</Text>
        <Text style={{fontSize:20, color:"green", marginVertical:5}}> Uss Mode : {uss_iot}</Text>
      </View>
        {/*<Image style={{width:100, height:100}} source={{uri:qr_code}} />*/}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card:{
        borderColor:'#c5c5c5',
        borderWidth:1,
        borderRadius:10,
        padding:20,
        marginVertical:5,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'white',
    },
    card2: {
      alignItems: 'center',
      justifyContent: 'center',
    }
    
})
