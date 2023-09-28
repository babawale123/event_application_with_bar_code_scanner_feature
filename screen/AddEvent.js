import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import {HeaderBackButton} from '@react-navigation/elements'
import axios from 'axios'


export const AddEvent = () => {
    const navigation = useNavigation()
    const [title,setTitle] = useState('')
    const [description,setDesc] = useState('')
    const [date, setDate] = useState(new Date())
    const [msg, setMsg] = useState('')

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:'Add Event',
            headerLeft: () => (
                <HeaderBackButton
                 tintColor='white'
                 onPress={()=>navigation.goBack()}/>
            )
        })
    },[])

    const handleSubmit = async() => {
        config = {
            headers: {
              'Content-Type': 'application/json'
            }
           }
           console.log(title,description,date)
        const {data} = await axios.post('https://mynewbarcode-4994a8b57609.herokuapp.com/api/events/',{title,description,date},config)
        console.log(data)
        setMsg("Event added successfully")
        navigation.navigate('Home')
    }

    // const handleSubmit = async() => {
    //     const data = {
    //         title,
    //         description,
    //         date,
    //     }
    //     const response = await fetch('https://5247-197-210-52-33.ngrok-free.app/api/events/',{
    //         method : 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     const res = await response.json()
    //     console.log(res)
    // }
  return (
    <View style={styles.screen}>
        <Text style ={{padding:5, alignItems:'center',justifyContent:'center', color:'green'}}>{msg}</Text>
        <TextInput 
        defaultValue={title}
        onChangeText={setTitle}
        style={styles.input}
        placeholder='Enter Title'
        />

        <TextInput 
        defaultValue={description}
        onChangeText={setDesc}
        style={styles.input}
        placeholder='Enter Description'
        />

        <TextInput 
        defaultValue={date.toLocaleString()}
        onChangeText={setDate}
        style={styles.input}
        />

        <Button title='add event'  onPress={handleSubmit}/>
    </View>
  )
}

const styles =  StyleSheet.create({
    screen:{
        padding:20
    },
    input: {
        height:40,
        borderWidth:1,
        borderRadius:5,
        padding:10,
        backgroundColor:'white',
        marginBottom:10,
    }
})
