const { datayRegisterValidate } = require('./dataValidate')
const Data = require('./Data')

const dataController = {
    register: async function (data) {
        let { error } = datayRegisterValidate(data)
        if (error) { return null }

        let topico = null

        switch (data.type) {
            case '/ph/val':
                topico = 'ph'
                break;

            case '/orp/val':
                topico = 'orp'
                break;

            case '/do/val':
                topico = 'oxigenio'
                break;

            case '/rtd/val':
                topico = 'temperatura'
                break;

            case '/ec/val':
                topico = 'condutividade'
                break;

            case '/ntu/val/l':
                topico = 'turbidez_l'
                break;

            case '/ntu/val/h':
                topico = 'turbidez_h'
                break;

            case '/em/ishunt':
                topico = 'energia_c'
                break;

            case '/em/vshunt':
                topico = 'energia_t_s'
                break;

            case '/em/vbus':
                topico = 'energia_t_b'
                break;

            case '/em/power':
                topico = 'potencia'
                break;

            default:
                topico = null
        }

        if(topico === null){// é configuração
            return 
        }

        try {
            let objetdata = new Data({type: topico, value: data.value})

            let savedData = await objetdata.save()
            //console.log(savedData);

            return true
        } catch (error) {
            console.log(error);
            return null
        }
    },

    getData: async function (req, res) {
        const type = req.params.type
        // const type = req.body.type
        try {
            const datas = await Data.find({ type })
            return res.send(datas)
        } catch (error) {
            return res.status(400).send(error.message)
        }
    },
}

module.exports = dataController