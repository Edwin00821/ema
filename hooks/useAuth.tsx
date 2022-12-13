import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from 'redux/store';
import { createStudent } from 'redux/states/student.state';
import { createAdmin } from 'redux/states/admin.state';
import { IMAdminRes, IMEstudianteRes } from 'interfaces/Entities';

const useAuth = (User?: IMEstudianteRes | IMAdminRes) => {
  const dispatch = useDispatch();

  if (User) {
    const id_rol = User.user.rol.id_rol;

    if (id_rol === 1) {
      dispatch(createAdmin(User as IMAdminRes));
    }
    if (id_rol === 2) {
      dispatch(createStudent(User as IMEstudianteRes));
    }
  }

  const studentState = useSelector((state: AppStore) => state.student);
  const adminState = useSelector((state: AppStore) => state.admin);
  const { isLogued } = studentState || adminState;

  return { studentState, adminState, isLogued };
};

export default useAuth;
