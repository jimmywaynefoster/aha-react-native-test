import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { RootParamList } from '../types/navigation';
import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';
import { DetailResponse } from '../types/responseDetail';
import Typography from '../components/Typography';
import { Rating } from 'react-native-ratings';

function Detail() {
  const { params } = useRoute<RouteProp<RootParamList, 'DETAIL'>>();
  const id = params.id;

  const { data, isLoading } = useQuery(['doctor', id], async (): Promise<DetailResponse> => {
    const res = await api.get(`/api/v1/provider-search/search-detail?npi=${id}`);
    return res.data;
  });


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

  const provider = data.response.provider[0];
  const location = data.response.locations[0];

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileLeft}>
          <Image
            source={{ uri: provider.photo_profile_url }}
            style={styles.image}
          />
          <View style={styles.rating}>
            <Rating
              ratingCount={5}
              readonly
              imageSize={20}
              startingValue={Number(provider.star_rating_average?.toFixed(1) || 0)}
            />
            <Typography style={styles.ratingText} variant="body2">
              {provider.star_rating_count || 0} ratings, {provider.star_rating_average?.toFixed(1) || 0} avg
            </Typography>
          </View>
        </View>
        <View>
          <Typography variant="title">{data.response.specialties[0].specialty}</Typography>
          <Typography variant="body">{location.address_line1 || '-'}</Typography>
          <Typography variant="body">{location.address_line2 || '-'}</Typography>
          <Typography variant="body">{location.city}, {location.state_code} {location.zip_code}</Typography>

          <Typography style={styles.phone} variant="body">{location.phone_number}</Typography>
        </View>
      </View>
      <View style={styles.insurance}>
        <Typography variant="title">Insurance Accepted</Typography>
        <Typography color="textSecondary" variant="body2">
          {data.response.insurances.map((item) => item.insurance_accepted).join(', ')}
        </Typography>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: 'white'
  },
  phone: {
    marginTop: 12
  },
  image: {
    height: 130,
    width: 130,
  },
  profile: {
    flexDirection: 'row'
  },
  insurance: {
    marginTop: 30
  },
  profileLeft: {
    marginRight: 20,
  },
  rating: {
    marginTop: 20
  },
  ratingText: {
    textAlign: 'center'
  }
});

export default Detail;