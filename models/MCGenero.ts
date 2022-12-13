import { ICGenero, ICGeneroReq } from 'interfaces/Entities';

import { RowDataPacket } from 'mysql2';

interface MCGenero extends RowDataPacket, ICGenero {}
interface MCGeneroReq extends RowDataPacket, ICGeneroReq {}

export type {MCGenero, MCGeneroReq};
