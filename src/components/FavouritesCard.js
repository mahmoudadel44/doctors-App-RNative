import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import heart from './images/love.png'
import profile from './images/profile.jpg'
import { Icon } from 'react-native-elements'
const Card = ({doctorName,doctorJob,doctorSpecialize,DoctorImg}) => {
  
    return (
        //big view
        <View style={{
            backgroundColor: 'white', width: 300, height: 100, justifyContent: 'space-between', marginBottom: 15,
            alignItems: 'center', flexDirection: 'row', borderRadius: 10, borderWidth: 0.5, shadowColor: '#cccccc', shadowOffset: {
                width: 0, height: 2,
            }, shadowOpacity: 0.25, borderStyle: 'solid', borderColor: '#d9d9d9', marginTop: 10, shadowRadius: 4, elevation: 5
        }}>
            <View style={{
                width: 110, height: 120,
                padding: 15, flexDirection: 'column'
            }}>
                <Image
                    style={{ width: 18, height: 18, marginRight: 10 }}
                    source={heart}
                />
                <Image
                    style={{ width: 60, height: 60, borderRadius: 50, marginLeft: 20 }}
                    source={DoctorImg}
                />
            </View>
            <View style={{ flexDirection: 'column', width: 190, marginLeft: 10, paddingRight: 25, }}>
                <View style={{ flexDirection: 'row', borderStyle: 'solid', paddingLeft: 5 }}>
                    <Icon name='star' type='feather' size={25} style={{ paddingRight: 10 }} color={'red'} />
        <Text style={{fontSize:15}}>{doctorName}</Text>
                </View>
                <View style={{ borderBottomWidth: 0.5, borderStyle: 'solid', borderColor: '#e6e6e6' }}>
                    <Text style={{ marginLeft: 10, marginBottom: 15,fontSize:11 }}>{doctorJob}</Text></View>
                <View style={{ marginTop: 10, marginLeft: 10,fontSize:15 }}><Text>{doctorSpecialize}</Text></View>
            </View>
        </View>

    )
}

export default Card