import React, {FC} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import Pressable from '../../components/Pressable';

import {useDispatch, useSelector} from 'react-redux';

import {
  decrementCounter,
  incrementCounter,
  startFetchingPokemon,
} from '../../redux/Numbers/Numbers.reducer';

import homeScreenSelector from './Home.selector';

const Home: FC = () => {
  const dispatch = useDispatch();
  const homeScreenData = useSelector(homeScreenSelector);
  const dispatchIncrement = () => dispatch(incrementCounter());
  const dispatchDecrement = () => dispatch(decrementCounter());
  const dispatchFetchPokemon = () => dispatch(startFetchingPokemon());

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Your current count is:</Text>
        <Text testID={'count'}>{homeScreenData?.count}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => dispatchDecrement()}
          title={'Decrement Counter'}
          testID={'decrementCount'}
        />
        <Button
          onPress={() => dispatchIncrement()}
          title={'Increment Counter'}
          testID={'incrementCount'}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Your current pokemon is:</Text>
        <Image
          testID={'pokemonImage'}
          style={styles.image}
          source={{uri: homeScreenData?.pokemon?.avatar}}
          accessibilityLabel={'This is a pokemon'}
        />
        <Text style={styles.title}>{homeScreenData?.pokemon?.name}</Text>
      </View>
      <View>
        <Pressable
          testID={'getPokemon'}
          onPress={() => dispatchFetchPokemon()}
          title={'Get Pokemon'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 10,
  },
});

export default Home;
