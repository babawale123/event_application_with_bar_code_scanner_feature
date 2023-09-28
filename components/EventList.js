import React from 'react'
import { FlatList, RefreshControl, Text, View } from 'react-native'
import { EventItem } from './EventItem'

export const EventList = ({data, onRefresh}) => {
    const renderItem = ({item}) => {
        return <EventItem id={item.id} title={item.title} description={item.description} qr_code={item.qr_code} />
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
