import React, { useState, useRef } from 'react';
import { ScrollView, Text, TouchableOpacity, FlatList, View, TextInput } from 'react-native';
import Input from '../components/Input';
import SearchCard from '../components/SearchCard';

const Home = ({ navigation }) => {

    const [drinks, setDrinks] = useState([]);
    const [text, onChangeText] = useState('');

    console.log(navigation)

    const handlePress = async () => {

        let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${text}`)
        let data = await response.json()
        
        data.drinks.map(item => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${item.idDrink}`)
            .then(response2 => response2.json())
            .then(data2 => {
                
                setDrinks(previousState => [...previousState, data2.drinks[0]])
                // array.push(data2.drinks[0])
            })
            .catch(error => console.log('ERROR', error))
        })
    };


    return(
        <ScrollView>
            
            <Text>Search by ingredient</Text>
            <TextInput placeholder='Ingredient' onChangeText={onChangeText} value={text} />
            <TouchableOpacity onPress={() => handlePress()} accessibilityLabel='Tap to submit' accessibilityHint='search'>
                <Text>Submit</Text>
            </TouchableOpacity>
            
            {
                drinks && drinks.map(item => {
                    return(
                        <TouchableOpacity 
                            style={{backgroundColor: 'yellow', marginTop: 10}} 
                            onPress={() => navigation.navigate('Drink', { item: item })}
                            >
                            <SearchCard drink={item} />
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}

export default Home;