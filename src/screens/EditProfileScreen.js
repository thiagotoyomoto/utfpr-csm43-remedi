import React from 'react';
import { View, Text, Image } from 'react-native';
import { TextInput, Button, Pressable } from 'react-native-paper';
import { styles } from '../styles/EditProfileStyle.js';
import DateTimePicker from '@react-native-community/datetimepicker';

export function EditProfileScreen() {
  const [dateBirth, setDateBirth] = React.useState();
  const [date, setDate] = React.useState(new Date());
  const [showPicker, setShowPicker] = React.useState(false);
  
  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === 'android') {
        toggleDatePicker();
        const dateToString = () => {
          var str = '';
          currentDate.getDate() < 10
            ? (str += `0${currentDate.getDate()}`)
            : (str += `${currentDate.getDate()}`);
          currentDate.getMonth() < 9
            ? (str += `/0${currentDate.getMonth() + 1}`)
            : (str += `/${currentDate.getMonth() + 1}`);
          return (str += `/${currentDate.getFullYear()}`);
        };
        setDateBirth(dateToString);
      }
    } else {
      toggleDatePicker();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topBox}>
        <View style={styles.pictureBox}>
          <Image
            style={styles.profilePicture}
            source={require('../../assets/fotoBonita.jpg')}
          />
        </View>
        <Text style={styles.profileName}>Gato Maluco</Text>
      </View>
      <View style={styles.bottomBox}>
        <TextInput
          label="Nome"
          style={[styles.input]}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            {showPicker && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onChange}
                maximumDate={new Date()}
              />
            )}
            {/* <Pressable onPress={toggleDatePicker}> erro no pressable*/}
            <TextInput
              label={'Nascimento'}
              style={[styles.input, styles.inputHalfSize]}
              placeholder="07-08-2000"
              value={dateBirth}
              onChange={setDateBirth}
              editable={false}
            />
            {/* </Pressable> */}
          </View>
          <TextInput
            label="Gênero"
            style={[styles.input, styles.inputHalfSize]}
          />
        </View>
        <Button
          mode="conteined"
          buttonColor="#ED8A2F"
          textColor="#FFF"
          style={styles.buttonPremium}
        >
          <Text>Salvar</Text>
        </Button>
      </View>
    </View>
  );
}