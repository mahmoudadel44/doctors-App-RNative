import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Header from './Header'
import Card from './FavouritesCard'
class Favourites extends Component {
    static navigationOptions = {
        header: null,
    }
    state = {
        listData: [{
            doctorName: 'mohamed halawany',
            doctorJob: 'Orthopedic',
            doctorSpecialize: 'Orthopedic',
            DoctorImg:require('./images/doctor.jpg')
        }, {
            doctorName: 'Ahmed mohamed',
            doctorJob: 'surgery',
            doctorSpecialize: 'bio',
            DoctorImg:require('./images/doctor2.jpg')
        },{
            doctorName: 'mohamed ALi',
            doctorJob: 'dentist',
            doctorSpecialize: 'bio',
            DoctorImg:require('./images/doctor3.jpg')
        },
        {
            doctorName: 'mohamed Adel',
            doctorJob: 'surgery',
            doctorSpecialize: 'bio',
            DoctorImg:require('./images/doctor4.jpg')
        }
    ]
    }
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <View style={styles.container} >
                <Header title='Favourites' />
                <View style={{width:'100%',height:500,flex: 1,justifyContent:'center',alignItems:'center',}}>
                <FlatList
                    data={this.state.listData}
                    renderItem={({ item }) => {
                        return(
                            <Card
                            doctorName={item.doctorName}
                            doctorJob={item.doctorJob}
                            doctorSpecialize={item.doctorSpecialize}
                            DoctorImg={item.DoctorImg} 
                        /> )
                      
                    }}  
                       
                >
                </FlatList>
                </View>
             
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
   
})

export default Favourites