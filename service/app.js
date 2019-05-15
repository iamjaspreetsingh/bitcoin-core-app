
//http://localhost:3000/complain/0x579B5D46470b501D9Aa3765B00ac86C07B5c5fB7/dsdsd/dsdsd/77777/ass/cf39d15b3f9bb5e776a97060f81ad6ea949459c0fb9e412f2cf61f2ee99e1153
// http://localhost:3000/changeStatus/5/2/0x579B5D46470b501D9Aa3765B00ac86C07B5c5fB7/cf39d15b3f9bb5e776a97060f81ad6ea949459c0fb9e412f2cf61f2ee99e1153
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');


const Client = require('bitcoin-core');
// const client = new Client({
//     ssl: {
//       enabled: true,
//       strict: false
//     }
//   });
  const client = new Client({ port: 18333 });

  
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const dataToSend = JSON.stringify({
    "title": "The Basics - Networking",
    "description": "Your app fetched this from a remote endpoint!",
    "movies": [
      { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
      { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
      { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
      { "id": "4", "title": "Inception", "releaseYear": "2010" },
      { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
    ]
  });

app.get('/', function(req, res){
    console.log("dsd");

   res.send(dataToSend);
});

app.get('/latestBlock',function(req, res){
   
  RegisterComplaint();
    
});



function RegisterComplaint(req,res){
    client.getBlockchainInformation().then(function(response) {
        req.setTimeout(0) //  timeout

        var obj = JSON.parse(response);

        console.log("Success!", obj.blocks);
      //  res.send(response);

      }, function(error) {
        console.error("Failed!", error);
      });


    // client.getBlockchainInformation( function (err, hash) {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
	// 	console.log('Latest block info ' + hash);
	// 	res.send(hash);

    //     return hash;
    // });

}
app.listen(3000);
