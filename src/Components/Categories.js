import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from "../Data/categories.json"

const Categories = () => {
  return (
    <FlatList 
        data={categories}
        keyExtractor={item => item}
        renderItem={({item})=> <View><Text>{item}</Text></View>}
                
    />
  )
}

export default Categories

const styles = StyleSheet.create({})