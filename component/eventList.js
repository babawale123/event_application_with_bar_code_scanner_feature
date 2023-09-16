import React from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import { Dummy_data } from '../data/Dummy'
import EventItem from './eventItem'

export const EventList = () => {
    const renderItem = ({item}) => {
        return <EventItem id={item.id} title={item.title}  description={item.description} />
    }
  return (
    <View>
        <FlatList
            data={Dummy_data}
            keyExtractor={item => item.id}
            renderItem={ renderItem}
            refreshControl={
                <RefreshControl
                 refreshing={false}
                 onRefresh={()=>console.log("refreshing")}/>
            }
        />
    </View>
  )
}

