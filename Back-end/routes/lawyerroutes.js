const express = require('express')
const lawyerRouter = express.Router()
const { LawyerModel } = require('../models/lawyermodel')


lawyerRouter.get('/all', (req, res) => {
    res.send('working')
    console.log('checking');
})

// C -> Create
lawyerRouter.post('/create', async (req, res) => {
    const payload = req.body;
    const post = new LawyerModel(payload)
    await post.save()
    res.send({ "msg": "product added" })
})

// R -> Read
lawyerRouter.get('/', async (req, res) => {
    const users = await LawyerModel.find()
    res.send(users)
})
//to catch the id of img
lawyerRouter.get('/:id', async (req, res) => {
    const _id = req.params.id;
    // console.log(_id);
    const users = await LawyerModel.find({_id})
    res.send(users)

})
// U -> Update
lawyerRouter.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const payload = req.body;
        await LawyerModel.findByIdAndUpdate({ _id: id }, payload)
        res.send({ 'msg': `Product with id: ${id} has been updated` })
    } catch (err) {
        res.send({ "msg": "somthing went wrong", "error": err.message })
    }
})

// D -> Delete
lawyerRouter.delete('/delete/:_id', async (req, res) => {
    const id = req.params._id;
    await LawyerModel.findByIdAndDelete({ _id })
    res.send({ 'msg': `Product with id: ${_id} has been deleted` })
})



module.exports = { lawyerRouter }

