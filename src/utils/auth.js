
export const checkToken = () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "Test", email: "test@example.com", id: "fake ID" },
    });
  });
};

export const authorize = () => {
  return new Promise((resolve, reject) => {
    resolve({ token: "fake token" });
  });
};

export const register = () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "test@example.com", id: "fake ID" },
    });
  });
};
