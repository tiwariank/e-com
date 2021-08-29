import express from 'express';
const router = express.Router();


export default class Chat {

    allRoute = () => {
        router.get('/', (req, res, next) => {
            res.send("query chat")
        })

        router.get('/add', (req, res, next) => {
            res.send("add chat")
        })

        router.get('/update', (req, res, next) => {
            res.send("update chat")
        })

        router.get('/delete', (req, res, next) => {
            res.send("delete chat")
        })

        return router
    }
}
