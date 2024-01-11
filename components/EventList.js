import React from 'react'
import { FlatList, RefreshControl, Text, View } from 'react-native'
import { EventItem } from './EventItem'

export const EventList = ({data, onRefresh}) => {
    const renderItem = ({item}) => {
        return <EventItem id={item.id} temperature_iot={item.temperature_iot} temp_mode_iot={item.temp_mode_iot} uss_iot={item.uss_iot} />
    }
    
  return (
        <FlatList 
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl 
                refreshing = {false}
                onRefresh={onRefresh}/>
            }
        />
  )
}
