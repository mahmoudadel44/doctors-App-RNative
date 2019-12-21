import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity, Image, Alert,TextInput, Button,
ScrollView,KeyboardAvoidingView } from 'react-native'
import {Icon} from 'react-native-elements'
import Header from './Header'
class Login extends Component {
    static navigationOptions = {
       header:null
      }
      constructor(){
        super();
       this.state={
            username:'',
           password:'',
            phone:'',
            userIconColor:'black',
           passwordIconColor:'black',
            userBorderColor:'#ccc',
            passwordBorderColor:'#ccc',
            userBackgroundColor:'#e0e0d1',
            passwordBackgroundColor:'#e0e0d1',
            userIconBorderColor:'#f2f2f2',
            passwordIconBorderColor:'#f2f2f2',
        }
    }
    onFocus1=()=> {
    //    if ( this.refs.userTextInput!==null) {
        this.refs.userTextInput.focus();
        this.setState({userIconColor:'white'});
   this.setState({passwordIconColor:'black'});

   this.setState({userBorderColor:'green'});
   this.setState({passwordBorderColor:'#ccc'});
   this.setState({userBackgroundColor:'green'});
   this.setState({passwordBackgroundColor:'#e0e0d1'});

   this.setState({userIconBorderColor:'green'});
   this.setState({passwordIconBorderColor:'#ccc'}); 

    //    }
         
    }
    onFocus2=()=>{
        // if ( this.refs.emailTextInput!==null) {
            this.refs.passwordTextInput.focus();
               this.setState({passwordIconColor:'white'})
          this.setState({userIconColor:'black'})

          this.setState({passwordBorderColor:'green'})
          this.setState({userBorderColor:'#ccc'})

          this.setState({passwordBackgroundColor:'green'})
          this.setState({userBackgroundColor:'#e0e0d1'})

          this.setState({passwordBackgroundColor:'green'})
          this.setState({userBackgroundColor:'#e0e0d1'})

          this.setState({passwordIconBorderColor:'green'})
          this.setState({userIconBorderColor:'#ccc'})
        // }
              
            }
            onFocus3=()=>{
                // if ( this.refs.phoneTextInput!==null) {
                    this.refs.phoneTextInput.focus();
               this.setState({userIconColor:'black'})
               this.setState({passwordIconColor:'black'})

          this.setState({userBorderColor:'#ccc'})
          this.setState({passwordBorderColor:'#ccc'})

          this.setState({userBackgroundColor:'#e0e0d1'})
          this.setState({passwordBackgroundColor:'#e0e0d1'})

          this.setState({userIconBorderColor:'#ccc'})
          this.setState({passwordIconBorderColor:'#ccc'})
                // }
                 
               }
            
              validateData=()=>{
                if (this.state.username === '' && this.state.password==='') {
                    Alert.alert('Alert', 'please enter the data');}
                if(this.state.username !== '' && this.state.password===''){
                  Alert.alert('Alert', 'please enter the password');
                }
                if(this.state.username === '' && this.state.password!==''){
                  Alert.alert('Alert', 'please enter the userName');
                }
             
              }
        
               onSubmit = () => {
                  this.validateData()
            }
    render() {
        return (
         <View style={{width:'100%',height:500,flexDirection:'column',
         flex:1,justifyContent:'flex-start',alignItems:'center',
         backgroundColor:'white',paddingRight:0,marginBottom:10}}>
           <Header title='Login'/>
       <ScrollView >
<View style={{flexDirection:'row',width:'100%',height:60,backgroundColor:'white',marginTop:20,justifyContent:'flex-start'}}>
<View style={{backgroundColor:this.state.userBackgroundColor,width:50,height:45,marginTop:7,marginLeft:10,
borderTopLeftRadius:10,borderBottomLeftRadius:10,justifyContent:'center',
borderColor:this.state.userIconBorderColor}}>
<Icon name='user' type='feather' size={20} style={{ justifyContent: 'center' }}
 color={this.state.userIconColor} /></View>

<View style={{justifyContent:'flex-end'}}>
<TextInput style={{width:250,height:45,paddingTop:6,paddingRight:20,marginRight:8,marginBottom:8,
        borderTopRightRadius:10,borderBottomRightRadius:10,backgroundColor:'#fff',
        borderColor:this.state.userBorderColor,borderWidth:1,borderStyle:'solid'}} 
                    placeholder="Write your name:"
                  //  keyboardType="email-address"
                    onChangeText={(username) => this.setState({username})} 
                    value={this.state.username}
                  onFocus={ this.onFocus1 }
                  ref="userTextInput"
                    />
</View>
</View>

<View style={{flexDirection:'row',width:'100%',height:60,backgroundColor:'white',marginTop:20,justifyContent:'flex-start'}}>
<View style={{backgroundColor:this.state.passwordBackgroundColor,width:50,height:45,marginTop:7,marginLeft:10,
borderTopLeftRadius:10,borderBottomLeftRadius:10,justifyContent:'center',
borderColor:this.state.passwordIconBorderColor}}>
<Icon name='lock' type='feather' size={20} style={{ justifyContent: 'center' }}
 color={this.state.passwordIconColor} /></View>

<View style={{justifyContent:'flex-end'}}>
<TextInput style={{width:250,height:45,paddingTop:6,paddingRight:20,marginRight:8,marginBottom:8,
        borderTopRightRadius:10,borderBottomRightRadius:10,backgroundColor:'#fff',
        borderColor:this.state.passwordBorderColor,borderStyle:'solid',borderWidth:1}} 
                    placeholder="write your password:"
                    onChangeText={(password) => this.setState({password})} 
                    value={this.state.password}
                    secureTextEntry={true}
                  onFocus={ this.onFocus2 }
                  ref="passwordTextInput"
                    />
</View>

</View>



<View style={{width:'100%',height:60,backgroundColor:'white',marginTop:20,
justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity style={styles.buttonStyle} onPress={() => this.onSubmit()}>
<Text style={styles.styleText}>تسجيل الحساب</Text>
</TouchableOpacity>
</View> 

<View style={{width:'100%',height:60,backgroundColor:'white',marginTop:20,
justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity style={styles.buttonStyle} onPress={()=>this.props.navigation.navigate('Registeration')}>
<Text style={styles.styleText}>Go To Registeration </Text>
</TouchableOpacity>
</View>
         </ScrollView>
         </View>
     
        )
        }
    }

const styles=StyleSheet.create({
    styleText:{
        fontSize:17,
        paddingTop:10,
        alignItems:'center',
        color:'white'
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

export default Login