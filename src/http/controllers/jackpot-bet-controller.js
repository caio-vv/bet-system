import JackpotBet from "../../models/jackpot-bet-model"


const store = (req, res) => {
    try {
      function gerarNumeros() {
          const numeros = new Set()
          while (numeros.size < 3 ){
              const numero = Math.floor(Math.random() * 9) + 1
              numeros.add(numero)
          }
          return Array.from(numeros)
      }
      gerarNumeros()
    if(gerarNumeros[0] === gerarNumeros[1] && gerarNumeros[1] === gerarNumeros[2]){
        req.body.bet.status = "WINNER"
    }else {
        req.body.bet.status = "LOSER"
    }

    JackpotBet.create(req.body);
    res.json();
  } catch (error) {
    res.status(400);
  }
};

const index = async (req, res) => {
  try {
    const content = await JackpotBet.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = async (req, res) => {
  try {
    const content = await JackpotBet.findById(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updated = async (req, res) => {
  try {
    const content = await JackpotBet.findByIdAndUpdate(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default {
  store,
  index,
  show,
  updated,
};

