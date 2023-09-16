import React from 'react'
import { Text, View } from 'react-native'
import { EventList } from '../component/eventList'
import { StatusBar } from 'expo-status-bar'

export const Homescreen = () => {
  return (
    <View>
        <EventList />
        <StatusBar default= "dark" />
    </View>
  )
}
