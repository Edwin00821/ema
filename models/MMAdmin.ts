import { IMAdmin, IMAdminReq } from '../interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MMAdmin extends RowDataPacket, IMAdmin {}
interface MMAdminReq extends RowDataPacket, IMAdminReq {}

export type { MMAdmin, MMAdminReq } ;
