import { QueryTypes } from "sequelize";
import { sequelize } from "../models";
import { IRoom } from "../types";
import { api_error } from "../common/api_error";

export async function get_all(){
    const query = "SELECT DISTINCT * FROM ROOM;";
    const results:IRoom[] = await sequelize.query(query, {type:QueryTypes.SELECT});

    return {
        error: api_error.OK,
        rooms: results,
    };
}
