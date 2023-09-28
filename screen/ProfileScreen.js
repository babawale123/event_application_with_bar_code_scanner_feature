import React from 'react'
import { Button, Text, View } from 'react-native'
import {useNavigation} from '@react-navigation/native'

export const ProfileScreen = () => {
    const navigation = useNavigation()
  return (
    <View>
        <Text>this is the Profile Screen</Text>
        <Button title='move to details' onPress={()=>navigation.navigate('ProfileDetails', {profileId: 1})} />
    </View>
  )
}
