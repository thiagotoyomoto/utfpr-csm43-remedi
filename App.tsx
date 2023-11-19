import { useEffect, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';

import { useProfileStore, useUserStore } from '@/stores';

import { useWeekDayStore } from '@/stores/useWeekDayStore';
import { auth } from '@/auth';
import { SignNavigator } from '@/navigators';

export default function App() {
  const { user, setUser } = useUserStore();
  const { setProfile } = useProfileStore();
  const { setWeekDay } = useWeekDayStore();
  const [ isLoading, setLoading ] = useState(true);

  useEffect(() => {
    (async () => {
      setWeekDay();
  
      try {
        const user = await auth.getUser();
        console.debug(user)
        const profile = await auth.getProfile();
        console.debug(profile)
  
        setUser(user);
        setProfile(profile);
      } catch(err) {
        console.error(err);
      }

      setLoading(false);
    })()
  }, []);

  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-Regular': Montserrat_400Regular,
    'Montserrat-Bold': Montserrat_700Bold,
    'Gotham-Regular': require('./assets/fonts/Gotham-Book.otf'),
    'Gotham-Bold': require('./assets/fonts/Gotham-Bold.otf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if(isLoading) {
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
