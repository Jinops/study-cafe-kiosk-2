function payment(paymentType){
    const data = {
        payment_type: paymentType,
      };
      fetch("http://localhost:3000/payment/set_type", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        .then((result) => {
          location.replace('/payment_process.html');
        })
        .catch((e) => {
          console.error(e);
        });
}
