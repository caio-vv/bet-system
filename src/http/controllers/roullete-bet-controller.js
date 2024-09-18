import RouletteBet from "../../models/roullete-bet-model";

const store = (req, res) => {
  try {
    req.body.betNumber == parseInt(req.body.betNumber)
    req.body.drawnNumber = Math.ceil(Math.random() * 100);

    if(drawnNumber == parseInt(req.body.betNumber)){
        req.body.bet.status = "WINNER"
    }else {
        req.body.bet.status = "LOSER"
    }

    RouletteBet.create(req.body);
    res.json();
  } catch (error) {
    res.status(400);
  }
};

const index = async (req, res) => {
  try {
    const content = await RouletteBet.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = async (req, res) => {
  try {
    const content = await RouletteBet.findById(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updated = async (req, res) => {
  try {
    const content = await RouletteBet.findByIdAndUpdate(req.query).exec();
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
