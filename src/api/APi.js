const Api = process.env.REACT_APP_API;
export const AllpostApi = async () => {
  const res = await fetch(Api);
  const result = await res.json();

  return result;
  // .then((response) => response.json())
  // .then((res) => {
  //   console.log(res);
  //   return res;
  // });
};

export const createPostApi = (data) => {
  fetch(Api, {
    method: "POST",
    body: JSON.stringify({
      title: data.title,
      body: data.body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      return res;
    });
};

export const updatingPostApi = (data) => {
  fetch(Api + `${data.id}`, {
    method: "PUT",
    body: JSON.stringify({
      id: data.id,
      title: data.title,
      body: data.body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export const deletePostApi = (id) => {
  fetch(Api + `${id}`, {
    method: "DELETE",
  });
};
