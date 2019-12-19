import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity, Image, Alert,TextInput, Button,
ScrollView,KeyboardAvoidingView } from 'react-native'
import {Icon} from 'react-native-elements'
class Explore extends Component {
    static navigationOptions = {
       header:null
      }
      constructor(){
        super();
       this.state={
            username:'',
            email:'',
            phone:'',
            userIconColor:'white',
            emailIconColor:'white',
            phoneIconColor:'white'

        }
    }
    onFocus1=()=> {
    //    if ( this.refs.userTextInput!==null) {
        this.refs.userTextInput.focus();
        this.setState({userIconColor:'green'});
   this.setState({emailIconColor:'white'});
   this.setState({phoneIconColor:'white'}) ; 
    //    }
         
    }
    onFocus2=()=>{
        // if ( this.refs.emailTextInput!==null) {
            this.refs.emailTextInput.focus();
               this.setState({emailIconColor:'green'})
          this.setState({userIconColor:'white'})
          this.setState({phoneIconColor:'white'})
        // }
              
            }
            onFocus3=()=>{
                // if ( this.refs.phoneTextInput!==null) {
                    this.refs.phoneTextInput.focus();
                    this.setState({phoneIconColor:'green'})
               this.setState({userIconColor:'white'})
               this.setState({emailIconColor:'white'})
                // }
                 
               }
    // componentDidUpdate(prevProps,prevState){
    //     if (
    //         prevState.
    //     ) {
            
    //     }
    // }
    render() {
        return (
         
            <ScrollView style={{width:'100%',height:500,flexDirection:'column',flex:1,
            backgroundColor:'white',paddingRight:0,marginBottom:10}}>
              
                <View style={{marginTop:25,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#00b5ec',fontSize:25,fontStyle:'italic',fontWeight:'bold'}}>Login Form</Text></View>

<View style={{flexDirection:'row',width:'100%',height:60,backgroundColor:'white',marginTop:20,justifyContent:'flex-start'}}>

<View style={{justifyContent:'flex-end'}}>
<TextInput style={styles.inputStyle} 
                    placeholder="Write your name:"
                  //  keyboardType="email-address"
                    onChangeText={(username) => this.setState({username})} 
                    value={this.state.username}
                  onFocus={ this.onFocus1 }
                  ref="userTextInput"
                    />
</View>

<View style={{backgroundColor:'#e0e0d1',width:50,height:45,marginTop:7,
borderTopRightRadius:10,borderBottomRightRadius:10,justifyContent:'center'}}>
<Icon name='user' type='feather' size={20} style={{ justifyContent: 'center' }}
 color={this.state.userIconColor} /></View>

</View>


<View style={{flexDirection:'row',width:'100%',height:60,backgroundColor:'white',marginTop:20,justifyContent:'flex-start'}}>

<View style={{justifyContent:'flex-end'}}>
<TextInput style={styles.inputStyle}
                    placeholder="write your email"
                    keyboardType="email-address"
                    onChangeText={(email) => this.setState({email})} 
                   value={this.state.email}
                   onFocus={this.onFocus2}
                   ref="emailTextInput"
                   />
                   
</View>

<View style={{backgroundColor:'#e0e0d1',width:50,height:45,marginTop:7,
borderTopRightRadius:10,borderBottomRightRadius:10,justifyContent:'center'}}>
<Icon name='at-sign' type='feather'  size={20} 
 color={this.state.emailIconColor} /></View>

</View>

<View style={{flexDirection:'row',width:'100%',height:60,backgroundColor:'white',marginTop:20,justifyContent:'flex-start'}}>

<View style={{justifyContent:'flex-end'}}>
<TextInput style={styles.inputStyle}
                    placeholder="write your phone"
                  //  keyboardType="email-address"
                    onChangeText={(phone) => this.setState({phone})} 
                    value={this.state.phone}
                    onFocus={()=> this.onFocus3() }
                    ref="phoneTextInput"
                   />
</View>

<View style={{backgroundColor:'#e0e0d1',width:50,height:45,marginTop:7,
borderTopRightRadius:10,borderBottomRightRadius:10,justifyContent:'center'}}>
<Icon name='phone' type='feather' size={20} style={{ justifyContent: 'center' }} 
color={this.state.phoneIconColor}/></View>

</View>

<View style={{width:'100%',height:60,backgroundColor:'white',marginTop:20,
justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity style={styles.buttonStyle}>
<Text style={styles.styleText}>تسجيل الحساب</Text>
</TouchableOpacity>

</View>
         </ScrollView>
        )
        }
    }

const styles=StyleSheet.create({
    inputStyle: {
        width:250,
        height:45,
        paddingTop:6, 
        paddingRight:20,
        marginLeft:8,
        marginBottom:8,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        backgroundColor:'#fff',
        borderColor:'#ccc',
        borderWidth:1,
        borderStyle:'solid'
    },
    styleText:{
        fontSize:15,
        paddingTop:10,
        alignItems:'center'
    },
    buttonStyle:{
        marginBottom: 20,
        borderRadius: 10,
       backgroundColor: "#00b5ec",
        height: 45,
        width: '90%',
      //  backgroundColor: '#45a049',
        alignItems: 'center',
        borderStyle:'solid',
        marginTop:20
    },
})

export default Explore