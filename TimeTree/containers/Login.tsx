import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {styles} from '../styles/LoginStyles';
import Bottom from './Bottom';
import Signup from './Signup';
interface Props {
  navigation: any;
}
export default class Login extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isPopupTrue: false,
    };
  }
  RBSheet: RBSheet | null | undefined;
  signupSheet: RBSheet | null | undefined;
  componentDidMount() {
    SplashScreen.hide();
  }
  _onPressButtonGoogle = async () => {
    this.props.navigation.navigate('Main');
  };
  _onPressButton = async () => {};
  _openSignUpSheet = async () => {
    this.signupSheet.open();
  };
  _closeSignUpSheet = async () => {
    this.signupSheet.close();
  };
  _closeLoginSheet = () => {
    this.RBSheet.close();
  };
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.alternativeLayoutButtonContainer}>
          <Image
            style={styles.image}
            source={require('../assets/images/logo.png')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonGreen}
            onPress={() => this.RBSheet.open()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this._openSignUpSheet}>
            <Text style={styles.buttonTextGreen}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            By selecting one or the other you are agreeing to our{' '}
            <Text style={styles.link} onPress={this._onPressButton}>
              Terms of Service
            </Text>{' '}
            {'& '}
            <Text style={styles.link} onPress={this._onPressButton}>
              Privacy Policy{' '}
            </Text>
            .
          </Text>
        </View>
        <View style={styles.container}>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={300}
            openDuration={250}
            closeOnDragDown
            customStyles={{
              container: {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              },
            }}>
            <Bottom navigation={this.props.navigation} signupSheet={this.signupSheet} closeLoginSheet={this._closeLoginSheet}/>
          </RBSheet>
          <View />
          <View style={styles.container}>
            <RBSheet
              ref={ref => {
                this.signupSheet = ref;
              }}
              height={800}
              openDuration={250}
              customStyles={{
                container: {
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                },
              }}>
              <Signup navigation={this.props.navigation} signupSheet={this.signupSheet} openSignupSheet={this._openSignUpSheet} closeSignupSheet={this._closeSignUpSheet} closeLoginSheet={this._closeLoginSheet}/>
            </RBSheet>
          </View>
        </View>
      </View>
    );
  }
}
