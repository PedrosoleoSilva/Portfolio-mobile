import {NavigationContainer} from '@react-navigation/native'
import {StackRoutes} from '../routes/stack.routes'
import{BottomTabsRoutes} from './botom-tab.routes'
import {DrawerRoutes} from './drawer.routes'
export function Routes(){
    return(
     <NavigationContainer>
        <StackRoutes/>
    </NavigationContainer>
    )
}