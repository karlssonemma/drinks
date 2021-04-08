import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const SearchCard = ({ drink, navigation }) => {

    return(
        
            <View>
                <Image 
                    source={{ uri: drink.strDrinkThumb }}
                    style={styles.image}
                />
                <Text>{drink.strDrink}</Text>
            </View>
        
    )
}

const styles = StyleSheet.create({
    image: {
      width: 200,
      height: 200
    },
  });

export default SearchCard;