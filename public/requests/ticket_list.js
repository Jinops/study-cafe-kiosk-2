window.onload = function(){
  ticket_list = document.getElementById('ticket_list');
  fetch("http://localhost:3000/ticket/all_by_type", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => response.json())
  .then((result) => {
    const tickets = result.tickets;
    for (const ticket of tickets){
      const duration = getDuration(ticket.Type, ticket.Duration_min);
      ticket_list.innerHTML += `
      <div class='col-4'>
        <button class='btn btn-dark btn-lg my-1 w-100' onClick=setTicket(${ticket.Id})>
        <i class='bi bi-clock'></i> ${duration} 이용권<br />${ticket.Price}원</button>
      </div>
      `;
      // <a href='./seat.php?ticket_type=$ticket_type&ticket_id=$ticket_id'>
    }
  })
  .catch((e) => {
    console.error(e);
  });
}

function getDuration(ticketType, durationMin){
  let duration;
  if(ticketType=='basic'){
    duration = durationMin/60 +'시간';
  } else if (ticketType=='fixed'){
    duration = durationMin/(60*24) +'일';
  } else {
    duration = durationMin +'분';
  }
  return duration;
}

function setTicket(ticketId){
  fetch("http://localhost:3000/ticket/set_id", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(result => {
    location.replace('/seat.html');
  });
}
