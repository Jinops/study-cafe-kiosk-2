import { QueryTypes } from "sequelize";
import { dateToString } from "../common/util";
import { sequelize } from "../models";

export async function add(userId:number, roomId:number, seatId:number, ticketId:number, durationMin:number, date:Date){
    const startTime = dateToString(date);
    const endTime = dateToString(new Date(date.getTime()+durationMin*60*1000));

    const query = `INSERT INTO RESERVE (User_id, Room_id, Seat_id, Ticket_id, Start_time, End_time) VALUES (${userId}, ${roomId}, ${seatId}, ${ticketId}, "${startTime}", "${endTime}")`;
    return await sequelize.query(query, { type: QueryTypes.INSERT, plain:true });
}
