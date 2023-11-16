async function ticket_type(type) {
  const data = {
    type
  };
  fetch("http://localhost:3000/ticket/set_type", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((result) => {
      location.replace('/ticket_list.html');
    })
    .catch((e) => {
      console.error(e);
    });
}
