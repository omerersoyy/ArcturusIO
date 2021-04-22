import React, { useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Colors from '../../utils/Colors'
import { IGlobalState } from '../abstraction/IGlobalState'
import { Button } from '../components/Button'
import Input from '../components/Input'
import Loading from '../components/Loading'
import { LoginScreenPropTypes } from '../types/ScreensPropTypes'
import { Styles } from './styles/LoginScreenStyles'

const LoginScreen = ({ dispatch, userName, password, fetching }: LoginScreenPropTypes) => {

  const [name, setName] = useState(userName || "")
  const [pw, setPw] = useState(password || "")

  const login = () => {
    dispatch({ type: "LOGIN", userName, password })
  }

  const onChangeText = (source: string, text: string) => {
    if (source === "name") {
      setName(text)
    } else {
      setPw(text)
    }
  }

  return (
    <View style={Styles.container}>
      {
        fetching && <Loading type={"bottom"} />
      }
      <View style={Styles.body}>
        <Input
          placeHolder={"Username"}
          containerStyle={{ marginVertical: 21, borderColor: Colors.white }}
          textStyle={{ color: Colors.white }}
          onChange={(text) => onChangeText("name", text)}
        />
        <Input
          placeHolder={"Password"}
          secure={true}
          containerStyle={{ marginVertical: 21, borderColor: Colors.white }}
          textStyle={{ color: Colors.white }} onChange={(text) => onChangeText("pw", text)} />


        <Button
          disabled={name.length < 3 || pw.length < 4} //dummy validation
          buttonStyle={Styles.buttonContainer}
          textStyle={Styles.buttonText}
          text={'Log In'}
          onPress={() => login()} />

      </View>
    </View>
  );
}

const mapStateToProps = (state: IGlobalState) => {
  return {
    fetching: state.auth.fetching
  }
}

export default connect(mapStateToProps)(LoginScreen)