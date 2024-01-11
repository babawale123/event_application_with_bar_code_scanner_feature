import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { EventList } from '../components/EventList'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

 

export const HomeScreen = () => {
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)
  const navigation = useNavigation()
  useEffect(()=>{
    fetchData()
 },[refresh])

//  const fetchData = async() =>{
//    const response = await fetch('https://ca90-197-210-52-113.ngrok-free.app/api/events/')
//    const data = await response.json()
//    console.log(data)
//    setData(data)
//  }

 config = {
  headers: {
    'Content-Type': 'application/json'
  }
 }

 const fetchData = async() => {
      try {
        const {data} = await axios.get('http://ramson.pythonanywhere.com/api/iot-readings/',config)
        setData(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
 }
 useEffect(() => {
  fetchData(); // Initial fetch when the component mounts

  const interval = setInterval(() => {
    fetchData(); // Fetch data every 5 seconds
  }, 5000);

  return () => clearInterval(interval); // Clear the interval when component unmounts
}, []);

 const handleRefresh = () => {
  console.log('refreshing....')
  setRefresh(prevState => !prevState)
 }

  return (
    <View  style={styles.screen}>
       {/* <Button title='add event' onPress={()=>navigation.navigate('New Event')} />*/}
        <EventList data={data} onRefresh = {handleRefresh} />
    </View>
  )
}

const styles =  StyleSheet.create({
    screen: {
        padding:10
    }
})
