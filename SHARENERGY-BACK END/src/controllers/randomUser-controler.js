const { default: axios } = require('axios');



exports.get = async (req, res, next) => {
    try {
        var data = await axios.get("https://randomuser.me/api/?results=20&inc=name,email,picture,login,dob,info");
        res.status(200).send(data.data.results);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}