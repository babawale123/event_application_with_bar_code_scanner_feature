import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'
import {useNavigation,useRoute} from '@react-navigation/native'
import {HeaderBackButton} from '@react-navigation/elements'

export const EventDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const {eventId,title,description} = route.params

     useLayoutEffect(() => {
        navigation.setOptions({
            title: 'event screen',
            headerLeft: () => (
                <HeaderBackButton
                    onPress={() => navigation.goBack()}
                    tintColor='white'
                />
            )
        })
    }, [])

  return (
    <View>
    <Text>this is the event detail screen screen {eventId}</Text>
    <Text>{title}</Text>
    <Text>{description}</Text>
    </View>
  )
}
