let data = require("./data");

exports.addPerson = (req, res) => {
    const newPerson = {
        ...req.body,
        id: data.length + 1
    };

    data.push(newPerson);
    console.log(data);

    res.status(201).json({ message: "Compte créé" });
};

exports.getAllPersons = (req, res) => {
    res.status(200).json(data);
};

exports.getOnePerson = (req, res) => {
    const foundPerson = data.find(item => item.id === +req.params.id);
    console.log(foundPerson)
    res.status(200).json({ person: foundPerson });
}

exports.updateOnePerson = (req, res) => {
    data = data.map(item => item.id === req.body.id ? req.body : item);
    res.status(200).json({ message : "Compte mis à jour"});
}

exports.removePerson = (req, res) => {
    data = data.filter(item => item.id !== +req.params.id);
    res.status(200).json({ message : "Compte supprimé"})
}