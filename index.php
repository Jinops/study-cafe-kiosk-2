<!DOCTYPE html>
<html lang="ko">

<head>
  <title>메인 페이지</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="styles/style.css">
  <!-- for bootstrap library -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  <!-- for bootstrap icon -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">
</head>

<body>
  <div class="container-sm center">
    <img src="images/logo.png" id="logo">
    <div class="justify-content-center border py-4 px-5 mx-md-3">
      <div class="row">
        <div class="col-5">
          <div class="row">
            <div class="col-8">
            <h2>공지사항</h2>
          </div>
          <div class="col-4 text-end">
            <div class="btn" onclick="window.open('./admin/admin_notice.php')">
            <i class="bi bi-gear"></i>
            관리자 페이지
          </div>
          </div>
          </div>
          <?php

$mysqli = new mysqli("localhost", "root", "", "jwpark");
$query = "SELECT * FROM Notice";
$res = mysqli_query($mysqli, $query);

while ($row = mysqli_fetch_array($res, MYSQLI_ASSOC)){
  $content = $row['Content']; 
  echo ("<textarea class='form-control' rows='8'>"
      .$content.
    "</textarea>");
 }
 ?>
        </div>
        <div class="col-4">
          <form id="form_login">
            <label for="input_phone" class="col-form-label col-form-label-lg">전화번호</label>
            <div class="input-group input-group-lg">
              <div class="input-group-text"><i class="bi bi-phone"></i></div>
              <input id="input_phone input-xl" class="form-control" placeholder="하이픈(-) 빼고 입력" inputmode="numeric">
            </div>
            <label for="input_password" class="col-form-label col-form-label-lg">비밀번호</label>
            <div class="input-group input-group-lg">
              <div class="input-group-text"><i class="bi bi-lock"></i></div>
              <input id="input_password" class="form-control form-control" type="password" placeholder="4자리 숫자" inputmode="numeric" maxlength="4">
            </div>
            <br />
            <p class="text-end">
              서비스 이용을 위해 회원가입이 필요합니다.
              <button class="btn btn-secondary btn-block">회원가입</button>
            </p>
          </form>
        </div>
        <div class="col-3">
          <button type="submit" class="btn btn-primary btn-lg btn-block mt-3" form="form_login"
            style="width:100%; height:80%" onclick="window.open('./ticket.html')">
            <i class="bi bi-box-arrow-in-right"></i><br />
            로그인
          </button>
        </div>
      </div>
    </div>
  </div>
</body>

</html>