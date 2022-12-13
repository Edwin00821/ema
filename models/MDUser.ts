import { IDUserReq } from '../interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MDUser extends RowDataPacket, IDUserReq {}

export default MDUser;
