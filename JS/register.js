$(function () {
   //var TxtVal=$("input").val();
   $(".content input").on('focus',function () {//获取焦点
      $(this).siblings('.request').show();//必须提示的时候显示
      $(this).siblings(".Pan").hide();//错误提示的时候隐藏
       $(this).siblings(".right").hide();
       $(this).css('border','1px solid #2aabd2');
   });
   /*用户名的验证*/
   $(".user #username").blur(function (e) {//失去焦点的时候
       var current=$(e.target);//获取文本框
       var value=current.val();//获取文本框的值
       var reg=/^[0-9a-zA-Z\u4e00-\u9fa5]{3,20}$/;//正则表达式
      /* if(value==''){
           current.siblings(".request").hide();
           current.siblings(".Pan").show();
          //$(".user #username").css('border','1px solid red');
          current.css('border','1px solid red');
       }else if(reg.test(value)){
             current.siblings(".right").show();
           current.siblings(".request").hide();
       }else{
           current.siblings(".Pan").text("用户名格式不正确！").show();
           current.siblings(".request").hide();
       }*/
      FromCheck(current,value,reg,"用户名格式不正确！");
   });
      /*手机号码的验证*/
      $(".phone #phone").blur(function (e)  {
          var current=$(e.target);//获取文本框
          var value=current.val();//获取文本框的值
          var reg= /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;//正则表达式
         /* if(value==''){
              current.siblings(".request").hide();
              current.siblings(".Pan").show();
              //$(".user #username").css('border','1px solid red');
              current.css('border','1px solid red');
          }else if(reg.test(value)){
              current.siblings(".right").show();
              current.siblings(".request").hide();
          }else{
              current.siblings(".Pan").text("电话格式不正确！").show();
              current.siblings(".request").hide();
          }*/
          FromCheck(current,value,reg,"电话格式不正确！");
      });
      /*密码的验证*/
    $(".password #password").blur(function (e)  {
        var current=$(e.target);//获取文本框
        var value=current.val();//获取文本框的值
        var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;//正则表达式
     /*   if(value==''){
            current.siblings(".request").hide();
            current.siblings(".Pan").show();
            //$(".user #username").css('border','1px solid red');
            current.css('border','1px solid red');
        }else if(reg.test(value)){
            current.siblings(".right").show();
            current.siblings(".request").hide();
        }else{
            current.siblings(".Pan").text("密码格式不正确！").show();
            current.siblings(".request").hide();
        }*/
        FromCheck(current,value,reg,"密码格式不正确！");
    });
   /*确认密码的验证*/
    $(".r_password #r_password").blur(function (e)  {
        var current=$(e.target);//获取文本框
        var value=current.val();//获取文本框的值
        var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;//正则表达式
       /* if(value==''){
            current.siblings(".request").hide();
            current.siblings(".Pan").show();
            //$(".user #username").css('border','1px solid red');
            current.css('border','1px solid red');
        }else if(reg.test(value)){
            current.siblings(".right").show();
            current.siblings(".request").hide();
        }else{
            current.siblings(".Pan").text("密码格式不正确！").show();
            current.siblings(".request").hide();
        }*/
        FromCheck(current,value,reg,"密码格式不正确！");
    });
    /*验证码的验证*/
    $(".vertify_m #vertify_m").blur(function (e)  {
        var current=$(e.target);//获取文本框
        var value=current.val();//获取文本框的值
       // var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;//正则表达式
        if(value==''){
            current.siblings(".request").hide();
            current.siblings(".Pan").show();
            //$(".user #username").css('border','1px solid red');
            current.css('border','1px solid red');
        }else{
            current.siblings(".Pan").text("验证码格式不正确！").show();
            current.siblings(".request").show();
        }
    });
    //重复利用的代码，节省，传参数的方式
    function FromCheck(current,value,reg,text) {
        if(value==''){
            current.siblings(".request").hide();
            current.siblings(".Pan").show();
            //$(".user #username").css('border','1px solid red');
            current.css('border','1px solid red');
        }else if(reg.test(value)){
            current.siblings(".right").show();
            current.siblings(".request").hide();
        }else{
            current.siblings(".Pan").text(text).show();
            current.siblings(".request").hide();
        }
    }









});