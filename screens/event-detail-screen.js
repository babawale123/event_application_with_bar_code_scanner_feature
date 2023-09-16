import React from 'react'
import { Text, View } from 'react-native'

const eventdetailscreen = () => {
  return (
    <View style={styles.screen}>
       <Text> this is the event-detail-screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        padding:20
    }
})

export default eventdetailscreen