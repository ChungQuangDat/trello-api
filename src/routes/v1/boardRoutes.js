// "A bit of fragrance clings to the hand that gives flowers!"
// (Một chút hương thơm bám trên bàn tay người tặng hoa!)

import express from 'express'
import { StatusCodes } from 'http-status-codes'
const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ GET: 'API get list boards' })
  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({ POST: 'API create new board' })
  })

export const boardRoutes = Router
