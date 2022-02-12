"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get('/', userController_1.getUsers);
router.put('/user/:id', userController_1.updateUser);
router.delete('/user/:id', userController_1.deleteUser);
exports.default = router;
