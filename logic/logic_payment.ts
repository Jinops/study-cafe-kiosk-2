import { api_error } from "../common/api_error";
import { payment_type } from "../types";

export async function set_type(req: any){
    const payment_type :payment_type = req.body.payment_type;
    req.session.payment_type = payment_type;
    return {
      error: api_error.OK,
    };
}
