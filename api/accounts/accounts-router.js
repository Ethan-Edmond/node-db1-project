const router = require('express').Router();
const {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
} = require('./accounts-middleware');
const Accounts = require('./accounts-model');

// getAll, getById, create, updateById, deleteById 
router.get('/', (req, res, next) => {
  Accounts.getAll()
    .then(accounts => {
      res.json(accounts);
    })
    .catch(next);
});

router.get('/:id', checkAccountId, (req, res, next) => {
  Accounts.getById(req.params.id)
    .then(account => {
      res.json(account);
    })
    .catch(next);
});

router.post('/', checkAccountPayload, checkAccountNameUnique, (req, res, next) => {
  Accounts.create(req.body)
    .then(console.log)
    .catch(next);
  res.json({res: 'res'});
});

router.put('/:id', checkAccountId, checkAccountPayload, checkAccountNameUnique, (req, res, next) => {
  Accounts.updateById(req.params.id, req.body)
    .then(console.log)
    .catch(next);
  res.json({res: 'res'});
});

router.delete('/:id', checkAccountId, (req, res, next) => {
  Accounts.deleteById(req.params.id)
    .then(console.log)
    .catch(next);
  res.json({res: 'res'});
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
})

module.exports = router;
