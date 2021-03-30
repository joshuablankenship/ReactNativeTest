import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/LoginStyles';
interface AppProps {
  navigation: any;
  route: any;
  info: any;
}
interface AppState {
  catInfo: Array<any>;
}
export default class Main extends Component<AppProps, AppState> {
  constructor(props: AppProps | Readonly<AppProps>) {
    super(props);
    this.state = {
      catInfo: props.info,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Main Page</Text>
      </View>
    );
  }
}
