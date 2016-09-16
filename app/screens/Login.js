import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  formValueSelector,
  reduxForm,
  Field,
} from 'redux-form'

import { actions } from '../modules/session'

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native'

class TextField extends Component {
  render(){
    const { input: { value, onChange } } = this.props;
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(value) => onChange(value)}
        underlineColorAndroid="transparent"
        selectTextOnFocus={true}
        placeholder={this.props.name}
        {...this.props}
      />
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit() {
    const { rdxForm, dispatch, navigator } = this.props

    dispatch(actions.loginUser(rdxForm.email))
    .catch(() => {
      Alert.alert('Invalid Email', 'The email you provided is bogus')
      return false
    })
    .then((success) => {
      if(success) navigator.push({ screen: 'LoginSuccess' })
    })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Field name="email" component={TextField} />
        <Field name="password" secureTextEntry component={TextField} />
        <TouchableOpacity onPress={this.submit} >
          <Text style={styles.welcome}>
            We are gonna log you in.
          </Text>
        </TouchableOpacity>
      </ScrollView>
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

const formName = 'login'
const form = reduxForm({ form: formName })(Login)
const selector = formValueSelector(formName)

const mapStateToProps = (state) => ({
  rdxForm: {
    email: selector(state, 'email'),
    password: selector(state, 'password'),
  }
})

export default connect(mapStateToProps)(form)
