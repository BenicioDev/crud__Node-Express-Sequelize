const { where } = require('sequelize')
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

       },

       // Read
       async listUsers(req, res) {
              try {
                     const users = await User.findAll()
                     res.status(200).json({ users })
              } catch (error) {
                     res.status(400).json({ error })
              }

       },

       // Delete
       async deleteUser(req, res) {
              try {
                     const { id } = req.params

                     const user = await User.findOne({ where: { id } })

                     if (!user) {
                            res.status(401).json({ message: 'Usuário não existe.' })
                     } else {
                            const user = await User.destroy({ where: { id } })
                            res.status(200).json({ ok: true })
                     }
              } catch (error) {
                     res.status(400).json({ error })
              }


       }



}