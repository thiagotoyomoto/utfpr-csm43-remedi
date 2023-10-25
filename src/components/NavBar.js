import { React } from "react";
import { View, Image, Pressable } from 'react-native';
import { styles } from "../styles/NavBarStyle.js";

import HomeIcon from '../../assets/icons/home.svg';
import PersonIcon from '../../assets/icons/person.svg';
import PrescriptionsIcon from '../../assets/icons/prescriptions.svg';
import PackageIcon from '../../assets/icons/package.svg';

export function NavBar() {
  return (
    <View style={styles.navBlock}>
      <Pressable>
        <HomeIcon width={36} height={36} fill='#2E7FAB' /> 
      </Pressable>
      <Pressable>
        <PersonIcon width={36} height={36} fill='#2E7FAB' /> 
      </Pressable>
      <Pressable>
        <PrescriptionsIcon width={36} height={36} fill='#2E7FAB' /> 
      </Pressable>
      <Pressable>
        <PackageIcon width={36} height={36} fill='#2E7FAB' /> 
      </Pressable>
    </View>
  );
}