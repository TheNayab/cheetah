const app = require("./App.js");
const connectToDb = require("./configure/db.js");

connectToDb();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
