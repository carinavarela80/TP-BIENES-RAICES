fetch('https://fb-rest-server-node.herokuapp.com/api/ping')
    .then(resp => resp.json())
    .then(resp_data => console.log(resp_data) );