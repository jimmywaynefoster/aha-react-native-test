import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './screens/List';
import Detail from './screens/Detail';
import colors from './components/colors';
import { RootParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
      >
        <Stack.Screen
          name="LIST"
          component={List}
          options={{ title: 'Providers' }}
        />
        <Stack.Screen
          name="DETAIL"
          component={Detail}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
