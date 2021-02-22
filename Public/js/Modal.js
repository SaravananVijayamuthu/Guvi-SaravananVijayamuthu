$(document).ready(function () {
    var progressBarVal = 60;
    var html = "<div class='progress-bar bg-sucess' role='progressbar' aria-valuenow=" + progressBarVal + " aria-valuemin='0' aria-valuemax='100' style='width:" + progressBarVal + "%'>" + "</div>";
    $(".progress").append(html);
});    