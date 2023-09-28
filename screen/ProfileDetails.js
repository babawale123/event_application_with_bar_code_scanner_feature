import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'
import {useNavigation,useRoute} from '@react-navigation/native'
import {HeaderBackButton} from '@react-navigation/elements'


export const ProfileDetails = () => {
    const route = useRoute()
    const navigation = useNavigation()

    const {profileId} = route.params

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: 'profile screen',
            headerLeft: () => (
                <HeaderBackButton
                    onPress={() => navigation.goBack()}
                    tintColor='white'
                />
            )
        })
    },[])
  return (
    <View><Text>this is the Profile details screen {profileId}</Text></View>
  )
}
