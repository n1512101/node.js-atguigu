const express = require('express');
const router = express.Router();
const db = require('../../db/db')
const accountModel = require('../../models/accountModel')
const dayjs = require('dayjs')
const checkLoginMiddleware = require('../../middlewares/checkLoginMiddle')

router.get('/', (req, res) => {
  res.redirect('/account')
})

/* GET home page. */
router.get('/account', checkLoginMiddleware, async function (req, res, next) {
  try {
    let accounts = await accountModel.find().sort({time: -1})
    res.render('list', { accounts: accounts, dayjs: dayjs })
  } catch (error) {
    res.status(500).send('fail to read data.')
  }
});

router.get('/account/create', checkLoginMiddleware, function (req, res, next) {
  res.render('create')
})

router.post('/account', checkLoginMiddleware, async function (req, res) {
  try {
    await accountModel.create({
      ...req.body,
      time: dayjs(req.body.time).toDate()
    })
  } catch (error) {
    res.status(500).send('fail to insert a data')
    return
  }
  res.render('success', { msg: 'success to add a record.', url: '/account' })
})

router.get('/account/:id', checkLoginMiddleware, async function (req, res) {
  let id = req.params.id
  try {
    await accountModel.deleteOne({ _id: id });
    res.render('success', { msg: 'success to delete.', url: '/account' })
  } catch (error) {
    res.status(500).send('fail to delete data.')
  }
})

module.exports = router;
