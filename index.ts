import express from "express";
import { } from "test"


export const app = express();

app.get("/maker", (req, res) => {
    console.log("maker");
});



app.listen(8080, () => console.log("maker alive"));



