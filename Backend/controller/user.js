const user = require('../user');
const jwt = require('jsonwebtoken');
const UserModel = require('../user')

module.exports.signup = (req, res) => {
    console.log(req.body);

    //email should not exist already

    const newUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save()
        .then(() => {
            res.status(200).json({ code: 200, message: 'Signup success' });
        })
        .catch((err) => {
            res.status(500).json({ code: 500, message: 'Signup Err' });
        });
}


module.exports.signin = (req, res) => {
    console.log(req.body);


    //email and password match

    UserModel.findOne({ email: req.body.email }).then(result => {
        if (!result) {
          // User not found
          res.status(500).json({ code: 500, message: 'User Not Found' });
          return;
        }
      
        // Compare plain-text passwords directly
        if (result.password !== req.body.password) {
          res.status(404).json({ code: 404, message: 'Password is wrong' });
          return;
        }
      
        // Passwords match, generate JWT token
        const token = jwt.sign({ userId: result._id }, 'your-secret-key', { expiresIn: '1h' });
        res.status(200).json({
          name: result.name,
          userId: result._id,
          email: result.email,
          code: 200,
          message: 'User Found',
          token
        });
      }).catch(err => {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Internal Server Error' });
      });
      
   

    // newUser.save()
    //     .then(() => {
    //         res.send({ code : 200 , message: 'Signup success' });
    //     })
    //     .catch((err) => {
    //         res.send({ code : 500 , message: 'Signup Err' });
    //     });
}
