import express from "express";
import { createUser, getUsers, updateUser, validateWorkExperience, validateWorkExperienceTest2 } from "../controllers/UserController.js";

const router = express.Router();

router.get("/employee", getUsers);
router.get("/api/employees/:nik/work-experience", validateWorkExperience);
router.post("/employee", createUser);
router.get("/api/:nik", validateWorkExperienceTest2);
router.patch("/api/employee/update/:nik", updateUser)


export default router;
