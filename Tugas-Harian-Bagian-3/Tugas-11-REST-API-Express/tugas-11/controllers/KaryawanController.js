const fspromise = require('fs/promises');
const fs = require('fs');

class KaryawanController {

    static register (request, response) {
        const path = 'data.json';
        fs.readFile(path, (err, data) => {
            if(err){
                response.status(400).json({errors: "error membaca data"});
            } else {
                let realData = JSON.parse(data);
                let {name, password, role} = request.body;
                let newUser = {name, password, role, isLogin: false};
                realData.push(newUser);
                fs.writeFile(path, JSON.stringify(realData), {encoding: 'utf-8'}, (err) => {
                    if (err){
                        response.status(400).json({errors: "register error"});
                    } else {
                        response.status(201).json({message: "berhasil register"});
                    }
                });
            }
        })
    }

    static findAll (request, response) {
        const path = 'data.json';
        fs.readFile(path, (err, data) => {
            if(err){
                response.status(400).json({errors: "error membaca data"});
            } else {
                let realData = JSON.parse(data);
                response.status(200).json({message: "berhasil get karyawan", data: realData});
            }
        })
    }

    static login (request, response) {
        const path = 'data.json';
        fspromise.readFile(path)
            .then(data => {
                let realData = JSON.parse(data);
                let findData = realData.findIndex(item => item.name === request.body.name);
                let theData = realData[findData];
                if(theData.password === request.body.password){
                    theData.isLogin = true;
                    realData.splice(findData,1,theData);
                    fspromise.writeFile(path, JSON.stringify(realData), {encoding: 'utf8'});
                } else {
                    response.status(400).json({error: "Gagal Login"});
                }
            })
            .then(() => {
                response.status(200).json({message: "Berhasil Login"});
            })
            .catch(err => {
                response.status(400).json({error: "Error"});
            })
    }

    static addSiswa (request, response) {
        const path = 'data.json';
        fspromise.readFile(path)
            .then(data => {
                let realData = JSON.parse(data);
                let namaTrainer = request.params.name;
                let findData = realData.findIndex(item => item.name === namaTrainer);
                let theData = realData[findData];

                let theAdmin = realData[0];

                let namaStd = request.body.name;
                let classStd = request.body.class;

                if (theAdmin.role === 'admin' && theAdmin.isLogin){
                    if(theData.role === 'trainer'){
                        if(!('students' in theData)){
                            theData['students'] = [{name: namaStd, class: classStd}];
                        } else {
                            theData['students'].push({name: namaStd, class: classStd});
                        }
                        realData.splice(findData, 1, theData);
                        fspromise.writeFile(path, JSON.stringify(realData), {encoding: 'utf8'});
                    } else {
                        response.status(400).json({error: "Karyawan Harus Trainer"});
                    }
                } else {
                    response.status(400).json({error: "Yang memasukkan data harus admin"});
                }
            })
            .then(() => {
                response.status(201).json({message: "Berhasil Menambahkan Siswa"});
            })
            .catch(err => {
                response.status(400).json({error: "Error"});
            })
    }
}

module.exports = KaryawanController;