window.onload = function(){
  payment();
  updateBar();
}

function updateBar(){
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  
  const progressBar = document.getElementById('progress_bar');
  let percentage = 0;
  const progress = setInterval(function(){
    percentage = parseInt(progressBar.style.width.slice(0,-1));
    progressBar.style.width = percentage+20+'%';
    if (percentage >= 100){
      console.log(1)
      clearInterval(progress);
      step1.style.display = "none";
      step2.style.display = "block";
      setTimeout(function(){
        window.location.href="./index.html";
      },2000);
    }
  },500)
}

async function payment(){
  const title = document.querySelector("#step2 h2");
  const msg = document.querySelector("#step2 div");
  fetch("http://localhost:3000/payment/add", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(result => {
    console.log(result)
    title.innerText = "결제 완료";
    msg.innerHTML = "<i class='bi bi-check text-warning h1'></i>";
  })
  .catch(e => {
    title.innerText = "결제 실패";
    msg.innerText = `${e} <br/><br/>`;
  })
  .finally(logout);
}

async function logout(){
  console.log('logout')
  fetch("http://localhost:3000/user/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  }).then(result=>{return result});
}
