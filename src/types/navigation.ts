import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ScreenNavigationProp = NativeStackNavigationProp<RootParamList>;

export type RootParamList = {
  "LIST": undefined;
  "DETAIL": { id: string, title: string };
}