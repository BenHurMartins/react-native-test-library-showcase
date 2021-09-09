import React, {FC} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import Pokemon from '../models/Pokemon';

export type TextProps = {
  testID?: string;
  item: Pokemon;
};

const ListItemPokemon: FC<TextProps> = ({testID, item}) => {
  const pokemonCode = item.url?.match(/\d+/g) ?? [0, 1];
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonCode[1]}.png`;
  const divider = '#000000';
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: imageURL}}
          accessibilityRole={'image'}
        />
        <Text style={styles.title} testID={testID ?? ''}>
          {item.name}
        </Text>
      </View>
      <View style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
    resizeMode: 'contain',
  },
  divider: {
    backgroundColor: '#000',
    height: 1,
    width: '90%',
    alignSelf: 'center',
  },
});

export default ListItemPokemon;
