import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  className?: string;
  textClassName?: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, title, className = '', textClassName = '' }) => {
  return (
    <TouchableOpacity className={`rounded-md px-4 py-2 ${className}`} onPress={onPress}>
      <Text className={`text-center font-semibold ${textClassName}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
