import React, {useState} from 'react';
import {View, Platform, Text, Modal, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {styles} from '../styles/CreateProfileStyles';

const MyDatePicker = (props) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [dateFormatted, setDateFormatted] = useState('Not Set');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    formatDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const showFalse = currentMode => {
    setShow(false);
  };
  const showDatepicker = () => {
    formatDate(date);
    showMode('date');
  };
  const formatDate= (d) => {
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    setDateFormatted(`${mo} ${da} ${ye}`);
  };
  return (
    <View>
      <View style={styles.textinput}>
        <Text style={styles.text} onPress={showDatepicker}>
          {dateFormatted}
        </Text>
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
                <Text style={styles.textDate}>{dateFormatted}</Text>
              </View>
              <View style={styles.text} />
              <View style={styles.modalForeground}>
                <DateTimePicker
                  style={styles.dateStyle}
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  display="spinner"
                  onChange={onChange}
                />
                <View style={styles.modalButtons}>
                  <TouchableOpacity 
                    onPress={showFalse}
                  ><Text style={styles.modalButtonWhite}>Cancel</Text></TouchableOpacity>
                  <TouchableOpacity
                    onPress={showFalse}
                  ><Text style={styles.textGreen}>Confirm</Text></TouchableOpacity>
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
