import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {styles} from '../styles/SignupStyles';
import CreateProfile from './CreateProfile';
interface Props {
  navigation: any;
}
export default class Signup extends Component<Props> {
  createProfileSheet: RBSheet | null | undefined;
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isPopupTrue: true,
      errorEmail: '',
      errorPassword: '',
      hasErrors: false,
    };
  }
  validate = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };
  _checkForErrors = () => {
    let hasErrorsEmail = this.validate(this.state.email) == false || this.state.email.length ==0 
    let hasErrorsPassword = this.state.password.length < 8|| this.state.password.length > 32;
    let emailError = '';
    let passwordError= '';
    if (hasErrorsEmail && hasErrorsPassword) {
      emailError = 'Please Enter a valid email address';
      passwordError= 'Please Enter a valid password';
    }else if(hasErrorsPassword && !hasErrorsEmail){
      emailError = '';
      passwordError= 'Please Enter a valid password';
    }else if(hasErrorsEmail && !hasErrorsPassword){
      emailError = 'Please Enter a valid email address';
      passwordError= '';
    }
    console.log(this.state.password + this.state.errorEmail)

    this.setState({errorEmail: emailError, errorPassword: passwordError});

    if(!hasErrorsEmail && !hasErrorsPassword) {
      this.createProfileSheet.open();

    }
  };
  _onPressButtonGoogle = async () => {
    this.props.navigation.navigate('Main');
  };
  _openSignUpSheet = () => {
    this._checkForErrors();
  };
  _closeSignUpSheet = () => {
    this.props.closeSignupSheet();
  };
  _openProfileSheet = () => {
    this._checkForErrors();
  };
  _closeProfileSheet = () => {
    this.createProfileSheet.close();
  };
  render() {
    return (
      <View>
        <View style={styles.sheetHeader}>
          <TouchableOpacity
            style={styles.text}
            onPress={this._closeSignUpSheet}>
            <Image
              style={styles.a_logo}
              source={require('../assets/images/x.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.text}
            onPress={this._closeSignUpSheet}>
            <Text style={styles.text}> Later</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}> Sign up</Text>
        <View style={styles.buttonContainer}>
          <TextInput
            style={
              this.state.errorEmail.length > 0
                ? styles.textinputError
                : styles.textinput
            }
            placeholder="Email Address"
            autoCorrect={false}
            onChangeText={text => this.setState({email: text})}
            value={this.state.email}
          />
          <Text style={styles.error}>{this.state.errorEmail}</Text>
          <TextInput
            style={
              this.state.errorPassword.length > 0
                ? styles.textinputError
                : styles.textinput
            }
            secureTextEntry
            placeholder="8 - 32 character password"
            onChangeText={text => this.setState({password: text})}
            value={this.state.password}
          />
           <Text style={styles.error}>{this.state.errorPassword}</Text>
          
          <TouchableOpacity
            style={styles.buttonGreen}
            onPress={this._openProfileSheet}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
          <Text style={styles.textCenter}>or</Text>
          <TouchableOpacity style={styles.buttonFacebook}>
            <Image
              style={styles.f_logo}
              source={require('../assets/images/facebook_logo.png')}
            />
            <Text style={styles.buttonText}> Login with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonApple}
            // onPress={() => this.RBSheet.open()}
          >
            <Image
              style={styles.a_logo}
              source={require('../assets/images/apple_logo.png')}
            />
            <Text style={styles.buttonText}> Sign in with Apple</Text>
          </TouchableOpacity>
        </View>
        <View>
          <RBSheet
            ref={ref => {
              this.createProfileSheet = ref;
            }}
            height={800}
            openDuration={250}
            customStyles={{
              container: {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              },
            }}>
            <CreateProfile
              navigation={this.props.navigation}
              openProfileSheet={this._openProfileSheet}
              closeProfileSheet={this._closeProfileSheet}
              closeSignupSheet={this._closeSignUpSheet}
              closeLoginSheet={this.props.closeLoginSheet}
            />
          </RBSheet>
        </View>
      </View>
    );
  }
}
