import * as React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from '../styles/BottomStyles';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useRef} from 'react';
import Signup from './Signup';
import {useState} from 'react';

export default function Bottom(props: { closeLoginSheet: any; navigation: any; }) {
  const signupSheet = useRef();
  const [isPopupTrue, setPopupTrue] = useState(false);

  const _openSignUpSheet = () => {
    signupSheet.current.open();
  };
  const _closeSignUpSheet = () => {
    signupSheet.current.close();
  };
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGreen}>
        <Text style={styles.buttonText}>Sign in via email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonFacebook}>
        <Image
          style={styles.f_logo}
          source={require('../assets/images/facebook_logo.png')}
        />
        <Text style={styles.buttonText}> Login with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonApple}>
        <Image
          style={styles.a_logo}
          source={require('../assets/images/apple_logo.png')}
        />
        <Text style={styles.buttonText}> Sign in with Apple</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          If you don't have an acount,{' '}
          <Text style={styles.link} onPress={_openSignUpSheet}>
            create one
          </Text>
          .
        </Text>
      </View>
      <View style={styles.container}>
        <RBSheet
          ref={signupSheet}
          height={800}
          openDuration={250}
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          }}>
          <Signup
            openSignupSheet={_openSignUpSheet}
            closeSignupSheet={_closeSignUpSheet}
            closeLoginSheet={props.closeLoginSheet}
            navigation={props.navigation}
          />
          {isPopupTrue && (
            <View style={styles.overlay}>
              <Image
                style={styles.imageSmall}
                source={require('../assets/images/loading.gif')}
              />
            </View>
          )}
        </RBSheet>
      </View>
    </View>
  );
}
