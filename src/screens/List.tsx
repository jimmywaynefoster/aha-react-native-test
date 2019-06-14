import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import DoctorItem from '../components/DoctorItem';
import Typography from '../components/Typography';
import { Doctor } from '../types/doctor';
import { ScreenNavigationProp } from '../types/navigation';
import api from '../utils/api';

function List() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const { data, isLoading } = useQuery(["search-doctor"], async (): Promise<Doctor[]> => {
    const res = await api.get("/api/v1/provider-search/search-doctor?topNumRows=10&longitude=&latitude=&isPcp=true");
    return res.data?.response?.matches || [];;
  });

  const items = data || [];

  const renderItem = ({ item }: { item: Doctor }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DETAIL", { id: item.npi, title: item.whole_name })}
      >
        <DoctorItem
          item={item}
        />
      </TouchableOpacity>
    )
  };

  if (isLoading) {
    return (
      <View>
        <Typography variant='h2'>Loading</Typography>
      </View>
    )
  }

  if (!data) {
    return (
      <View>
        <Typography variant='h2'>No data</Typography>
      </View>
    )
  }

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.npi}
      style={{ backgroundColor: 'white' }}
    />
  );
}

export default List;