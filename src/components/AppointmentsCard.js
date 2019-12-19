import React, { Component,useState  } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements';
const AppointmentsCard = ({ doctorName, doctorSpecialize, doctorDay,
     time, info, bordercl, backgroundcl,itemId }) => {
  const [itemPressed, setItemPressed] = useState('-1')
  const [toggle, setToggle] = useState(false)
    return (
        //big view
        <View style={{
            backgroundColor: 'white', width: 300, height: 100, 
            justifyContent: 'space-between', marginBottom: 5,
            alignItems: 'center', flexDirection: 'column',
             borderRadius: 10, borderWidth: 0.5, shadowColor: '#cccccc', shadowOffset: {
                width: 0, height: 2,
            }, shadowOpacity: 0.25, borderStyle: 'solid',
             borderRightColor: '#d9d9d9', borderBottomColor: '#d9d9d9', marginTop: 10,
              shadowRadius: 4, elevation: 5,
            borderLeftWidth: 7, borderLeftColor: bordercl, borderTopColor: '#d9d9d9'
        }}>
            <View style={{
                width: 280, height: 57,
                padding: 5, flexDirection: 'row', backgroundColor: 'white'
            }}>
                <View style={{ flexDirection: 'column', paddingLeft: 5,
                 height: 45, width: 130, backgroundColor: 'white' }}>

                    <Text style={{ fontSize: 15 }}>Test2</Text>
                    <Text style={{ fontSize: 11, color: '#999999' }}>{doctorName}</Text>
                    <Text style={{ fontSize: 12, color: '#999999' }}>{doctorSpecialize}</Text>
                </View>

                <View style={{ flexDirection: 'row', height: 45, width: 150, marginLeft: 55 }}>
                    <TouchableOpacity activeOpacity={.9}
                    onPress={()=>{
                        setItemPressed(itemId);
                        setToggle(!toggle);
                    }}
                    style={{
                        height: 35, width: 35, backgroundColor: itemPressed===itemId&&toggle?backgroundcl:'green',
                        borderRadius: 20, marginTop: 10, marginRight: 5, marginLeft: 5
                    }}><Icon name='edit-2' type='feather' size={20} paddingTop={6} paddingLeft={5}
                     paddingRight={5} /></TouchableOpacity>
                    <View style={{ height: 35, width: 35, backgroundColor: '#ff1a1a',
                     borderRadius: 20, marginTop: 10, marginLeft: 10 }}><Icon name='trash-2'
                      type='feather' size={20} paddingTop={8} /></View>

                </View>
            </View>
            <View style={{
                width: 280, height: 43,
                paddingTop: 15, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around'
            }}>
                <Text style={{ fontSize: 15 }}>{doctorDay}</Text>
                <Text style={{ fontSize: 15 }}>{time}</Text>
                <Text style={{ fontSize: 15 }}>{info}</Text>
            </View>
        </View>

    )
}






export default AppointmentsCard