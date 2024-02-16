window.onload = async () => {
    const elem = document.getElementById('room_seat');
    document.head.appendChild(link);
    
    const [content, rooms] = await render_room(elem);
    await render_seat(content, rooms);
}

async function render_room(elem) {
  let rooms = null;

  const tabListElem = document.createElement("ul");
  tabListElem.classList = "nav nav-pills nav-justified";
  tabListElem.id = "pills-tab";
  tabListElem.role = "tablist";

  await fetch("http://localhost:3000/room/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
  .then(response => response.json())
  .then(result => {
    rooms = result.rooms;
    if(!rooms){
      throw Error("no room");
    }
    let active='active';

    for(const room of rooms){
      const tabElem = document.createElement("li");
      tabElem.classList = `col nav-item ${active}`;
      tabElem.role = "presentation";

      const tabBtnElem = document.createElement("button");
      tabBtnElem.setAttribute('data-bs-toggle', 'pill');
      tabBtnElem.classList = `nav-link btn_room ${active}`;
      tabBtnElem.setAttribute('data-bs-toggle', 'pill');
      tabBtnElem.setAttribute('data-bs-target', `#pills-${room.Id}`);
      tabBtnElem.type = 'button';
      tabBtnElem.role = 'tab';
      tabBtnElem.setAttribute('aria-controls', `pills-${room.Id}`);
      tabBtnElem.innerText = room.Name;

      tabElem.appendChild(tabBtnElem);
      tabListElem.appendChild(tabElem);
      active = '';
    }
    console.log("2");

  })
  .catch(e => {
    console.error(e);
  })
  elem.innerHTML += `</ul>`;
  console.log("3");

  const tabContentElem = document.createElement("div");
  tabContentElem.classList = 'tab-content text-center border p-5';
  tabContentElem.id = 'pills-tabContent';

  elem.appendChild(tabListElem);
  elem.appendChild(tabContentElem);
  
  return [tabContentElem, rooms];
}

async function render_seat(tabContentElem, rooms){
  if(!rooms){
    return;
  }

  let active = 'active';
  for(const room of rooms){
    await fetch(`http://localhost:3000/seat/by_room_id/${room.Id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(result => {
      const seats = result.seats;
      const reserved_seat_ids = result.reserved_seat_ids;
      console.log(reserved_seat_ids)
      
      const tabPanelElem = document.createElement("div");
      tabPanelElem.classList = `tab-pane fade show ${active}`;
      tabPanelElem.id = `pills-${room.Id}`;
      tabPanelElem.role = 'tabpanel';
      tabPanelElem.active = active;

      const roomElem = document.createElement("div");
      roomElem.className = "room";
      roomElem.style = `width: ${room.Width}%; height: ${room.Width}%; padding-bottom:${room.Height}%`;

      for(const seat of seats){
        const seatElem = document.createElement("a");
        const style = `width:${seat.Width}%; height:${seat.Height}%; left:${seat.X}%; top:${seat.Y}%;`;

        const seatBtnElem = document.createElement("button");
        seatBtnElem.classList= 'seat btn btn-sm btn-outline-dark';
        seatBtnElem.style = style;
        seatBtnElem.innerText = seat.Id;
        seatBtnElem.disabled = reserved_seat_ids.indexOf(seat.Id) != -1;

        seatElem.appendChild(seatBtnElem);
        roomElem.appendChild(seatElem);
      };

      tabPanelElem.appendChild(roomElem);
      tabContentElem.appendChild(tabPanelElem);
    });
    active = '';
  }
}

const link = document.createElement('link');
link.type ='text/css';
link.rel = 'stylesheet';
link.href = 'styles/seat.css';
