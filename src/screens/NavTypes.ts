import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Home: undefined;
  Detail: { id: string };
  ToDoForm: { id: string };
};

type HomeStackProp = StackScreenProps<StackParamList, 'Home'>;
type DetailStackProp = StackScreenProps<StackParamList, 'Detail'>;
type FormStackProp = StackScreenProps<StackParamList, 'ToDoForm'>;

type RootStackProp = StackNavigationProp<StackParamList, 'Home'>;

export type {
  HomeStackProp,
  DetailStackProp,
  FormStackProp,
  RootStackProp,
  StackParamList,
};
