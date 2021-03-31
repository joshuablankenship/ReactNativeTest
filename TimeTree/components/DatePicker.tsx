import React, {useState} from 'react';
import {
  View,
  Platform,
  Text,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {styles} from '../styles/CreateProfileStyles';
type Props = {
  birthday: string;
  setBirthday: (text: string) => void;
};
const MyDatePicker = (props: Props) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    formatDate(currentDate);
  };

  const showFalse = () => {
    setShow(false);
  };
  const cancel = () => {
    setShow(false);
    props.setBirthday('');
  };
  const showDatepicker = () => {
    formatDate(date);
    setShow(true);
  };
  const formatDate = (d: number | Date | undefined) => {
    let ye = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(d);
    let mo = new Intl.DateTimeFormat('en', {month: 'short'}).format(d);
    let da = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(d);
    props.setBirthday(`${mo} ${da} ${ye}`);
  };
  return (
    <View>
      <View style={styles.modalButtons}>
        <Text style={styles.textinput} onPress={showDatepicker}>
          {props.birthday}
        </Text>
        {props.birthday !== 'Not Set' ? (
          <TouchableOpacity onPress={() => props.setBirthday('Not Set')}>
            <Image
              style={styles.a_logo}
              source={require('../assets/images/close-button-png.png')}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          presentationStyle="overFullScreen">
          <View style={styles.modalBackground}>
            <View style={styles.modalForeground}>
              <View style={styles.modal}>
                <Text style={styles.textDate}>{props.birthday}</Text>
              </View>
              <View />
              <View style={styles.modalForeground}>
                <DateTimePicker
                  style={styles.dateStyle}
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  display="spinner"
                  onChange={onChange}
                />
                <View style={styles.modalButtons}>
                  <TouchableOpacity onPress={cancel}>
                    <Text style={styles.modalButtonWhite}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={showFalse}>
                    <Text style={styles.textGreen}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default MyDatePicker;
