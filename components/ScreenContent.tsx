import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Customer, themes } from 'themes';

import Button from './Button';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  const [customerName, setCustomerName] = useState<Customer>('mercy');

  useEffect(() => {
    AsyncStorage.getItem('theme').then((themeFromStorage) => {
      if (themeFromStorage === 'mercy' || themeFromStorage === 'memorial') {
        setCustomerName(themeFromStorage);
      } else {
        AsyncStorage.setItem('theme', 'mercy');
      }
    });
  }, []);

  const handlePress = () => {
    if (customerName === 'mercy') {
      AsyncStorage.setItem('theme', 'memorial');
      setCustomerName('memorial');
    } else {
      AsyncStorage.setItem('theme', 'mercy');
      setCustomerName('mercy');
    }
  };

  return (
    <View className={styles.container}>
      <View style={themes[customerName]}>
        <Text className="text-xl font-bold text-primary">Primary color</Text>
        <Text className="text-secondary text-xl font-bold">Secondary color</Text>
        <Button className="bg-secondary rounded-md" title="Toggle theme" onPress={handlePress} />
        {children}
        <Text className="mt-4 text-center text-2xl text-gray-800">{customerName}</Text>
      </View>
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
