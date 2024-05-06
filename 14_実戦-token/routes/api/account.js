var express = require('express');
var router = express.Router();
const db = require('../../db/db')
const accountModel = require('../../models/accountModel')
const dayjs = require('dayjs')
const jwt = require('jsonwebtoken')
let checkTokenMiddleware = require('../../middlewares/checkTokenMiddle')


//Get request to retrieve all accounts
router.get('/account', checkTokenMiddleware, async function (req, res, next) {
  
    try {
      let accounts = await accountModel.find().sort({time: -1})
      res.json({
        code: '0000',
        msg: 'success to read data.',
        data: accounts
      })
    } catch (error) {
      res.json({
        code: '1001',
        msg: 'fail to read data.',
        data: null
      })
    }

});

// Post request to create a new account
router.post('/account', checkTokenMiddleware, async function (req, res) {

  try {
    let accountData = await accountModel.create({
      ...req.body,
      time: dayjs(req.body.time).toDate()
    })
    res.json({
      code: '0000',
      msg: 'success to create data.',
      data: accountData
    })
  } catch (error) {
    res.json({
      code: '1002',
      msg: 'fail to create data.',
      data: null
    })
    return
  }
})

// Delete request to remove a specific account
router.delete('/account/:id', checkTokenMiddleware, async function (req, res) {
  let id = req.params.id
  try {
    await accountModel.deleteOne({ _id: id });
    res.json({
      code: '0000',
      msg: 'success to delete data.',
      data: null
    })
  } catch (error) {
    res.json({
      code: '1003',
      msg: 'fail to delete data.',
      data: null
    })
  }
})

// Get request to retrieve a specific account by id
router.get('/account/:id', checkTokenMiddleware, async function(req, res) {
  let {id} = req.params
  try {
    let accountData = await accountModel.findById(id)
    res.json({
      code: '0000',
      msg: 'success to read data.',
      data: accountData
    })
  } catch (error) {
    res.json({
      code: '1004',
      msg: 'fail to read data.',
      data: null
    })
  }
})

// Patch request to update a specific account by id
router.patch('/account/:id', checkTokenMiddleware, async function(req, res) {
  let {id} = req.params
  try {
    await accountModel.updateOne({_id: id}, req.body)
    try {
      let accountData = await accountModel.findById(id)
      res.json({
        code: '0000',
        msg: 'success to update data.',
        data: accountData
      })
    } catch (error) {
      res.json({
        code: '1004',
        msg: 'fail to read data.',
        data: null
      })
    }
  } catch (error) {
    res.json({
      code: '1005',
      msg: 'fail to update data.',
      data: null
    })
  }
})

module.exports = router;