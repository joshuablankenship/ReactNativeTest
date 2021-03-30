import React, {Component} from 'react';
import {Switch} from 'react-native';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {styles} from '../styles/CreateProfileStyles';
import MyDatePicker from '../components/DatePicker';
interface Props {
  navigation: any;
}
export default class CreateProfile extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      isPopupTrue: true,
      birthdaySaved: false,
    };
  }
  componentDidMount() {}
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
      birthdaySaved: !prevState.birthdaySaved,
    }));
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
          <TextInput
            style={styles.textinput}
            placeholder="Untitled"
            value={this.state.name}
            autoCorrect={false}
            onChangeText={text => this.setState({name: text})}
          />
          <View style={styles.textinputLight}>
            <Text style={styles.text}>Birthday</Text>
          </View>
          <MyDatePicker />
          <View style={styles.textinput}>
            <Text style={styles.text}>Display Birthday</Text>
            <Switch
              style={styles.switchStyle}
              trackColor={{true: '#2FCC87', false: 'grey'}}
              thumbColor={'#f8f8f8'}
              backgroundColor={'#f8f8f8'}
              ios_backgroundColor={
                this.state.birthdaySaved ? '#2FCC87' : 'gray'
              }
              onValueChange={this._toggle}
              value={this.state.birthdaySaved}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.buttonGreen}
            onPress={() => {
              this.props.navigation.navigate('Main');
              this._closeProfileSheet();
              this.props.closeSignupSheet();
              this.props.closeLoginSheet();
            }}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
