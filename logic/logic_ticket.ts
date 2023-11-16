import { api_error } from "../common/api_error";
import { ticket_type } from "../types";

export async function set_type(req: any){
  const type: ticket_type = req.body.type;
  req.session.type = type;

  return {
    error: api_error.OK,
  };
}
