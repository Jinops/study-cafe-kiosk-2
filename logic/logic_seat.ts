import { QueryTypes, where } from "sequelize";
import { sequelize } from "../models";
import { IReserve, ISeat } from "../types";
import { api_error } from "../common/api_error";
import * as util from '../common/util';

export async function get_all_by_room_id(req:any){
    const room_id: number = req.params.room_id;
    const current_time = util.dateToString(new Date());
    const query_room = `SELECT * FROM SEAT WHERE Room_id=${room_id};`;
    const query_reserve = `SELECT Seat_id FROM RESERVE WHERE Room_id=${room_id} AND Start_time < '${current_time}' AND End_time > '${current_time}';`;
    
    const seats:ISeat[] = await sequelize.query(query_room, {type:QueryTypes.SELECT});
    const reserveResult:Pick<IReserve, 'Seat_id'>[] = await sequelize.query(query_reserve, {type:QueryTypes.SELECT});
    const reserved_seat_ids = reserveResult.map(elem=>elem['Seat_id']);

    return {
        error: api_error.OK,
        seats,
        reserved_seat_ids,
    };
}

export async function set(req:any){
    const id: number = req.params.seat_id;
    req.session.seat_id = id;
    return {
      error: api_error.OK,
    };
}
