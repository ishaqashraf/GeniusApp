import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const WorkshopItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() =>
        navigation.navigate('WorkshopDetailScreen', {workshop: item})
      }>
      <Image source={{uri: item.image}} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{`$${item.price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 8,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontWeight: 'bold',
  },
  duration: {
    fontSize: 12,
    marginTop: 4,
  },
  description: {
    marginTop: 8,
    fontSize: 10,
  },
  price: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default WorkshopItem;
