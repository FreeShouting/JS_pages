/*window.onload=function () {
   //var bigBox= document.getElementById('Login');
    var oBox_one=document.getElementsByClassName('login_box')[0];
    var oMa=document.getElementById('Ma');
    //var oImg=document.getElementById('img');
    var oBox_two=document.getElementsByClassName('login_box1')[1];
    var oComputer=document.getElementById('computer');

   oMa.onclick=function () {
       console.log(oBox_two);
      /!* if( oBox_two.style.display=='none'){
           oBox_two.style.display='block';
       }else
           {
               oBox_two.style.display='none';
       }*!/

    };

};*/

//jQuery的写法
$(function () {
    $("#Ma").click(function () {
        $(".login_box1").css("display","block");
        $(".login_box").css("display","none");
    });
    $("#computer").click(function () {
        $(".login_box1").css("display","none");
        $(".login_box").css("display","block");
    })
});

