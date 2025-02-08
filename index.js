require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/courses");
const { adminRouter } = require("./routes/admin");
const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/courses", courseRouter);
app.use("/admin", adminRouter);

async function main() {
    await mongoose.connect(process.env.MONGO_CONNECTION);
    console.log("connected");
    app.listen(3000);
}

main();