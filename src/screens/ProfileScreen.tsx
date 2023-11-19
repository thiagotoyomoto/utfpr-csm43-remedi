import React from 'react';
import { View, Text, Image, ImageBackground, FlatList } from 'react-native';
import { Button, IconButton, TouchableRipple } from 'react-native-paper';
import { styles } from '../styles/ProfileStyle.js';

import { Icons } from '@/components';
import { useProfileStore } from '@/stores/useProfileStore';
import { useNavigation } from '@react-navigation/native';
import { RootNavigatorParamsForNavigator } from '@/navigators'

const profileImage = require('@assets/fotoBonita.jpg');
const backgroundImage = require('@assets/background.png');

const achivements = [
  {
    id: "a8b0e882-7eb9-4810-b33d-f6d3159d2bdd",
    title: "Voce não esqueceu dos seus remédios por 3 dias consecutivos!",
    unlocked: true
  },
  {
    id: "82814bb4-2bc4-4129-b7c4-e811fe42636a",
    title: "Voce não esqueceu dos seus remédios por 7 dias consecutivos!",
    unlocked: true
  },
  {
    id: "62032b8d-d934-4852-b4ec-2be96ddd96f5",
    title: "Voce não esqueceu dos seus remédios por 15 dias consecutivos!",
    unlocked: false
  },
  {
    id: "eb7106d4-b4d5-4542-9623-f1313d885726",
    title: "Voce não esqueceu dos seus remédios por 30 dias consecutivos!",
    unlocked: false
  }
];

export function ProfileScreen() {
  const navigator = useNavigation<RootNavigatorParamsForNavigator>();

  const { profile } = useProfileStore()

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={styles.topBox} source={backgroundImage}>
        <TouchableRipple style={styles.editButton} onPress={() => {
          navigator.navigate('Profile/Edit')
        }}>
          <Icons.Edit size={36} color={'#FFF'} />
        </TouchableRipple>
        <View style={styles.pictureBox}>
          <Image
            style={styles.profilePicture}
            source={profileImage}
          />
        </View>
        <Text style={styles.profileName}>{profile.name}</Text>
      </ImageBackground>
      <View style={styles.bottomBox}>
        <Text style={styles.achievementsTitle}>Conquistas</Text>
        <FlatList
          style={styles.achievementsList}
          data={achivements}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            <Achievement title={item.title} unlocked={item.unlocked} />
          }
        />
        <Button
          mode="contained"
          buttonColor="#ED8A2F"
          textColor="#FFF"
          style={styles.buttonPremium}
        >
          <Text>Ativar Premium</Text>
        </Button>
      </View>
    </View>
  );
}

function Achievement(props) {
  const color = props.unlocked ? '#3454a4' : '#7c90bf';

  return (
    <View style={{ flexDirection: 'row', padding: 6 }}>
      <View style={{ width: 48, height: 48, borderWidth: 6, backgroundColor: color, borderColor: color, borderRadius: 5, marginRight: 8 }}>
        {props.unlocked ?
          <Icons.Badge
            size={36}
            fill={true}
            color={"#FFF"}
          /> : null
        }
      </View>
      <View style={{ padding: 6 }}>
        <Text style={{ fontSize: 15 }}>{props.title}</Text>
      </View>
    </View>
  );
}
