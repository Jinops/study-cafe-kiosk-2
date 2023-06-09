<?php require '../common/db.php'; ?>
<!DOCTYPE html>
<html lang="ko">

<head>
  <title>Admin</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- for bootstrap library -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  <!-- for bootstrap icon -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">
  <link rel="stylesheet" href="styles/style.css">
</head>

<body>
  <div class="row">
    <div class="col-2">
      <?php 
      $_GET['selected']='ticket';
      include "menu.php" 
      ?>
    </div>
    <div class="col-10 p-5">
      <h3>사용권 관리</h3>
      <hr />
      <div class="text-end m-3">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">Add</button>
      </div>
      <table class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Ticket_id</th>
            <th scope="col">Ticket_type</th>
            <th scope="col">Ticket_price</th>
            <th scope="col">Duration_min</th>
            <th scope="col">Duration (Converted)</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <?php
          $mysqli = connect();
          $query = "SELECT * FROM P_TICKET";
          $res = mysqli_query($mysqli, $query);
          $rows = $res->fetch_all(MYSQLI_ASSOC);

          foreach($rows as $row){
            $ticket_id = $row["Ticket_id"];
            $type = $row["Type"];
            $price = $row["Price"];
            $duration_min = $row["Duration_min"];

            $type_fit = '';
            $duration_fit = '';

            if($type=='basic'){
              $type_fit = '시간권';
              $duration_fit = $duration_min/60 .'시간';
            }else if($type=='fixed'){
              $type_fit = '정기권';
              $duration_fit = $duration_min/(60*24) .'일';
            }

            echo "
            <form method='post' action='./edit/admin_ticket_edit.php'>
              <tr>
                <td><input name='ticket_id' value='$ticket_id' readonly></td>
                <td><input value='$type ($type_fit)' readonly></td>
                <td><input name='price' type=number value='$price'> 원</td>
                <td><input name='duration_min' type=number value='$duration_min'> 분</td>
                <td>$duration_fit</td>
                <td><button class='btn btn-info'>Edit</button></td>
              </tr>
            </form>
            ";
          }
          ?>
        </tbody>
      </table>
    </div>
  </div>
</body>

</html>