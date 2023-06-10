import express, { Request, Response } from "express";
import * as mysql from "./lib/mysql";

const app = express();
const port = 5000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    mysql.connect();
});

app.get('/request', (req: Request, res: Response) => {
    res.send(`Server is running`);
});
