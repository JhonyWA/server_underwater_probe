const mqtt = require('mqtt');
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

// Criar um cliente MQTT e conectar ao broker
const client = mqtt.connect(process.env.IPBroker, {
  protocolVersion: 5, // Especificar a versão do protocolo MQTT v5
  connectTimeout: 10000,
  username: process.env.Broker_user, // Adicione seu nome de usuário MQTT aqui
  password: process.env.Broker_password, // Adicione sua senha MQTT aqui
});

let isConnected = false;

// Função para enviar mensagens
function sendMessage(topic, message) {
  if (isConnected) {
    client.publish(topic, message, {}, (error) => {
      if (error) {
        console.error('Erro ao enviar mensagem:', error);
      } else {
        console.log(`Mensagem enviada para '${topic}': ${message}`);
      }
    });
  } else {
    console.log('Cliente não está conectado ao broker.');
  }
}

// Evento disparado quando o cliente se conecta ao broker
client.on('connect', function () {
  console.log('Cliente conectado ao broker');
  isConnected = true;

  // Inscrever-se em um tópico

  function subscribe(topic){// exemplo /do/#
    client.subscribe(topic, function (err) {
      if (err) {
        console.error('Erro ao se inscrever no tópico:', err);
      }else{
        console.log('inscrito no tópico', topic);
      }
    });
  }

  // Não queremos nos inscrever em todos os tópicos, somente nos que enviam os dados para preencher os gráficos.
  // subscribe('/ph/#')
  // subscribe('/orp/#')
  // subscribe('/do/#')
  // subscribe('/rtd/#')
  // subscribe('/ec/#')
  // subscribe('/ntu/#')
  // subscribe('/em/#')
  subscribe ('/ntu/l/')
  subscribe ('/ntu/h/')
  subscribe ('/rtd/val/')
  subscribe ('/orp/val/')
  subscribe ('/ph/val/')
  subscribe ('/do/val/')
  subscribe ('/ec/val/sal/')
  subscribe ('/ec/val/con/')
  subscribe ('/ec/val/tds/')
  subscribe ('/ec/val/gvt/')
  subscribe ('/em/ishunt/')
  subscribe ('/em/vshunt/')
  subscribe ('/em/vbus/')
  subscribe ('/em/power/')
});

// Evento disparado quando uma mensagem é recebida
client.on('message', function (topic, message) {
  console.log(`Mensagem recebida no tópico '${topic}': ${message.toString()}`);
  dataController.register({type:topic,value:message.toString()})
});


//express
app.use('/data',express.json(),dataRouter)

app.post('/send',express.json(),(req,res)=>{
  try {
    const json = req.body
    sendMessage(json.topic, json.message);
    return res.send()
  } catch (error) {
    return res.status(500).send(error.message)
  }
  
})
app.use(express.static(path.join(__dirname,'front','build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'front', 'build', 'index.html'));
  });

const server =  app.listen(process.env.PORT,()=>{
    console.log(`server runing on port: ${process.env.PORT}`);
})
