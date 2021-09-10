import React, {FC, useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

export type PressableProps = {
  show: boolean;
};

const InfoCard: FC<PressableProps> = ({show}) => {
  const top = useRef(new Animated.Value(-100)).current;

  const [showComponent, setShowComponent] = useState<boolean>(false);

  useEffect(() => {
    if (show) {
      setShowComponent(true);
    } else {
      setTimeout(() => {
        Animated.timing(top, {
          toValue: -100,
          duration: 500,
          useNativeDriver: false,
        }).start(({finished}) => {
          if (finished) setShowComponent(false);
        });
      }, 1000);
    }
  }, [show]);
  useEffect(() => {
    if (showComponent)
      Animated.timing(top, {
        toValue: 20,
        duration: 500,
        useNativeDriver: false,
      }).start();
  }, [showComponent]);

  return showComponent ? (
    <Animated.View
      style={[
        styles.container,
        {
          top: top,
        },
      ]}>
      <Text style={styles.buttonTitle}>Loading...</Text>
    </Animated.View>
  ) : null;
};

const styles = StyleSheet.create({
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  container: {
    position: 'absolute',
    height: 50,
    alignSelf: 'center',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'rgb(12, 112, 237)',
    zIndex: 10,
    opacity: 0.95,
  },
});

export default InfoCard;
