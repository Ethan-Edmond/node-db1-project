const {
  getAll, getById
} = require('./accounts-model');

// getAll, getById, create, updateById, deleteById
exports.checkAccountPayload = (req, res, next) => {
  const {name, budget} = req.body;
  if (name === undefined || budget === undefined) {
    res.status(400).json({
      message: 'name and budget are required'
    });
  } else {
    if (typeof name !== 'string') {
      res.status(400).json({
        message: 'name of account must be a string'
      });
    } else {
      if (name.trim().length > 100 || name.trim().length < 3) {
        res.status(400).json({
          message: 'name of account must be between 3 and 100'
        });
      } else {
        if (typeof budget !== 'number') {
          res.status(400).json({
            message: 'budget of account must be a number'
	  });
	} else {
          if (budget > 1000000 || budget < 0) {
            res.status(400).json({
              message: 'budget of account is too large or too small'
	    });
	  } else {
            next();
	  }
	}
      }
    }
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  getAll()
    .then(obj => {
      console.log("In checkAccountNameUnique: ", obj);
      next();
    })
    .catch(next);
}

exports.checkAccountId = (req, res, next) => {
  getById(req.params.id)
    .then(account => {
      if (account === undefined) {
        res.status(404).json({
          message: 'account not found'
	})
      } else {
        req.account = account;
        next();
      }
    })
    .catch(next);
}
