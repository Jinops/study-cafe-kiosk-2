import { api_error } from '../common/api_error';
import * as logic_user from '../logic/logic_user';

export async function login(req:any){
  const phone: String = req.body.phone;
  const password: String = req.body.password;

  if(!phone||!password){
    return;
  }

  await logic_user.login(phone, password, req.session);
  
  return {
    error: api_error.OK,
  };
}

export async function logout(req:any){
  await logic_user.logout(req.session);
  return {
    error: api_error.OK,
  }
}

export async function register(req:any){
  const phone: String = req.body.phone;
  const password: Number = req.body.password;
  const name: String = req.body.name;

  await logic_user.register(phone, password, name);
  return {
    error: api_error.OK,
  }
}
