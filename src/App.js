import React from 'react'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import{createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import LoginScreen from './components/Login'
import AppointmentsScreen from './components/Appointments'
import FavouritesScreen from './components/Favourites'
import RegisterationScreen from './components/Registeration'
import {Icon} from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
const LoginScreenStack=createStackNavigator({
    Login:LoginScreen,
})

const AppointmentsScreenStack=createStackNavigator({
    Appointments:AppointmentsScreen
})

const FavouritesScreenStack=createStackNavigator({
    Favourites:FavouritesScreen
})

const RegisterationScreenStack=createStackNavigator({
    Registeration:RegisterationScreen
})
const AppNavigator=createBottomTabNavigator({
    Login:{
     screen:LoginScreenStack,
     navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='log-in' type='feather' size={25}  color={tintColor}/>
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
    Registeration:{screen:
    RegisterationScreenStack,
        navigationOptions: {
            // tabBarIcon: ({focused}) =>
            //     <Icon name='settings' type='feather' size={25}  active={focused} />,
            //      tabBarOptions: { activeTintColor:'red'}
            tabBarIcon: ({tintColor}) => 
            <Icon name='settings' type='feather' size={25} color={tintColor}/>
        } 
    }

},{
    initialRouteName:'Login',
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
