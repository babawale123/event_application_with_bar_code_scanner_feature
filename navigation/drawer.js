import { createDrawerNavigator,DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { HomeStack, ProfileStack } from './stack';
import { Linking, SafeAreaView, Text, View } from 'react-native';
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons'



const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) =>{
        return (
          <SafeAreaView style={{flex:1,paddingTop:20, backgroundColor:"aqua"}}>
              <View style={{justifyContent:"center", alignItems:'center', padding:10}}>
                <Text>WrConcept</Text>
              </View>
              <DrawerItemList {...props} />
              <DrawerItem label='more info' icon={()=>(
                <Ionicons name='information' size={22} onPress={()=>Linking.openURL('')} />
              )} />
          </SafeAreaView>
        )
      }}
    screenOptions={{headerShown:false}}>
    <Drawer.Screen options={{ title:'Home',
  drawerIcon: () =>(
    <Ionicons name='home' size={22} />
  )}}  name="HomeStack" component={HomeStack} />
    <Drawer.Screen options={{ title:'Profile',
  drawerIcon: ()=> (
    <MaterialCommunityIcons name='face-man-profile' size={22} />
  )}}  name="ProfileStack" component={ProfileStack} />
    </Drawer.Navigator>
  );
}