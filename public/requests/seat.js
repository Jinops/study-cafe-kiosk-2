function payment(seatId, roomId){
  const data = {
      seat_id: seatId,
      room_id: roomId,
    };
    console.log(data)
  fetch("http://localhost:3000/seat/set", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((result) => {
      location.replace('/payment.html');
    })
    .catch((e) => {
      console.error(e);
    });
}
