import React, {FC} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button, Pressable, TextTitle, PressableRound} from '../../components/';

import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

import {
  decrementCounter,
  incrementCounter,
} from '../../redux/Numbers/Numbers.reducer';
import {startFetchingPokemon} from '../../redux/Pokemons/Pokemons.reducer';
import homeScreenSelector from './Home.selector';
import {RootStackParamList} from '../../routes/RootStackParams';
import {StackNavigationProp} from '@react-navigation/stack';

type HomeScreenRouteProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeScreenRouteProp>();
  const homeScreenData = useSelector(homeScreenSelector);
  const dispatchIncrement = () => dispatch(incrementCounter());
  const dispatchDecrement = () => dispatch(decrementCounter());
  const dispatchFetchPokemon = () => dispatch(startFetchingPokemon());

  return (
    <SafeAreaView style={styles.container}>
      <TextTitle testID={'labelCurrentCount'}>
        Your current pokemon number is:
      </TextTitle>
      <View style={styles.counterContainer}>
        <PressableRound
          onPress={() => dispatchDecrement()}
          title={'-'}
          testID={'decrementCount'}
        />
        <Text testID={'count'}>{homeScreenData?.count}</Text>
        <PressableRound
          onPress={() => dispatchIncrement()}
          title={'+'}
          testID={'incrementCount'}
        />
      </View>
      <View style={styles.buttonContainer}></View>
      <View style={styles.textContainer}>
        <TextTitle>Your current pokemon is:</TextTitle>
        <Image
          testID={'pokemonImage'}
          style={styles.image}
          source={{uri: homeScreenData?.pokemon?.avatar}}
          accessibilityLabel={'This is a pokemon'}
        />
        <TextTitle>{homeScreenData?.pokemon?.name}</TextTitle>
      </View>
      <View>
        <Pressable
          testID={'getPokemon'}
          onPress={() => dispatchFetchPokemon()}
          title={'Fetch Pokemon'}
        />
        <Pressable
          testID={'navigateList'}
          onPress={() => navigation.navigate('List')}
          title={'List Pokemons'}
        />
      </View>
      {homeScreenData?.pokemon?.name ? (
        <Pressable
          testID={'showPokemonDetail'}
          onPress={() => navigation.navigate('Detail')}
          title={'Show Pokemon Detail'}
        />
      ) : null}
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
  counterContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 10,
  },
});

export default Home;
