import { StatusBar } from 'expo-status-bar';
import { Button, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Homescreen } from './screens/Home-screen';
import { useState } from 'react';

export default function App() {
  
  return (
    <SafeAreaView>
         <Homescreen />
    </SafeAreaView>
  );
}


 