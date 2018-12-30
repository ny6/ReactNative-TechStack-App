export const SELECT = 'SELECT';

export const selectLibrary = id => ({
  type: SELECT, payload: id,
});
