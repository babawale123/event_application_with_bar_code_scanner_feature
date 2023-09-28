import {Ionicons} from '@expo/vector-icons'
import { Text } from 'react-native'
export const navOptions = (nav) => {
    return {
        headerTintColor:'white',
        headerStyle: {
            backgroundColor:"teal"
        },
        headerLeft: () => (
            <Ionicons 
                name='menu'
                color='white'
                size={30}
                style={{padding:5}}
                onPress={()=>nav.toggleDrawer()}
            />
        ),
        headerRight: () => (
            <Text style={{padding:5, fontSize:15, color:'white'}}>WrConcept</Text>
        )
    }
}