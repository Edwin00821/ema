import { IMEstudiante, IMEstudianteReq } from '../interfaces/Entities';
import { RowDataPacket } from 'mysql2';

interface MMEstudiante extends RowDataPacket, IMEstudiante {}
interface MMEstudianteReq extends RowDataPacket, IMEstudianteReq {}

export type { MMEstudiante, MMEstudianteReq };
