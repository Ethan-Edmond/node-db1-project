const db = require('../../data/db-config');

const getAll = async () => {
  return await db('accounts');
};

const getById = async id => {
  return await db('accounts').where({id}).first();
};

const create = async account => {
  const newId = await db('accounts').insert(account);
  return await getById(newId);
};

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  return 'updateById wired';
};

const deleteById = async id => {
  // DO YOUR MAGIC
  return 'deleteById wired';
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
