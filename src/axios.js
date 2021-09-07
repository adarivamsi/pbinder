import axios from "axios";
import { local_env, prod_env } from "./constants";

const env = local_env; // prod_env;
const instance = axios.create({
  baseURL: env,
});

export default instance;
