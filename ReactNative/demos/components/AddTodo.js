import React, {useState} from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, FlatList, Button } from 'react-native';


export default function AddTodo({submitHandler}) {
  const [text, setText] = useState('')
  const changeHandler = (val) => {
      setText(val)
  }
  return (
    <View>
        <TextInput 
            style={styles.input}
            placeholder='New Todo......'
            onChangeText={changeHandler}
            value={text}> 
        </TextInput>
        <Button onPress={()=>{submitHandler(text); setText('asdf');}} title='add todo' color='coral'></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})
