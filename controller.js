let data = require("./data");

exports.addPerson(newData) {
    const newPerson = {
        ...newData
    };

    data.push(newPerson);

    res.status(201).json({ data : newPerson, message: "Compte créé" });
};

exports.getAllPersons = () => {
    res.status(200).json(data);
};

exports.getOnePerson = (id) => {
    const foundPerson = data.find(item => item.id === +id);
    res.status(200).json({ person: foundPerson });
}

exports.updateOnePerson = (newData) => {
    data = data.map(item => item.id === newData.id ? newData : item);
    res.status(200).json({ message : "Compte mis à jour"});
}

exports.removePerson = (id) => {
    data = data.filter(item => item.id !== +id);
    res.status(200).json({ message : "Compte supprimé"})
}