import express from "express";
const router=express.Router()

import {createAppoint,deleteAppoint,getAllAppoint,updateAppoint, showStats} from '../controllers/appointController.js'


router.route('/').post(createAppoint).get(getAllAppoint)
// remember about id
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteAppoint).patch(updateAppoint)


export default router