const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;
  const { proof, leaf, root} = body; 
  const isInTheList = verifyProof(proof, leaf, root);

  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
