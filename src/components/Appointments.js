import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Header from './Header'
import AppointmentsCard from './AppointmentsCard'
class Appointments extends Component {
    static navigationOptions = {
        header: null,
    }
    state = {
        doctorsAppointments: [
            {
                doctorName: 'Doctor / omar Abdulhadi',
                doctorSpecialize: 'Mesotheraphy',
                doctorDay:'Mon 21 jan 2019',
                time:'5:00 pm',
                info:'500 S R',
                bordercl:'#339966',
                backgroundcl:'#0066ff',
            }, {
                doctorName: 'Doctor / Azzam Saleh',
                doctorSpecialize: 'Hollyood Smile',
                doctorDay:'Sun 20 jan 2019',
                time:'5:00 pm',
                info:'975 S R',
                bordercl:'#0066ff',
                backgroundcl:'#0066ff',
            }, {
                doctorName: 'Doctor / omar Abdulhadi',
                doctorSpecialize: 'Mesotheraphy',
                doctorDay:'Sun 20 jan 2019',
                time:'5:30 pm',
                info:'500 S R',
                bordercl:'#ff0000',
                backgroundcl:'#0066ff',
            },{
                doctorName: 'Doctor / omar Abdulhadi',
                doctorSpecialize: 'Mesotheraphy',
                doctorDay:'Sun 20 jan 2019',
                time:'5:00 pm',
                info:'3800 S R',
                bordercl:'#339966',
                backgroundcl:'#0066ff',
            }
        ]
    }
    typeSelected=(value)=> {
        Alert.alert(value);
        this.setState({
            itemPressed: value
        });
     }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={{width:'100%',height:500,flex:1,justifyContent:'center',alignItems:'center'}}>
                    <FlatList
                    data={this.state.doctorsAppointments}
                renderItem={({item,index})=>
               
                {  
                 return(
                     <AppointmentsCard 
                     doctorName={item.doctorName}
                     doctorSpecialize={item.doctorSpecialize}
                     doctorDay={item.doctorDay}
                     time={item.time}
                     info={item.info}
                     bordercl={item.bordercl}
                     backgroundcl={item.backgroundcl}
                     itemId={index}                    
                     />
                 )
                }}>
                    </FlatList>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

})
export default Appointments