import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import WorkshopItem from '../../atoms/WorkshopItem/WorkshopItem';

const WorkshopList = ({workshops}) => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={workshops}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <WorkshopItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
  },
});

export default WorkshopList;
