import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, Image } from 'react-native';



const Drink = ({ navigation, route }) => {

    const [ingredients, setIngredients] = useState([]);
    const [measurement, setMeasurement] = useState([]);


    let drink = route.params.item;
    console.log(drink)

    useEffect(() => {
        let arr = [
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
            drink.strIngredient5,
            drink.strIngredient6,
            drink.strIngredient7,
            drink.strIngredient8,
            drink.strIngredient9,
            drink.strIngredient10,
            drink.strIngredient11,
            drink.strIngredient12,
            drink.strIngredient13,
            drink.strIngredient14,
            drink.strIngredient15,
        ];

        arr.map(item => {
            if(item !== null) {
                console.log(item)
                setIngredients(previousState => [...previousState, item])
            }
        })
    }, [])

    useEffect(() => {
        let arr = [
            drink.strMeasure1,
            drink.strMeasure2,
            drink.strMeasure3,
            drink.strMeasure4,
            drink.strMeasure5,
            drink.strMeasure6,
            drink.strMeasure7,
            drink.strMeasure8,
            drink.strMeasure9,
            drink.strMeasure10,
            drink.strMeasure11,
            drink.strMeasure12,
            drink.strMeasure13,
            drink.strMeasure14,
            drink.strMeasure15,
        ];

        arr.map(item => {
            if(item !== null) {
                console.log(item)
                setMeasurement(previousState => [...previousState, item])
            }
        })
    }, [])


    return(
        <ScrollView>
            <Text>{drink.strDrink}</Text>
            <Image 
                source={{ uri: drink.strDrinkThumb }}
                style={{width: 200, height: 200}}
            />
           
            {
                ingredients && ingredients.map((item, index) => {
                    return(
                        <Text>{measurement[index]} {item}</Text>
                    )
                })
            }

        <Text>{drink.strInstructions}</Text>

        </ScrollView>
    )
}

export default Drink;