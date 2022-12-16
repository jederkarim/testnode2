const clients = require('../models/clients');
const cours = require('../models/cours');
const nodemailer = require('nodemailer');



exports.addclient = async (req, res) => {
    try {
        const verif = await clients.findOne({ email: req.body.email })
        if (verif) {
            res.send({ message: 'Email exist deja' });
        }
        else {
            await clients.create(req.body)
            res.status(400).json({ message: 'Enregistre avec succes' })
        }

    } catch (error) {
        res.status(500).json({ message: 'error serveur' })
    }
}

exports.getclient = async (req,res)  =>{
    try {
        const result = await clients.findById(req.params.idclient)
        res.status(200).send(result);
    } catch (error) {
        res.status(500).json({ message: 'error serveur' })
       
    }
}
exports.deleteclient = async (req,res)  =>{
    try {
        await clients.findByIdAndRemove(req.params.idclient,req.body)
        res.status(200).json({message:'client deleted'});
    } catch (error) {
        res.status(500).json({ message: 'error serveur' })
            }
}


exports.updateclient = async (req,res)  =>{
    try {
        await clients.findByIdAndUpdate(req.params.idclient,req.body)
        res.status(200).json({message:'client Updated'});
    } catch (error) {
        res.status(500).json({ message: 'error serveur' })

            }
}
 
exports.affectcours = async (req, res) => {

    try {
        await clients.findByIdAndUpdate(req.params.idclient, { $push: { cours: req.params.idcours } })
        const cour = await cours.findById(req.params.idcours)
       cours.findByIdAndUpdate(req.params.idcours, {$inc:{nombreachat: cour.nombreachat +1}},{new:true})


    //    let transporter = nodemailer.createTransport({
    //     service: process.env.SERVICE,
    //     secure: false,
    //     auth: {
    //       user: process.env.USER,
    //       pass: process.env.PASS
    //     },
    //   });
    
    //   let info = await transporter.sendMail({
    //     from: process.env.USER,
    //     to: req.body.email,
    //     subject: "Hello ✔",
    //     text: "you are affected",
    //   });
        res.status(200).send({ message: 'Affecter avec succees' });
    } catch (error) {
        res.status(500).json('error serveur')

    }
}