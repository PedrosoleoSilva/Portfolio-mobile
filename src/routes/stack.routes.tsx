import {createStackNavigator} from '@react-navigation/stack'

const {Screen, Navigator} = createStackNavigator();

import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';
import MainScreen from '../screens/MainScreen';
import SkillScreen from '../screens/SkillScreen';




export function StackRoutes(){
    return(
        <Navigator>
           <Screen
            name='home'
            component={MainScreen}
           />
           <Screen
            name='Skills'
            component={SkillScreen}
           />
        </Navigator>
    )
}
