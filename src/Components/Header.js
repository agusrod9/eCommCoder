import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const Header = ({title="Titulo x defecto"}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.blueBack,
        width:"100%",
        height:80,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:20
    }
})