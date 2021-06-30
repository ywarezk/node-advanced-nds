/**

express server using typescript
@types/express
@types/mongodb

ES6

 */
 
// const express = require('express');
import express, { Application, Request, Response, NextFunction } from 'express';
import { MongoClient } from 'mongodb';

const app: Application = express();

const client = new MongoClient('mongodb://yariv:12345678@localhost:27017');
// client.connect().then()

app.get('/hello', (req: Request, res: Response, next: NextFunction) => {
	res.send('hello');
})

app.listen(3000, () => {
	console.log('we are now listening');
})
 
