const { where } = require('sequelize')
const User = require('../models/User')

const bcrypt = require('bcrypt')

const salt = bcrypt.genSaltSync(10);//Geração de um "sal" com custo de processamento 1




module.exports = {
       // Create
       async createUser(req, res) {
              try {
                     
                     
                     const { name, email, telefone, senha} = req.body

                     // Encriptando senha
                     const senhaEncriptCreate = await bcrypt.hash(senha, salt)

                     const user = await User.create({ name, email, telefone, senha:senhaEncriptCreate })

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
                     const { name, email, telefone, senha } = req.body
                     
                     const senhaEncriptUpdate = await bcrypt.hash(senha, salt)

                     const user = await User.findOne({ where: { id } })

                     if (!user) {
                            res.status(401).json({ message: "Id não encontrado." })
                     } else {
                            const user = await User.update({ name, email, telefone, senha:senhaEncriptUpdate }, { where: { id } })
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