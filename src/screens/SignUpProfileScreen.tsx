import React, { useState } from 'react';

import { View, Pressable, Platform, ImageBackground } from 'react-native';
import {
  Button,
  Text,
  TextInput,
  Provider as PaperProvider,
  SegmentedButtons,
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import { styles } from '../styles/RegisterDataStyle.js';
import { Gender } from '@/domain';
import { format, parse, parseISO } from 'date-fns';
import { supabase } from '@/lib/supabase';

const backgroundImage = require('@assets/background.png');

export function RegisterProfileScreen() {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState<Gender>('male');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const onChange = (event, selectedDate) => {
    const { type } = event;

    if (type === 'set') {
      if (Platform.OS === 'android') {
        toggleDatePicker();
        setBirthdate(convertDateToString(selectedDate));
      }
    } else {
      toggleDatePicker();
    }
  };

  const handleSignUp = () => {
    setLoading(true);

    supabase.from('profile').insert({
      name,
      gender,
      birthdate
    });

    setLoading(false);
  };

  return (
    <PaperProvider>
      <ImageBackground style={styles.container} source={backgroundImage}>
        <View style={styles.topView}>
          <Text style={styles.topHeader}>Dados Pessoais</Text>
        </View>
        <View>
          <TextInput
            label="Nome"
            style={styles.input}
          />
          <View>
            {showDatePicker && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={convertStringToDate(birthdate)}
                onChange={onChange}
                maximumDate={new Date()}
              />
            )}
            <Pressable onPress={toggleDatePicker}>
              <TextInput
                label={'Nascimento'}
                style={[styles.input]}
                placeholder='dd/MM/yyyy'
                value={birthdate === '' ? null : localizeDate(birthdate)}
                editable={false}
              />
            </Pressable>
          </View>
          <SegmentedButtons
            value={gender}
            onValueChange={(value: Gender) => { setGender(value) }}
            style={[styles.input, { borderRadius: 100 }]}
            buttons={[
              {
                value: 'male',
                label: 'Masculino',
              },
              {
                value: 'female',
                label: 'Feminino',
              },
              {
                value: 'other',
                label: 'Outro'
              }
            ]}
          />
          <Button
            mode="contained"
            buttonColor="#ED8A2F"
            textColor="#FFF"
            style={styles.buttonComplete}
            onPress={handleSignUp}
          >
            Cadastrar
          </Button>
          <Button>
            <Text
              style={{
                color: '#ED8A2F',
                textDecorationLine: 'underline',
              }}
            >
              Cancelar
            </Text>
          </Button>
        </View>
      </ImageBackground>
    </PaperProvider>
  );
}

function convertStringToDate(str: string) {
  return parse(str, 'yyyy-MM-dd', new Date())
}

function convertDateToString(date: Date) {
  return format(date, "yyyy-MM-dd")
}

function localizeDate(str: string) {
  return format(parseISO(str), 'dd/MM/yyyy');
}