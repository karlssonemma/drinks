import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';


const Input = ({ handlePress, handleInput }) => {
    


    return(
        <View>
            <Text>Search by ingredient</Text>
            <TextInput placeholder='Ingredient' style={styles.input} onChange={text => handleInput(text)} value={text} />
            <TouchableOpacity onPress={() => handlePress()} accessibilityLabel='Tap to submit' accessibilityHint='search'>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
      padding: 10,
      backgroundColor: '#1111'
    },
  });

export default Input;