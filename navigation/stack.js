import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/HomeScreen';
import { EventDetailScreen } from '../screen/EventDetailScreen';
import {useNavigation} from '@react-navigation/native'
import { navOptions } from './options';
import { ProfileScreen } from '../screen/ProfileScreen';
import { ProfileDetails } from '../screen/ProfileDetails';
import { MyTabs } from './tab';
import { AddEvent } from '../screen/AddEvent';

const Stack = createStackNavigator();

export const HomeStack =() => {
  const navigate = useNavigation()
  
  return (
    <Stack.Navigator screenOptions={()=>navOptions(navigate)}>
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Events" component={EventDetailScreen} />
      <Stack.Screen name="New Event" component={AddEvent} />
    </Stack.Navigator>
  );
}


export const ProfileStack =() => {
  const navigate = useNavigation()
  
  return (
    <Stack.Navigator screenOptions={()=>navOptions(navigate)}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
    </Stack.Navigator>
  );
}



