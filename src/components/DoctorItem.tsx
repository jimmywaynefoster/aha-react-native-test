import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Doctor } from '../types/doctor';
import Typography from './Typography';

interface DoctorItemProps {
  item: Doctor;
}

function DoctorItem({ item } : DoctorItemProps) {
  return (
    <View style={styles.container}>
      <View>
        <Typography variant="title">{item.whole_name}</Typography>
        <Typography variant="body2">{item.specialties?.[0]?.specialty}</Typography>
        <Typography variant="body2">{item.address_line1}{item.address_line2 ? `, ${item.address_line2}` : ''}, {item.city} {item.state_code}, {item.zip_code}</Typography>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
});


export default DoctorItem;