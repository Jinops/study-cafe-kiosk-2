async function register() {
  const name = document.querySelector(`#form_register input[name='name']`).value;
  const phone = document.querySelector(`#form_register input[name='phone']`).value;
  const password = document.querySelector(`#form_register input[name='password']`).value;

  if(!name || !phone || !password){
    return;
  }
  
  const data = {
    name,
    phone,
    password,
  };

  fetch("http://localhost:3000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((result) => {
      alert('회원가입이 완료되었습니다.');
      location.replace('../');
    })
    .catch((e) => {
      console.error(e);
      alert('이미 가입된 회원입니다.');
    });
}
