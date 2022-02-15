import React, {useState} from 'react';
import { StyleSheet, Alert, View, TouchableWithoutFeedback, FlatList, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
 
  const [todos, setTodos] = useState([
    {text:'Prepare Resume', key:'1'},
    {text:'Prepare for Interview', key:'2'},
    {text:'Prepare Self Intro', key:'3'},
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
   if(text.length > 3){
    setTodos((prevTodos) => {
      return [
        {text, key:Math.random().toString()},
        ...prevTodos
      ]
    });
   }
   else{
    Alert.alert('OOPS', 'Todo must be over 3 characters long', [
      {text: 'Understood', onPress: () => console.log('alert closed') }
    ]);
   }
  }

  return (
  <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed');
  }}>
    <View style={styles.container}>
     <Header></Header>
     <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
       <View style={styles.list}>
         <FlatList 
         data={todos}
         renderItem={({ item }) => (
           <TodoItem item={item} pressHandler={pressHandler}/>
         )}>
         </FlatList>
       </View>
     </View>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop:50,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: 20
  },
  content:{
    padding:40,
    flex:1
  },
  list:{
    marginTop:20,
    flex:1
  }
  
});
