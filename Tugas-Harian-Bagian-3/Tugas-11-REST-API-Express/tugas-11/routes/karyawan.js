const express = require('express');
const router = express.Router();

//import karyawan controller
const KaryawanController = require('../controllers/KaryawanController');

router.post('/register', KaryawanController.register);
router.get('/karyawan', KaryawanController.findAll);
router.post('/login', KaryawanController.login);
router.post('/karyawan/:name/siswa', KaryawanController.addSiswa);

module.exports = router;
