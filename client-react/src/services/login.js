

export default function login({ username, password }) {
    return fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Response is not ok");
        return res.json();
      })
      .then((response) => {
        if (response.message) {
          return response;
        } else {
          const { token } = response;
          return token;
        }
      });
  }
  