const express = require('express');
const cors = require('./cors');
const routes = require('./routes');
 
const app = express();
app.use(cors()); //em producao: app.use(cors({origin: http://meuapp.com }))
app.use(express.json()); //antes das rotas
app.use(routes);

app.listen(3333);