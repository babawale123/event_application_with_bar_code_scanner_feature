import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const EventItem = ({id,title,description}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={()=>console.log("event happening bro")}>
        <Text>{title}</Text>
        <Text>{description}</Text>
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    card: {
      borderWidth:1,
      borderColor:'#c5c5c5',
      borderRadius:10,
      marginVertical:5,
      padding:30,
      margin:20,

    }
  })

export default EventItem