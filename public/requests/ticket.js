async function ticket_type(ticket_type) {
  const data = {
    ticket_type
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
