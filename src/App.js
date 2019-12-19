import React from 'react'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import{createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import ExploreScreen from './components/Explore'
import AppointmentsScreen from './components/Appointments'
import FavouritesScreen from './components/Favourites'
import AccountScreen from './components/Account'
import {Icon} from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
const ExploreScreenStack=createStackNavigator({
    Explore:ExploreScreen,
})

const AppointmentsScreenStack=createStackNavigator({
    Appointments:AppointmentsScreen
})

const FavouritesScreenStack=createStackNavigator({
    Favourites:FavouritesScreen
})

const AccountScreenStack=createStackNavigator({
    Account:AccountScreen
})
const AppNavigator=createBottomTabNavigator({
    Explore:{
     screen:ExploreScreenStack,
     navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='search' type='feather' size={25}  color={tintColor}/>
        )
      },
    },
    Appointments:{
        screen:AppointmentsScreenStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='home' type='feather' size={25} color={tintColor} />
            )
          },
    },
    Favourites:{screen:
        FavouritesScreenStack, 
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='heart' type='feather' size={25} color={tintColor} />
            )
         }
        },
    Account:{screen:
        AccountScreenStack,
        navigationOptions: {
            // tabBarIcon: ({focused}) =>
            //     <Icon name='settings' type='feather' size={25}  active={focused} />,
            //      tabBarOptions: { activeTintColor:'red'}
            tabBarIcon: ({tintColor}) => 
            <Icon name='settings' type='feather' size={25} color={tintColor}/>
        } 
    }

},{
    initialRouteName:'Explore',
    tabBarOptions:{
     activeTintColor:'#00ccff',
    // inactiveTintColor:'gray'
    }
})


export default createAppContainer(AppNavigator) 






// import React,{Component} from 'react'
// import {View,Text,StyleSheet} from 'react-native'

// class App extends Component{
// render(){
//         return(
// <View style={styles.container}>
//     <Text>Hello</Text>
//     </View>
//         )
//     }
// }

// const styles=StyleSheet.create({
//     container:{
// flex:1,
// justifyContent:'center',
// alignItems:'center'
//     }
// })

// export default App
