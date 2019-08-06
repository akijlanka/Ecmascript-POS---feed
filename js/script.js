$(document).ready(function () {
   $("#cus").hide();
   $("#itm").hide();
   $("#ord").hide();

   $("#customer").click(function () {
        $("#cus").show();
        $("#itm").hide();
        $("#ord").hide();
        $("#customer").css({"backgroundColor":"#4f5b69","border-left":"3px solid #d19b3d"});
// $("#customer").addClass(".active");
    });

    $("#item").click(function () {
        $("#cus").hide();
        $("#itm").show();
        $("#ord").hide();
        $("#item").css({"backgroundColor":"#4f5b69","border-left":"3px solid #d19b3d"});
    });

    $("#order").click(function () {
        $("#cus").hide();
        $("#itm").hide();
        $("#ord").show();
        $("#order").css({"backgroundColor":"#4f5b69","border-left":"3px solid #d19b3d"});
    });
});