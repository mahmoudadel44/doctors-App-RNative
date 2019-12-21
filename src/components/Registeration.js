import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity, Image, Alert,TextInput, Button,
ScrollView,KeyboardAvoidingView } from 'react-native'
import {Icon} from 'react-native-elements'
import Header from './Header'
class Registeration extends Component {
    static navigationOptions = {
       header:null
      }
      constructor(){
        super();
       this.state={
            username:'',
            email:'',
            phone:'',
            userIconColor:'black',
            emailIconColor:'black',
            phoneIconColor:'black',
            userBorderColor:'#ccc',
            emailBorderColor:'#ccc',
            phoneBorderColor:'#ccc',
            userBackgroundColor:'#e0e0d1',
            emailBackgroundColor:'#e0e0d1',
            phoneBackgroundColor:'#e0e0d1',
            userIconBorderColor:'#f2f2f2',
            emailIconBorderColor:'#f2f2f2',
            phoneIconBorderColor:'#f2f2f2'
        }
    }
    onFocus1=()=> {
    //    if ( this.refs.userTextInput!==null) {
        this.refs.userTextInput.focus();
        this.setState({userIconColor:'white'});
   this.setState({emailIconColor:'black'});
   this.setState({phoneIconColor:'black'}) ; 

   this.setState({userBorderColor:'green'});
   this.setState({emailBorderColor:'#ccc'});
   this.setState({phoneBorderColor:'#ccc'}) ; 

   this.setState({userBackgroundColor:'green'});
   this.setState({emailBackgroundColor:'#e0e0d1'});
   this.setState({phoneBackgroundColor:'#e0e0d1'}) ; 

   this.setState({userIconBorderColor:'green'});
   this.setState({emailIconBorderColor:'#ccc'});
   this.setState({phoneIconBorderColor:'#ccc'}) ; 

    //    }
         
    }
    onFocus2=()=>{
        // if ( this.refs.emailTextInput!==null) {
            this.refs.emailTextInput.focus();
               this.setState({emailIconColor:'white'})
          this.setState({userIconColor:'black'})
          this.setState({phoneIconColor:'black'})

          this.setState({emailBorderColor:'green'})
          this.setState({userBorderColor:'#ccc'})
          this.setState({phoneBorderColor:'#ccc'})


          this.setState({emailBackgroundColor:'green'})
          this.setState({userBackgroundColor:'#e0e0d1'})
          this.setState({phoneBackgroundColor:'#e0e0d1'})

          this.setState({emailBackgroundColor:'green'})
          this.setState({userBackgroundColor:'#e0e0d1'})
          this.setState({phoneBackgroundColor:'#e0e0d1'})

          
          this.setState({emailIconBorderColor:'green'})
          this.setState({userIconBorderColor:'#ccc'})
          this.setState({phoneIconBorderColor:'#ccc'})
        // }
              
            }
            onFocus3=()=>{
                // if ( this.refs.phoneTextInput!==null) {
                    this.refs.phoneTextInput.focus();
                    this.setState({phoneIconColor:'white'})
               this.setState({userIconColor:'black'})
               this.setState({emailIconColor:'black'})

               this.setState({phoneBorderColor:'green'})
          this.setState({userBorderColor:'#ccc'})
          this.setState({emailBorderColor:'#ccc'})

          this.setState({phoneBackgroundColor:'green'})
          this.setState({userBackgroundColor:'#e0e0d1'})
          this.setState({emailBackgroundColor:'#e0e0d1'})

          this.setState({phoneIconBorderColor:'green'})
          this.setState({userIconBorderColor:'#ccc'})
          this.setState({emailIconBorderColor:'#ccc'})
                // }
                 
               }
            
              validateData=()=>{
                if(this.state.username !== '' && this.state.email!=='' && this.state.phone===''){
                  Alert.alert('Alert', 'please enter the phone numer');
                }
                if(this.state.username === '' && this.state.email!=='' && this.state.phone!==''){
                  Alert.alert('Alert', 'please enter the userName');
                }
                if(this.state.username === '' && this.state.email!=='' && this.state.phone===''){
                  Alert.alert('Alert', 'please enter the required data');
                }
             
              }
              validateEmail = (email) => {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  return re.test(email);
              };
        
               onSubmit = () => {
                if (this.state.username === '' && this.state.email==='' && this.state.phone==='') {
                    Alert.alert('Alert', 'please enter the data');}
                  this.validateData()
                    if (!this.validateEmail(this.state.email)) {
                      // not a valid email
                      Alert.alert('Alert', 'not a valid e-mail');
                    } else {
                      // valid email
                    }
                //Do your stuff if condition meet.
            }
    render() {
        return (
         <View style={{width:'100%',height:500,flexDirection:'column',flex:1,justifyContent:'flex-start',
         alignItems:'center',
         backgroundColor:'white',paddingRight:0,marginBottom:10}}>
            <Header title='Registration'/>
            <ScrollView  >
                {/* <View style={{marginTop:25,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#00b5ec',fontSize:25,fontStyle:'italic',fontWeight:'bold'}}>Login Form</Text></View> */}

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
<View style={{backgroundColor:this.state.emailBackgroundColor,width:50,height:45,marginTop:7,marginLeft:10,
borderTopLeftRadius:10,borderBottomLeftRadius:10,justifyContent:'center',
borderColor:this.state.emailIconBorderColor}}>
<Icon name='at-sign' type='feather' size={20} style={{ justifyContent: 'center' }}
 color={this.state.emailIconColor} /></View>

<View style={{justifyContent:'flex-end'}}>
<TextInput style={{width:250,height:45,paddingTop:6,paddingRight:20,marginRight:8,marginBottom:8,
        borderTopRightRadius:10,borderBottomRightRadius:10,backgroundColor:'#fff',
        borderColor:this.state.emailBorderColor,borderStyle:'solid',borderWidth:1}} 
                    placeholder="write your email:"
                    keyboardType="email-address"
                    onChangeText={(email) => this.setState({email})} 
                    value={this.state.email}
                  onFocus={ this.onFocus2 }
                  ref="emailTextInput"
                    />
</View>

</View>

<View style={{flexDirection:'row',width:'100%',height:60,backgroundColor:'white',marginTop:20,justifyContent:'flex-start'}}>
<View style={{backgroundColor:this.state.phoneBackgroundColor,width:50,height:45,marginTop:7,marginLeft:10,
borderTopLeftRadius:10,borderBottomLeftRadius:10,justifyContent:'center',
borderColor:this.state.phoneIconBorderColor}}>
<Icon name='phone' type='feather' size={20} style={{ justifyContent: 'center' }}
 color={this.state.phoneIconColor} /></View>

<View style={{justifyContent:'flex-end'}}>
<TextInput style={{width:250,height:45,paddingTop:6,paddingRight:20,marginRight:8,marginBottom:8,
        borderTopRightRadius:10,borderBottomRightRadius:10,backgroundColor:'#fff',
        borderColor:this.state.phoneBorderColor,borderWidth:1,borderStyle:'solid'}} 
                    placeholder="write your phone"
                    onChangeText={(phone) => this.setState({phone})} 
                    // keyboardType="number-pad"
                    keyboardType="numeric"
                    value={this.state.phone}
                  onFocus={ this.onFocus3 }
                  ref="phoneTextInput"
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
<TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Login')}>
<Text style={styles.styleText}>Go To Login</Text>
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

export default Registeration