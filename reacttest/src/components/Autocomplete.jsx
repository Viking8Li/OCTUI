import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Autocomplete() {
  const [activeSuggestion , setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState([])


  const onChange = e => {
   
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  const onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  const getData = () => {
  console.log("getData")
  axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            var temp = []
            res.data.map((ob)=>{suggestions.push(ob.name)})
            // setSuggestions(temp => [...temp])
            console.log(suggestions)
            // console.log(temp)
        })
        .catch(err => console.log(err))
  };

  useEffect(() => {
    getData();
  },[]);


  return (
      
    <div className="wrapper">
      <h5>Try typing these words</h5>
      <br />
      <input
          type="text"
          onChange={onChange}
          value={userInput}
        />
    </div>
  )
}

export default Autocomplete