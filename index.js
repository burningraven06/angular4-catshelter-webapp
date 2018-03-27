const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./ng4app/dist/'));
app.listen(port, () => {
  console.log(`Express running on port: ${port}`);
});
