import { every, isEmpty } from 'lodash';

const isObjectEmpty = object => {
  const objEmpty = every(object, isEmpty);
  return objEmpty;
};

export default isObjectEmpty;
