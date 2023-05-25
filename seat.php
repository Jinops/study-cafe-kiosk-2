<!DOCTYPE html>
<html lang="ko">

<head>
  <title>좌석 선택</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- for bootstrap library -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  <!-- for bootstrap icon -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">
  <!-- for custom-->
  <link rel="stylesheet" href="styles/style.css">
  <link rel="stylesheet" href="styles/seat.css">
</head>

<body>
  <?php
  $ticket_type=$_GET['ticket_type'];
  $ticket_id=$_GET['ticket_id'];
  ?>
  <div class="container-sm center">
    <img src="images/logo.png" id="logo">
    <div class="justify-content-center border py-4 px-5 m-5">
      <h2 class="text-center mb-4">좌석 선택</h2>
      <hr />
      <!-- controller -->
      <ul class="nav nav-pills nav-justified" id="pills-tab" role="tablist">
        <li class="col nav-item" role="presentation">
          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
            type="button" role="tab" aria-controls="pills-home" aria-selected="true">1열</button>
        </li>
        <li class="col nav-item" role="presentation">
          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
            type="button" role="tab" aria-controls="pills-profile" aria-selected="false">2열</button>
        </li>
      </ul>
      <!-- content -->
      <div class="tab-content text-center border p-5" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel">
          <div class="room" style="width: 50%; padding-bottom:50%;">
            <a href="./payment.php?ticket_type=<?php echo $ticket_type?>?ticket_id=<?php echo $ticket_id?>?seat_id=1">
              <button class="seat btn btn-sm btn-outline-dark" style="left:20%; top:5%;">1</button>
              <button class="seat btn btn-sm btn-dark" style="left:20%;top:25%;" disabled>2 (사용중)</button>
              <button class="seat btn btn-sm btn-outline-dark" style="left:20%;top:45%;">3</button>
              <button class="seat btn btn-sm btn-outline-dark" style="left:20%;top:65%;">4</button>
              <button class="seat btn btn-sm btn-outline-dark" style="left:20%;top:85%;">5</button>
              <button class="seat btn btn-sm btn-outline-dark" style="left:60%; top:5%;">6</button>
              <button class="seat btn btn-sm btn-outline-dark" style="left:60%;top:25%;">7</button>
              <button class="seat btn btn-sm btn-outline-dark" style="left:60%;top:45%;">8</button>
              <button class="seat btn btn-sm btn-outline-dark" style="left:60%;top:65%;">9</button>
              <button class="seat btn btn-sm btn-outline-dark" style="left:60%;top:85%;">10</button>
            </a>
          </div>
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <div class="room" style="width: 25%; padding-bottom:50%;">
            <a href="./payment.php?ticket_type=<?php echo $ticket_type?>?ticket_id=<?php echo $ticket_id?>?seat_id=1">
              <button class="seat btn btn-outline-dark" style="left:20%; top:5%;">1</button>
              <button class="seat btn btn-outline-dark" style="left:20%;top:25%;">2</button>
              <button class="seat btn btn-outline-dark" style="left:20%;top:45%;">3</button>
              <button class="seat btn btn-outline-dark" style="left:20%;top:65%;">4</button>
              <button class="seat btn btn-outline-dark" style="left:20%;top:85%;">5</button>
              <button class="seat btn btn-outline-dark" style="left:60%; top:5%;">6</button>
              <button class="seat btn btn-outline-dark" style="left:60%;top:25%;">7</button>
              <button class="seat btn btn-outline-dark" style="left:60%;top:45%;">8</button>
              <button class="seat btn btn-outline-dark" style="left:60%;top:65%;">9</button>
              <button class="seat btn btn-outline-dark" style="left:60%;top:85%;">10</button>
            </a>
          </div>
        </div>
      </div>
      <!-- -->
    </div>
  </div>
</body>

</html>