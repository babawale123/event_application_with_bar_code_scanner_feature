import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screen/HomeScreen';
import { Qrcode } from '../screen/Qrcode';
import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={({route})=>({
      headerShown:false,
      tabBarShowLabel:false,
      tabBarStyle:{
        backgroundColor:'black'
      },
      tabBarActiveTintColor:'teal',
      tabBarIcon: ({focused,size,color}) => {
        let IconName
        if(route.name === 'HomeTab') {
          IconName = focused ? 'home' : 'home-outline';
        }
        else if(route.name === 'Qrcode'){
          IconName = focused ? 'qr-code': 'qr-code-outline';
        }
        return <Ionicons name={IconName} size={focused ? 32 : size} color={color} />
      }
    })}>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="Qrcode" component={Qrcode} />
    </Tab.Navigator>
  );
}