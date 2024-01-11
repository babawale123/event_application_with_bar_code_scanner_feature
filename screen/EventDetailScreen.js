import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useNavigation,useRoute} from '@react-navigation/native'
import {HeaderBackButton} from '@react-navigation/elements'

export const EventDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const {eventId,temperature_iot,temp_mode_iot,uss_iot} = route.params

     useLayoutEffect(() => {
        navigation.setOptions({
            title: 'IOT READING',
            headerLeft: () => (
                <HeaderBackButton
                    onPress={() => navigation.goBack()}
                    tintColor='white'
                />
            )
        })
    }, [])

  return (
    <View style={styles.card}>
    <Text>IOT READING NUMBER {eventId}</Text>
    <Text>{temperature_iot}</Text>
    <Text>{temp_mode_iot}</Text>
    <Text>{uss_iot}</Text>
    </View>
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
      margin:10,
  },
  card2: {
    alignItems: 'center',
    justifyContent: 'center',
  }
  
})
