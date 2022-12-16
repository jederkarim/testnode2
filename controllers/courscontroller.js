const cours = require('../models/cours')


exports.addcours = async (req, res) => {
    try {
        const result = await cours.create(req.body)
        res.status(200).send(result);
    } catch (error) {
        res.status(500).json({ message: 'error serveur' })
    }
}
exports.getcours = async (req, res) => {
    try {
        const result = await cours.findById(req.params.idcours)
        res.status(200).send(result);
    } catch (error) {
        res.status(500).json({ message: 'error serveur' })
    }
}
exports.deletecours = async (req, res) => {
    try {
        await cours.findByIdAndRemove(req.params.idcours, req.body)
        res.status(200).json({ message: 'cours deleted' });
    } catch (error) {
        res.status(500).json({ message: 'error serveur' })
    }
}


exports.updatecours = async (req, res) => {
    try {
        await cours.findByIdAndUpdate(req.params.idcours, req.body)
        res.status(200).json({ message: 'cours Updated' });
    } catch (error) {
        res.status(500).json({ message: 'error serveur' })

    }
}