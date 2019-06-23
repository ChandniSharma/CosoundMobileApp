import React from 'react'
import {StyleSheet, Image, Text, View} from 'react-native'
import image from '../../assets/Image/back.png'

export default Card = (props) => {
  return <View style={styles.container}>
    <Image
      source={require('../../assets/Image/back.png')}
      style={styles.image}/>
    <View style={styles.content}>
      <Text style={styles.name}>WALL-E</Text>
      <Text style={styles.description}>WALL-E, short for Waste Allocation Load Lifter Earth-class, is the last robot
        left on Earth. He spends his days tidying up the planet, one piece of garbage at a time. But during 700 years,
        WALL-E has developed a
        personality, and he's more than a little lonely.</Text>
    </View>
  </View>

}


const styles = StyleSheet.create({
  container: {
    marginRight: 8,
    marginLeft: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    maxHeight: 200,
    resizeMode: 'cover'
  },
  content: {
    margin: 6
  },
  name: {
    color: '#1d2429',
    fontSize: 17,
    marginBottom: 8
  }
  ,
  description: {
    fontSize: 14,
    color: '#999999'
  }
})