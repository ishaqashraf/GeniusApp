import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import LayoutTemplate from '../../templates/LayoutTemplate/LayoutTemplate';
import Header from '../../atoms/Header/Header';

const WorkshopDetail = () => {
  const route = useRoute();
  const {workshop} = route.params;

  return (
    <LayoutTemplate>
      <Header title={'Workshop Detail'} back onRightAction={() => {}} />
      <View style={styles.container}>
        <Image source={{uri: workshop.image}} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{workshop.title}</Text>
          <Text style={styles.duration}>{workshop.duration}</Text>
          <Text style={styles.description}>{workshop.description}</Text>
          <Text style={styles.price}>{`$${workshop.price}`}</Text>
        </View>
      </View>
    </LayoutTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  detailsContainer: {
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  duration: {
    fontSize: 14,
    marginTop: 8,
  },
  description: {
    marginTop: 16,
    fontSize: 16,
  },
  price: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WorkshopDetail;
