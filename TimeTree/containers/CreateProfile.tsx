import React, {Component} from 'react';
import {Switch} from 'react-native';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/CreateProfileStyles';
import MyDatePicker from '../components/DatePicker';
interface Props {
  navigation: any;
  openProfileSheet: any;
  closeProfileSheet: any;
  closeSignupSheet: any;
  closeLoginSheet: any;
}
interface State {
  name: string;
  password: string;
  isPopupTrue: boolean;
  displayBirthday: boolean;
  birthday: string;
}

export default class CreateProfile extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      name: '',
      password: '',
      isPopupTrue: false,
      displayBirthday: false,
      birthday: 'Not Set',
    };
  }
  _onPressButtonGoogle = async () => {
    this.props.navigation.navigate('Main');
  };
  _onPressButton = async () => {
    this.props.navigation.navigate('Main');
  };
  _openProfileSheet = () => {
    this.props.openProfileSheet();
  };
  _closeProfileSheet = () => {
    this.props.closeProfileSheet();
  };
  _toggle = () => {
    this.setState(prevState => ({
      displayBirthday: !prevState.displayBirthday,
    }));
  };
  setBirthday = (text: string) => {
    this.setState({
      birthday: text,
    });
  };

  render() {
    return (
      <View style={styles.sheetHeader}>
        <Text style={styles.title}> Edit Profile</Text>
        <Image
          style={styles.image}
          source={require('../assets/images/profile.png')}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.textinputLight}>
            <Text style={styles.text}>Name</Text>
          </View>
          <View style={styles.modalButtons}>
            <TextInput
              style={styles.textinput}
              placeholder="Untitled"
              value={this.state.name}
              autoCorrect={false}
              onChangeText={text => this.setState({name: text})}
            />
            {this.state.name.length > 0 ? (
              <TouchableOpacity onPress={() => this.setState({name: ''})}>
                <Image
                  style={styles.a_logo}
                  source={require('../assets/images/close-button-png.png')}
                />
              </TouchableOpacity>
            ) : (
              <View />
            )}
          </View>
          <View style={styles.textinputLight}>
            <Text style={styles.text}>Birthday</Text>
          </View>
          <MyDatePicker
            birthday={this.state.birthday}
            setBirthday={this.setBirthday}
          />
          <View style={styles.textinput}>
            <Text style={styles.text}>Display Birthday</Text>
            <Switch
              style={styles.switchStyle}
              trackColor={{true: '#2FCC87', false: 'grey'}}
              thumbColor={'#f8f8f8'}
              ios_backgroundColor={
                this.state.displayBirthday ? '#2FCC87' : 'gray'
              }
              onValueChange={this._toggle}
              value={this.state.displayBirthday}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            disabled={
              this.state.name.length === 0 || this.state.birthday === 'Not Set'
            }
            style={styles.buttonGreen}
            onPress={() => {
              this.setState({isPopupTrue: true});
              setTimeout(() => {
                this._closeProfileSheet();
                this.props.closeSignupSheet();
                this.props.closeLoginSheet();
              }, 1000);
            }}>
            <Text
              style={
                this.state.name.length === 0 ||
                this.state.birthday === 'Not Set'
                  ? styles.textDark
                  : styles.buttonText
              }>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
        {this.state.isPopupTrue && (
          <View style={styles.overlay}>
            <Image
              style={styles.imageSmall}
              source={require('../assets/images/loading.gif')}
            />
          </View>
        )}
      </View>
    );
  }
}
