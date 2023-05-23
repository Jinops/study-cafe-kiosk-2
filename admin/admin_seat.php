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
</head>

<body>
  <div class="row">
    <div class="col-2">
      <?php 
      $_GET['selected']='seat';
      include "menu.php" 
      ?>
    </div>
    <div class="col-10 p-5">
      <h3>좌석 관리</h3>
      <hr/>
      <!-- TODO: remove -->
      <div id="TODO_REMOVE">
      <link rel="stylesheet" href="../styles/seat.css">
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
          </div>
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <div class="room" style="width: 25%; padding-bottom:50%;">
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
          </div>
        </div>
      </div>
    </div>
      <!-- -->

      <div class="text-end m-3">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">Add</button>
      </div>
      <table class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Room_id</th>
            <th scope="col">Seat_id</th>
            <th scope="col">Width</th>
            <th scope="col">Height</th>
            <th scope="col">X</th>
            <th scope="col">Y</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>10</td>
            <td>5</td>
            <td>0</td>
            <td>0</td>
            <td><button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#editModal"
                data-bs-whatever="@m1">Edit</button></td>
            <td><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-whatever="@m1">Delete</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>10</td>
            <td>5</td>
            <td>0</td>
            <td>0</td>
            <td><button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#editModal"
                data-bs-whatever="@m1">Edit</button></td>
            <td><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-whatever="@m1">Delete</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>10</td>
            <td>5</td>
            <td>0</td>
            <td>0</td>
            <td><button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#editModal"
                data-bs-whatever="@m1">Edit</button></td>
                <td><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-whatever="@m1">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="editModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Edit</h1>
        </div>
        <div class="modal-body">
          <form>

          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="deleteModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Delete</h1>
        </div>
        <div class="modal-body">
          Are you sure?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
  <!-- -->
</body>

</html>