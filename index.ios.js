/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { makeContext } from 'airbitz-core-js'
import { makeReactNativeIo } from 'react-native-airbitz-io'
import { base64 } from 'rfc4648'

export default class ReactNativeTest extends Component {
  constructor (props) {
    super(props)
    this.state = {}

    makeReactNativeIo()
      .then(io => {
        const context = makeContext({
          apiKey: '6dade5dc24e532fd16e7f369abe4af348c8fe6ca',
          io
        })

        this.setState({ airbitz: context })

        return context.loginWithPassword('bob19', 'Funtimes19')
      })
      .then(account => {
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
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={styles.instructions}>
          {this.state.airbitz != null ? 'got airbitz' : 'not airbitz'}
        </Text>
        <Text style={styles.instructions}>
          {this.state.account != null
            ? 'got account ' + this.state.account.username
            : 'not account'}
        </Text>
        <Text style={styles.instructions}>
          {this.state.airbitz
            ? base64.stringify(this.state.airbitz.io.random(32))
            : '...'}
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
