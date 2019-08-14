const express = require("express");
const app = express();
const mc = require("./controller");
app.use(express.json());

const PORT = 4000;

app.get("/api/getTees", mc.getTees);
app.put("/api/updateDescription/:id", mc.updateDescription);

app.listen(PORT, () => {
  console.log(`Server popped off on ${PORT}`);
});
