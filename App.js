
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import EmailValidator from 'aj-email-validator';
export default class SignupScreen extends Component {

  state = {
    email: '',
  }

  signup(email) {

    if (EmailValidator(email) == true) {
      alert('Email is valid')
    }
    else {
      alert('Email is not valid')
    }
  }

  render() {
    return (

      <View>
        <View style={styles.EmailField}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={(emailtxt) => this.setState({ email: emailtxt })} />

        </View>
        <TouchableOpacity style={styles.SignupButton}
          onPress={() => this.signup(this.state.email)}>
          <Text style={styles.caption}>Signup</Text>
        </TouchableOpacity>
      </View>




    )

  }
}

const styles = StyleSheet.create({


  EmailField: {
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',

  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    fontSize: 14,
    fontFamily: "roboto-regular",
    color: 'black',
  },
  SignupButton: {
    color: 'white',
    margin: 20,
    height: 50,
    backgroundColor: "#00bcd4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 5,
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption:
  {
    color: 'white',
  }

});
