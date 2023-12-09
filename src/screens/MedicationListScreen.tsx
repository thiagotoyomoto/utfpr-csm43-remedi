import React, { useState } from 'react';
import { View, ImageBackground, Pressable } from 'react-native';
import {
  Button,
  Text,
  Searchbar,
  Provider as PaperProvider,
} from 'react-native-paper';

import { styles } from '../styles/MedicationListScreenStyle';

import MedicationIcon from '@assets/icons/medication.svg';
import { useMedicationsStore } from '@/stores/useMedicationsStore';
import { Icons } from '@/components';

const backgroundImage = require('@assets/background.png');

export function MedicationListScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const { medications } = useMedicationsStore();

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <ImageBackground style={styles.searchBox} source={backgroundImage}>
          <Searchbar
            placeholder='Pesquisar'
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.searchbar}
          />
        </ImageBackground>
        <View style={styles.medicationList}>
          {Array.from(medications.values()).filter((medication) => {
            if (searchQuery === '') return true;
            return medication.name.toLowerCase().includes(searchQuery.toLowerCase());
          }).map((medication) => (
            <MedicationItem key={medication.name} medicationName={medication.name} />
          ))}
        </View>
        <Button
          mode='contained'
          buttonColor='#ED8A2F'
          textColor='#FFF'
          style={styles.buttonNew}
        >
          <Text style={styles.buttonNewText}>
            Novo
          </Text>
        </Button>
      </View>
    </PaperProvider>
  );
}

function MedicationItem(props) {
  return (
    <View style={styles.medication_item}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.medicationIconCircle}>
          <MedicationIcon
            width={38}
            height={38}
            fill='#FFF'
            style={styles.medicationIcon}
          />
        </View>
        <Text style={styles.medicationName}>
          {props.medicationName}
        </Text>
      </View>
      <Pressable>
        <Icons.Trash size={28} />
      </Pressable>
    </View>
  );
}
