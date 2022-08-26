export const addData = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};
export const deleteData = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};
export const infoData = (id) => {
  return {
    type: "INFORMATION",
    payload: id,
  };
};
export const updateDate = (data) => {
  return {
    type: "UPDATE",
    payload: data,
  };
};
