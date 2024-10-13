const userService = require("../services/userServices");
const User = require('../models/user.model');

module.exports = {
    getUserProfileHandler: async (req, res) => {
        try {

            // const user = req.user;
            const jwt = req.headers.authorization?.split(' ')[1];

            const user = await userService.findUserProfileByJwt(jwt);
            user.password = null;

//             const { authorization = "" } = req.headers;
//   const [bearer, token] = authorization.split(" ");
//   if (bearer !== "Bearer") {
//     return res.status(401).json({error: "Unauthorized"});
//   }
//   const { id } = jwt.verify(token, SECRET_KEY);
// console.log('id',id)
//   const user = await User.findById(id);
//   if (!user) {
//       return res.status(401).json({ error: "Invalid signature" });
//   }
            res.status(200).json({fullName: user.fullName,email:user.email, role: user.role});
        }catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    },
}