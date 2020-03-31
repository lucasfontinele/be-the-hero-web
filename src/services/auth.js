const ID = 'id';
const NAME = 'name';

export const login = (id, name) => {
  localStorage.setItem(ID, id);
  localStorage.setItem(NAME, name);
};

export const logout = () => {
  localStorage.removeItem(ID);
  localStorage.removeItem(NAME);
};

export const getId = () => localStorage.getItem(ID);

export const getName = () => localStorage.getItem(NAME);
