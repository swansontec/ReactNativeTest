/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { makeContext } from 'airbitz-core-js'
import { makeReactNativeIo } from 'react-native-airbitz-io'

export default class ReactNativeTest extends Component {
  constructor (props) {
    super(props)
    this.state = {}

    makeReactNativeIo()
      .then(io => {
        const airbitz = makeContext({
          apiKey: '6dade5dc24e532fd16e7f369abe4af348c8fe6ca',
          io
        })

        this.setState({ airbitz })
        return airbitz
      })
      .then(context => {
        const account = context.loginWithPassword('bob19', 'Funtimes19')
        this.setState({ account })
        return account
      })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text style={styles.instructions}>
          {this.state.airbitz != null ? 'got airbitz' : 'not airbitz'}
        </Text>
        <Text style={styles.instructions}>
          {this.state.account != null ? 'got account' : 'not account'}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest)
