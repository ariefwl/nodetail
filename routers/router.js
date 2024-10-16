const express = require("express");
const router = express.Router();
const { Mahasiswa } = require('../models');
// const conn = require("../config/db");


// Route: Home
router.get('/', async (req, res) => {
    const mhs = await Mahasiswa.findAll();
    res.render('index', { mhs });
  });

// Route: Form Tambah Mahasiswa
router.get('/mhs/new', (req, res) => {
    res.render('add');
  });

// Route: Tambah User
router.post('/mhs', async (req, res) => {
    await Mahasiswa.create(req.body);
    res.redirect('/');
  });

// Route untuk menampilkan form edit user
router.get('/mhs/:id/edit', async (req, res) => {
  const mhs = await Mahasiswa.findByPk(req.params.id);
  res.render('edit', { mhs });
});

// Route PUT untuk update data mahasiswa
router.put('/mhs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, jurusan, telepon } = req.body;

    // Update mahasiswa berdasarkan ID
    await Mahasiswa.update(
      { name, jurusan, telepon },
      { where: { id } }
    );

    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error updating data');
  }
});

// Route: Hapus User
router.delete('/mhs/:id', async (req, res) => {
  await Mahasiswa.destroy({
    where: { id: req.params.id }
  });
  res.redirect('/');
});

module.exports = router;
