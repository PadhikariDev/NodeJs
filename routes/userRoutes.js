
import express from "express";

import { getAllUsers,createUser, deleteUser } from "../controller/user.js";


const router = express.Router();

router.get('/',getAllUsers);
router.post('/',createUser);
router.delete('/:id',deleteUser);

export default router;