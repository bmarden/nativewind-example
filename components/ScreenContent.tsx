import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import Button from './Button';
import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('theme').then((themeFromStorage) => {
      if (themeFromStorage) {
        setTheme(themeFromStorage);
      } else {
        AsyncStorage.setItem('theme', 'mercy');
      }
    });
  }, []);

  const handlePress = () => {
    if (theme === 'mercy') {
      AsyncStorage.setItem('theme', 'memorial');
      setTheme('memorial');
    } else {
      AsyncStorage.setItem('theme', 'mercy');
      setTheme('mercy');
    }
  };

  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      <Button className="rounded-md bg-blue-400" title="Toggle theme" onPress={handlePress} />
      {children}
      <Text className="mt-4 text-center text-2xl text-gray-800">{theme}</Text>
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
