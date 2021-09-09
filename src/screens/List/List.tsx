import React, {FC, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {startFetchingPokemonList} from '../../redux/Pokemons/Pokemons.reducer';

import listScreenSelector from './List.selector';

import {ListItemPokemon, InfoCard} from '../../components';

const Home: FC = () => {
  const dispatch = useDispatch();
  const listScreenData = useSelector(listScreenSelector);
  const dispatchFetchPokemonList = () => dispatch(startFetchingPokemonList());

  useEffect(() => {
    dispatchFetchPokemonList();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <InfoCard show={listScreenData.isFetchingPokemonList} />
      <FlatList
        testID={'pokemonList'}
        data={listScreenData.pokemonList}
        onEndReached={dispatchFetchPokemonList}
        onEndReachedThreshold={0.7}
        renderItem={({item, index}) => {
          return (
            <ListItemPokemon
              testID={`listItemPokemon${index}`}
              key={index}
              item={item}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default Home;
