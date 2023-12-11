import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground, Pressable, Platform } from 'react-native';
import { Card, TextInput, Button, ButtonProps, SegmentedButtons } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useProfileStore, useUserStore } from '@/stores';

import { styles } from '../styles/EditProfileStyle';

import { format, parse, parseISO } from 'date-fns';
import { supabase } from '@/lib/supabase';
import { Gender } from '@/domain';

const backgroundImage = require('@assets/background.png');
const profileImage = require('@assets/fotoBonita.jpg')

export function EditProfileScreen() {
  const { profile, setProfile } = useProfileStore();

  const [name, setName] = useState(profile.name);
  const [birthdate, setBirthdate] = useState(profile.birthdate);
  const [gender, setGender] = useState(profile.gender);
  const [showPicker, setShowPicker] = useState(false);
  const [hasModification, setModification] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (name !== profile.name || birthdate !== profile.birthdate || gender !== profile.gender) {
      setModification(true);
    } else {
      setModification(false);
    }
  }, [name, birthdate, gender])

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = (event, selectedDate) => {
    const { type } = event;

    if (type == 'set') {
      if (Platform.OS === 'android') {
        toggleDatePicker();
        setBirthdate(convertDateToString(selectedDate));
      }
    } else {
      toggleDatePicker();
    }
  };

  const onSave = async () => {
    setLoading(true);

    const { error } = await supabase.from('profile').update({
      name: name,
      birthdate: birthdate,
      gender: gender
    }).eq('id', profile.id);

    if (error) {
      console.error(error);
    }

    setProfile({
      id: profile.id,
      name,
      birthdate,
      gender,
      isPremium: false
    });

    setLoading(false);

    setModification(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={styles.topBox} source={backgroundImage}>
        <View style={styles.pictureBox}>
          <Image
            style={styles.profilePicture}
            source={profileImage}
          />
        </View>
        <Text style={styles.profileName}>{profile.name}</Text>
      </ImageBackground>
      <View style={styles.bottomBox}>
        <View>
          <TextInput
            label="Nome"
            value={name}
            onChangeText={setName}
            style={[styles.input]}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              {showPicker && (
                <Card>
                  <DateTimePicker
                    mode="date"
                    display="spinner"
                    value={convertStringToDate(birthdate)}
                    onChange={onChange}
                    maximumDate={new Date()}
                  />
                </Card>
              )}
            </View>
            <Pressable onPress={toggleDatePicker}>
              <TextInput
                label={'Nascimento'}
                style={[styles.input]}
                value={localizeDate(birthdate)}
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

        </View>
        <SaveButton
          disabled={!hasModification || isLoading}
          onPress={onSave} />
      </View>
    </View>
  );
}

function SaveButton(props: Omit<ButtonProps, 'children'>) {
  return (
    <Button
      {...props}
      mode="contained"
      buttonColor="#ED8A2F"
      textColor="#FFF"
      disabled={props.disabled}
      style={styles.buttonPremium}
    >
      <Text>Salvar</Text>
    </Button>
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
