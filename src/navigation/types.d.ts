import type {NativeStackScreenProp } from '@react-navigation/native-stack';
import {PAGE} from '../constants/page.constants';

export type RootStackParamList = {
  Home: undefined;
  Explore: undefined;
  Profile: undefined;
};

export type HomeScreenNavProp = NativeStackScreenProp<
  RootStackParamList,
  'HomeScreen'
>;

export type ExploreScreenNavProp = NativeStackScreenProp<
  RootStackParamList,
  'ExploreScreen'
>;

export type ProfileScreenNavProp = NativeStackScreenProp<
  RootStackParamList,
  'ProfileScreen'
>;