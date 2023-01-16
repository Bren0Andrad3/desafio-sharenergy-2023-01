const axios  = require("axios");



exports.get = async (req, res, next) => {


    try {
        const data = await axios.get(`https://http.cat/${req.params.id}`, { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpeg');
        console.log(data.data)
        res.send(data.data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}