const admin = require('../models/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



exports.register = async (req, res) => {
    try {
        const verif = await admin.findOne({ email: req.body.email })
        if (verif) {
            res.send({ message: 'Email exist deja' });
        }
        else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            req.body.password = hash;

            await admin.create(req.body)
            res.status(400).json({ message: 'Enregistre avec succes' })
        }

    } catch (error) {
        res.status(500).json({ message: 'error serveur' })
    }
}

exports.login = async (req, res) => {
    try {
        const verifier = await admin.findOne({ email: req.body.email })
        if (verifier == null) {
            res.status(400).json({ message: 'Verifier email and passwors' })
        }
        else {
            const compare = bcrypt.compareSync(req.body.password, verifier.password)
            if (compare) {
                const connectdata = {
                    userEmail: verifier.email,
                    userId: verifier._id
                }
                var token = jwt.sign(connectdata, process.env.SECRET, { expiresIn: 60 * 60 })
                res.status(200).json({ message: 'tok', token: token })
            }
            else {
                res.status(400).json({ message: 'Verify password and email' })
            }

        }
    } catch (error) {
        res.status(500).json({ message: 'error serveur' })
    }
}