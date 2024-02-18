const User = require('../models/User')

module.exports = {
       // Create
       async createUser(req, res) {
              try {
                     const { name, email, telefone } = req.body

                     const user = await User.create({ name, email, telefone })

                     res.status(200).json({ user })
              } catch (error) {
                     res.status(400).json({ error })
              }



       },

       // Update
       async updateUser(req, res) {
              try {
                     // buscar
                     const { id } = req.params

                     // alterar
                     const { name, email, telefone } = req.body

                     const user = await User.findOne({ where: { id } })

                     if (!user) {
                            res.status(401).json({ message: "Id não encontrado." })
                     } else {
                            const user = await User.update({ name, email, telefone }, { where: { id } })
                            res.status(200).json({ user })
                     }
              } catch (error) {
                     res.status(400).json({ error })
              }

       }


}