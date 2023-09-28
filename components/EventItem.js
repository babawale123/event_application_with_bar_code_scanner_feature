import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {useNavigation} from '@react-navigation/native'

export const EventItem = ({id,title,description, qr_code}) => {
    const navigation  = useNavigation()
  return (
    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Events',{eventId:id, title,description})}>
      <View style={styles.card2}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
        <Image style={{width:100, height:100}} source={{uri:qr_code}} />
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
