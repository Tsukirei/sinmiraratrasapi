
const express = require("express");
const v1Router = require("./v1/routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/users", v1Router);


app.listen(PORT, () => {
     console.log(`Server listening on port ${PORT}`);
    });
