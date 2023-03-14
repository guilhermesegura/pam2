import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native'

const AstonMartin = () => {
  return (
    <ScrollView>
      <View>
        <Text
        style={{
          fontSize: 50,
          alignSelf: "center",
          color: "green",
        }}>
          Aston Martin
        </Text>
        <Image
          source={require("./assets/aston.jpg")}
          style={{width: 300, height: 210, alignSelf: "center"}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 5,
          margin: 15,
          width: 300.5,
          alignSelf: "center"
        }}
        defaultValue="Digite Aqui"
      />

    </ScrollView>
  )
}

export default AstonMartin;