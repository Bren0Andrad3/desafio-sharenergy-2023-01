const { default: axios } = require('axios');



exports.get = async (req, res, next) => {
    try {
        var data = await axios.get("https://dog.ceo/api/breeds/image/random");
        res.status(200).send(data.data.message);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}