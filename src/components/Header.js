import React, { Component } from 'react'
import { View, Text,StyleSheet } from 'react-native'
const Header=({title})=>{
    return(
<View style={{backgroundColor:'#e0e0d1',width:'100%',height:55,justifyContent:'center',alignItems:'center'}}>
   <Text style={styles.textStyle}>{title}</Text>
   
</View>
    )
}

const styles=StyleSheet.create({
        textStyle:{
        fontSize:15,
        }
    
})
export default Header