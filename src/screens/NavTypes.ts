import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Home: undefined;
  Detail: { id: string };
  Edit: { id: string };
};

type HomeStackProp = StackScreenProps<StackParamList, 'Home'>;
type DetailStackProp = StackScreenProps<StackParamList, 'Detail'>;
type EditStackProp = StackScreenProps<StackParamList, 'Edit'>;
type RootStackProp = StackNavigationProp<StackParamList>;

export type {
  HomeStackProp,
  DetailStackProp,
  EditStackProp,
  RootStackProp,
  StackParamList,
};
