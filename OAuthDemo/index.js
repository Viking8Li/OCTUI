const express = require('express'); 
const axios = require('axios'); 
const app = express(); 

const clientID = '453beeb60d91af0b5fa9' 
const clientSecret = 'fa81dc02a873dcadd006a0a44c258f7975e97109' 

app.set('view engine', 'ejs'); 
var access_token = ""; 

app.get('/', function(req, res) { 
  res.render('pages/index',{client_id: clientID}); 
}); 

app.get('/github/callback', (req, res) => { 
    // The req.query object has the query params that were sent to this route. 
    const requestToken = req.query.code 
    console.log(requestToken)
    axios({ 
      method: 'post', 
      url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}
            &code=${requestToken}`, 
      // Set the content type header, so that we get the response in JSON 
      headers: { 
           accept: 'application/json' 
      } 
    }).then((response) => { 
      access_token = response.data.access_token 
      res.redirect('/success'); 
    }) 
  }) 
  app.get('/success', function(req, res) { 
    axios({ 
      method: 'get', 
      url: `https://api.github.com/user`, 
      headers: { 
        Authorization: 'token ' + access_token 
      } 
    }).then((response) => { 
      res.render('pages/success',{ userData: response.data }); 
    }) 
  }); 


app.listen(2400 , () => console.log('App listening on port 2400')); 