import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Header = ({title, back, onRightAction}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        {back ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../assets/back.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
        ) : (
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
        )}
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onRightAction}>
        <Image
          source={require('../../../assets/filter.png')}
          style={styles.filterIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgb(19, 0, 70)',
  },
  logo: {
    height: 20,
    width: 20,
  },
  title: {
    color: '#fff',
  },
  filterIcon: {
    height: 20,
    width: 20,
  },
});

export default Header;
