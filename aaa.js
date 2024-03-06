const aedes = require('aedes')();
const serverMQTT = require('net').createServer(aedes.handle);
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')

const dataController = require('./data/dataController')
const dataRouter = require('./data/dataRouter')

dotenv.config();

//db
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_CONNECTION_URL)
  .then(() => {
    console.log('DB load sucess')
  }).catch((error) => {
    console.log(error)
  });

//mqtt
serverMQTT.listen(process.env.portMQTT, function () {
    console.log('Servidor MQTT está rodando na porta', process.env.portMQTT);
});

aedes.on('client', function (client) {
    console.log('Cliente conectado:', client.id);
});

aedes.on('clientDisconnect', function (client) {
    console.log('Cliente desconectado:', client.id);
});

aedes.on('publish', function (packet, client) {
    if (client) {
        console.log('Mensagem recebida de', client.id);
        console.log('Tópico:', packet.topic, 'Mensagem:', packet.payload.toString());


        dataController.register({type:packet.topic,value:packet.payload.toString()})
    }
});

function sendMessageToSubscribers(topic, message) {
  aedes.publish({
      cmd: 'publish',
      topic: topic,
      payload: message,
      qos: 1, // Qualidade de Serviço: 0, 1 ou 2
      retain: false // Retenção da mensagem
  }, function() {
      console.log('Mensagem enviada para os inscritos em:', topic);
  });
}

let teste = setTimeout(()=>{
  console.log('teste enviado');
  sendMessageToSubscribers('teste','super teste')
},9000)



//express
app.use('/data',express.json(),dataRouter)
app.use(express.static(path.join(__dirname,'front','build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'front', 'build', 'index.html'));
  });

const server =  app.listen(process.env.PORT,()=>{
    console.log(`server runing on port: ${process.env.PORT}`);
})