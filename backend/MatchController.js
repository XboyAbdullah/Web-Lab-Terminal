const Match = require('../Models/MatchModel');
const Admin = require('../Models/Admin');



// Admin login
exports.loginUser = async(res, req)=>{
    const {email, password} = req.body;

    //Checking if emaol and password are entered by user
    if(!email || !password) {
        return res.status(400).send({
      message: 'Invalid email or password'
    });
    }
    // Finding user in database
    const user = await Admin.findOne({email}).select('+password');

    if(!user){
        return res.status(400).send({
      message: 'Invalid email or password'
    });
    }

    // Checking password
    const IsPassMatch = await user.comparePassword(password);

    if(!IsPassMatch){
        return res.status(400).send({
      message: 'Invalid email or password'
    });
    }

    res.status(200).json({
        success: true,
        user
    })
};



/// Get all matches
exports.GetMatches = async(req, res) => {
  let match = await Match.find();
  res.send(matches);
};


// Adding a new match
exports.AddMatch = async(req, res)  => {
  let data = req.body;

  if (data.teamB === data.teamA) {
    return res.status(400).send({
      message: "match should be between different teams"
    });
  }

  let matches = await Match.create({
    date: new Date(new Date(data.date).getDate()),
    city: data.city,
    teamA: data.teamA,
    teamB: data.teamB,
  });

  res.status(200).json({
      success: true,
      matches
  })
};

