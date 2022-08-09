import joi from "joi";
import { userData } from "../services/authServices";

export const userSchema = joi.object<userData>({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().min(6).required(),
  linkedin: joi.string().uri().required(),
  type: joi.number().less(3).required(),
});
