const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {

    const allCategories = await Category.findAll({
      include: [Product]
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.get('/:id', async (req, res) => {
  try {

    const oneCategory = await Category.findByPk(req.params.id, {
      include: [Product]
    });
    res.status(200).json(oneCategory);
  } catch (err) {
    res.status(500).json(err)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err)
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
          id: req.params.id
      }
    })
    res.status(200).json(updateCategory)
  } catch (err) {
    res.status(500).json(err)
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const delCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(delCategory)
  } catch (err) {
    res.status(500).json(err)
  }
  // delete a category by its `id` value
});

module.exports = router;
