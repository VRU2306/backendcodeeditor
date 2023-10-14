const express = require('express');
const path = require("path");
const app = express();
const port = 3000;
const cors = require('cors'); 


app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});