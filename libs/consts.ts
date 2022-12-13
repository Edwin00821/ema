export const BASE_URL_API =
  process.env.BASE_URL || 'http://localhost:3000/api/ema/V1';

export const DB_ESPECIALIDAD = {
  select: 'SELECT * FROM CEspecialidad',
  selectById: 'SELECT * FROM CEspecialidad WHERE id_esp = ?',
  insert: 'INSERT INTO CEspecialidad SET ?',
  update: 'UPDATE CEspecialidad SET ? WHERE id_esp = ?',
  delete: 'DELETE FROM CEspecialidad WHERE id_esp = ?',
};


export const DB_GENERO= {
  select: 'SELECT * FROM CGenero',
  selectGeneroById: 'SELECT * FROM CGenero WHERE id_gen = ?',
  insertGenero: 'INSERT INTO CGenero SET ?',
  updateGenero: 'UPDATE CGenero SET ? WHERE id_gen = ?',
  deleteGenero: 'DELETE FROM CGenero WHERE id_gen = ?',
}

export const DB_INTELIGENCIA= {

  select: 'SELECT * FROM CInteligencia',
  selectInteligenciaById: 'SELECT * FROM CInteligencia WHERE id_int = ?',
  insertInteligencia: 'INSERT INTO CInteligencia SET ?',
  updateInteligencia: 'UPDATE CInteligencia SET ? WHERE id_int = ?',
  deleteInteligencia: 'DELETE FROM CInteligencia WHERE id_int = ?',
}