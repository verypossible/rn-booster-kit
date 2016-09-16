import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../modules/session'

import {
  formValueSelector,
  reduxForm,
  Field,
} from 'redux-form'

import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

type TextFieldProps = {
  input: Object,
  name: String,
}

const TextField = (props: TextFieldProps) => {
  const { input: { onChange } } = props

  return (
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(value) => onChange(value)}
      underlineColorAndroid="transparent"
      selectTextOnFocus={true}
      placeholder={props.name}
      {...props}
    />
  )
}

type LoginProps = {
  rdxForm: Object,
  dispatch: Function,
  navigator: Object,
}

class Login extends Component {
  constructor(props: LoginProps) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit() {
    const { rdxForm, dispatch, navigator } = this.props
    const redirectAction = () => navigator.push({ screen: 'Login' })

    dispatch(actions.loginUser(rdxForm, redirectAction))
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
