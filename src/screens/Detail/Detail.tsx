import React, {FC} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TextTitle} from '../../components/';

import {useDispatch, useSelector} from 'react-redux';

import {startFetchingPokemon} from '../../redux/Numbers/Numbers.reducer';

import detailScreenSelector from './Detail.selector';

const Home: FC = () => {
  const dispatch = useDispatch();
  const detailScreenData = useSelector(detailScreenSelector);
  const dispatchFetchPokemon = () => dispatch(startFetchingPokemon());

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <TextTitle testID={'pokemonDetailLabel'}>Pokemon Detail</TextTitle>
        <Image
          testID={'pokemonImage'}
          style={styles.image}
          source={{uri: detailScreenData?.pokemon?.avatar}}
          accessibilityLabel={'This is a pokemon'}
        />
        <TextTitle>{detailScreenData?.pokemon?.name}</TextTitle>
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
  textContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default Home;
