import JackpotBet from "../../models/jackpot-bet-model.js";

const store = (req, res) => {
    try {
        const a = Math.floor(Math.random() * 10);
        const b = Math.floor(Math.random() * 10);
        const c = Math.floor(Math.random() * 10);
    
        a == b && b == c
          ? (req.body.bet.status = "WON")
          : (req.body.bet.status = "LOST");
    
        req.body.numbers = [a, b, c];
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

const update = async (req, res) => {
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
  update,
};

