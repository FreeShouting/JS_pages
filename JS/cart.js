$(function () {
   // 物品的添加数量
   $(".plus").click(function () {
       var addMount=$(this).parents(".mount_box").children("input");//获取input元素
       var  count = parseInt(addMount.val())+1;//input的值+1
        addMount.val(count);//在input的值上面做变换
       //获取价格的变量
       var Total_price=$(this).parents(".list_shop").find(".sum");
        var single_price=$(this).parents(".list_shop").find(".s_price").html();//获取单价
        var  all_price=count*parseInt(single_price.substring(1));///必须截取价格才能获取值
        Total_price.html("￥"+all_price);
        allMoney();
   });
   // 物品减少数量
    $(".reduce").click(function () {
        var reduMount=$(this).parents(".mount_box").children("input");//获取input元素
        var  count = parseInt(reduMount.val())-1;//input的值+1
        var Total_price=$(this).parents(".list_shop").find(".sum");
        var single_price=$(this).parents(".list_shop").find(".s_price").html();//获取单价
        var  all_price=count*parseInt(single_price.substring(1));  ///必须截取价格才能获取值
        //商品的数量不能一直减  做判断
         if(reduMount.val()>1){
             reduMount.val(count);
             Total_price.html("￥"+all_price);
         }
         allMoney();
    });
//    选择商品========全选商品
    /*var allCheckbox=$('input[type="checkbox"]');*/
    /*   allCheckbox.click(function () {
           for(var i=0;i<allCheckbox.length;i++)
              if(allCheckbox[i].checked==false){
                  allCheckbox[0].checked=true;
                 allCheckbox[i].checked=true;
              } else {
                  allCheckbox[0]=false;
                  allCheckbox[i].checked=false;
              }

       });*/
    // ======全选与单个商品之间的关系=====
       var cartBox=$(".cartCenter_top");//每一个商铺的盒子
       var EveryShop=$(".check_choice");//全选商品
       var son_check=$(".son_check"); //每一个商品下面的子元素
        var wholeCheck=$(".check_whole");//全选商品
         var bigBox=$(".cartCenter");//每一组商品的大盒子
       var allCheckbox=$('input[type="checkbox"]');
    //      ======全选与单个商品之间的关系=====
     wholeCheck.click(function () {
           var checkbox=cartBox.find('input[type="checkbox"]');
           if($(this).is(":checked")){
               checkbox.prop("checked",true)
           }else {
               checkbox.prop("checked",false);
           }
           allMoney();
    });
      son_check.each(function () {
          $(this).click(function () {
              if($(this).is(":checked")){
                  //判断:所有单个商品是否勾选
                  var len=son_check.length;
                  var num=0;
                 son_check.each(function () {
                     if($(this).is(":checked")) {
                         num++;
                     }
                 });
                if(num==len){
                    wholeCheck.prop("checked",true);
                }
              }else {
                  wholeCheck.prop("checked",false);
              }
          })
      });
    // =======每个商铺的选择与全局选举的关系======
        EveryShop.each(function () {
            $(this).click(function () {
                if($(this).is(":checked")){
                    //判断：商铺是否全部选择了
                    var len=EveryShop.length;
                    var num=0;
                    EveryShop.each(function () {
                        if($(this).is(":checked")){
                            num++
                        }
                    });
                    if(num==len){
                        wholeCheck.prop("checked",true);
                    }
                    //店铺下每个checkbox选择的状态
                $(this).parents(".shop_one").parents(".one").next(".cartCenter")
                      .children(".cartCenter_top").find(".son_check").prop("checked",true);
                }else {
                    //全局选择取消
                    wholeCheck.prop("checked",false);
                    //店铺下每个checkbox选择的状态
                   $(this).parents(".shop_one").parents(".one").next(".cartCenter")
                        .children(".cartCenter_top").find(".son_check").prop("checked",false);
                }
                allMoney();
            })
        });

    //=======每个商铺的选择与商铺下面的商品checked选择的关系======
       bigBox.each(function () {
            var $this=$(this);
            var son_check=$this.find(".son_check");
            son_check.each(function () {
                $(this).click(function () {
                    if($(this).is(":checked")){
                        //判断 商铺下面的checked是否全部选择了
                        var len=son_check.length;
                        var num=0;
                        son_check.each(function () {
                            if($(this).is(":checked")){
                                num++;
                            }
                        });
                        if(num==len){
                            $(this).parents(".cartCenter_top").parents(".cartCenter").prev(".one")
                                .find(".check_choice").prop("checked",true);
                        }
                    }else{
                        $(this).parents(".cartCenter_top").parents(".cartCenter").prev(".one")
                            .find(".check_choice").prop("checked",false);
                    }
                    allMoney();
                })
            })

        });
     //========总结==============
       function allMoney() {
           var totalmoney=0;
           var totalnu=0;
           var allBtn=$(".Btn_all a");
            son_check.each(function () {
                if($(this).is(":checked")){
                    var goods=parseInt($(this).parents(".cartCenter_top").find(".list_sum").children(".sum").html().substring(1));
                    var coun=parseInt($(this).parents(".cartCenter_top").find(".shuzi").val());
                    totalmoney=totalmoney+goods;
                   totalnu=totalnu+coun;
                }
            });
           $(".Ready_goods").html(totalnu);
           $(".Suan").html("￥"+totalmoney);

           if(totalmoney!=0 && totalnu!=0){
               if(!allBtn.hasClass('add')){
                  allBtn.addClass('add');
               }
           }else {
               if(allBtn.hasClass('add')){
                   allBtn.removeClass('add')
               }
           }
       }


    /*var EveryShop=$('input[name="single_shop"]');
    var Pan=$(".cartCenter").find("input[name='singe_shop']");
        $("#shop_check").click(function () {
           for(var i=0;i<EveryShop.length;i++);
           if(EveryShop[i].checked==false &&EveryShop==Pan){
               EveryShop[i].checked=true;
           }else{
               EveryShop[i].checked=false;
            }
        })*/


});
