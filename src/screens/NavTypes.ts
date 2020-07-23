import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Home: undefined;
  Detail: { id: string };
  Form: { id: string };
};

type HomeStackProp = StackScreenProps<StackParamList, 'Home'>;
type DetailStackProp = StackScreenProps<StackParamList, 'Detail'>;
type FormStackProp = StackScreenProps<StackParamList, 'Form'>;

type RootStackProp = StackNavigationProp<StackParamList, 'Home'>;

export type {
  HomeStackProp,
  DetailStackProp,
  FormStackProp,
  RootStackProp,
  StackParamList,
};
