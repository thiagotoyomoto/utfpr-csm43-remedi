import { useEffect, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

import { auth } from '@/auth';
import { SignNavigator } from '@/navigators';
import { useMedicationsStore, useProfileStore, useUserStore, useUserMedicationsStore, useUserTodayMedicationsStore } from '@/stores';
import { Medication, UserMedication, UserTodayMedication } from '@/domain';
import { supabase } from '@/lib/supabase';
import { parse } from 'date-fns';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  })
})

export default function App() {
  const { user, setUser } = useUserStore();
  const { setProfile } = useProfileStore();
  const { setMedications } = useMedicationsStore();
  const { setUserMedications } = useUserMedicationsStore();
  const { setUserTodayMedications } = useUserTodayMedicationsStore();
  const [isLoading, setLoading] = useState(true);

  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-Regular': Montserrat_400Regular,
    'Montserrat-Bold': Montserrat_700Bold,
    'Gotham-Regular': require('./assets/fonts/Gotham-Book.otf'),
    'Gotham-Bold': require('./assets/fonts/Gotham-Bold.otf'),
  });

  useEffect(() => {
    (async () => {
      await registerForNotifications();

      try {
        const user = await auth.getUser();
        setUser(user);

        const profile = await auth.getProfile();
        setProfile(profile);

        const medications = await loadMedications();
        setMedications(medications);

        const userMedications = await loadUserMedications();
        setUserMedications(userMedications);

        const userTodayMedications = await loadTodayUserMedications();
        setUserTodayMedications(userTodayMedications);

        console.debug(userTodayMedications);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })()
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (isLoading) {
    return null;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <SignNavigator isLogged={!!user} />
      </NavigationContainer>
    </PaperProvider>
  );
}

async function registerForNotifications() {
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
  }
}

async function loadMedications(): Promise<Medication[]> {
  const { data, error } = await supabase.from('medications').select('id,name,leaflet_url');

  return data.map(item => ({
    id: item.id,
    name: item.name,
    leafletUrl: item.leaflet_url
  }));
}

async function loadUserMedications(): Promise<UserMedication[]> {
  const { data, error } = await supabase.from('user_medications').select('user_id,frequency,initial_time,observations,stock,medications(id, name, leaflet_url)');


  return data.map(item => ({
    id: item.user_id,
    medication_id: item.medications.id,
    name: item.medications.name,
    leafletUrl: item.medications.leaflet_url,
    frequency: item.frequency,
    initialTime: item.initial_time,
    observations: item.observations,
    stock: item.stock
  }));
}

async function loadTodayUserMedications(): Promise<UserTodayMedication[]> {
  const { data, error } = await supabase.from('user_today_medications').select('*, medications(name)');

  return data.map(item => {
    return {
      id: item.id,
      name: item.medications.name,
      time: item.time
    }
  });
}
