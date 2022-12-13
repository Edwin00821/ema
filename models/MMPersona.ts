import { IMPersona, IMPersonaReq } from 'interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MMPersona extends RowDataPacket, IMPersona {}
interface MMPersonaReq extends RowDataPacket, IMPersonaReq {}


export type { MMPersona, MMPersonaReq };
