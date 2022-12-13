import { useValidateQueryError, useValidateQuerySuccess } from '../hooks';
interface Props {
  validOptionChat: string;
  validQuery: string;
  message: string;
  callback: () => void;
}
const useValidateQuery = ({
  validOptionChat,
  validQuery,
  message,
  callback,
  optionChat, query, userMessage, minOption, maxOption,
}) => {
  useValidateQueryError(validOptionChat, validQuery, message);
  useValidateQuerySuccess(validOptionChat, validQuery, optionChat, query, userMessage, minOption, maxOption, callback);
};

export default useValidateQuery;
                                       