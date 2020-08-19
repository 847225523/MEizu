
$('.phone').mouseenter(function(){
    $('.moveContent').html('');
    $('.move').slideDown(267);
    $('.list li a').css('color','#333');
       $.ajax({
          url:'../data/nav.json',
          type:'get',
          dataType:'json',
          success:function(json){
            $('.moveContent').html('');
              var json=json.phones;
              $.each(json,function(index,item){
              var Movedom=` <div >
              <img src="${item.img}">
              <h2>${item.name}</h2>
              <span>${item.price}</span>
            </div>`
             $('.moveContent').append(Movedom);
           
              })
          }
      })
      
  })
  $('.phone').mouseleave(function(){
    // $('.moveContent').html('');
  })
  $('.voice').mouseenter(function(){
    $('.moveContent').html('');
    $('.move').slideDown(267);
     $('.list li a').css('color','#333');
     $.ajax({
        url:'../data/nav.json',
        type:'get',
        dataType:'json',
        success:function(json){
          $('.moveContent').html('');
            var json=json.ears;
            $.each(json,function(index,item){
            var Movedom=` <div >
            <img src="${item.img}">
            <h2>${item.name}</h2>
            <span>${item.price}</span>
          </div>`
           $('.moveContent').append(Movedom);
         
            })
        }
    })
    
  })
  $('.accessory').mouseenter(function(){
    $('.moveContent').html('');
    $('.move').slideDown(267);
     $('.list li a').css('color','#333');
     $.ajax({
        url:'../data/nav.json',
        type:'get',
        dataType:'json',
        success:function(json){
            var json=json.parts;
            $.each(json,function(index,item){
            var Movedom=` <div >
            <img src="${item.img}">
            <h2>${item.name}</h2>
            <span>${item.price}</span>
          </div>`
           $('.moveContent').append(Movedom);
         
            })
        }
    })
    
  })
  $('.accessory').mouseleave(function(){
    // $('.moveContent').html('');
  })
  $('.life').mouseenter(function(){
    $('.moveContent').html('');
    $('.move').slideDown(267);
     $('.list li a').css('color','#333');
     $.ajax({
        url:'../data/nav.json',
        type:'get',
        dataType:'json',
        success:function(json){
          $('.moveContent').html('');
            var json=json.life;
            $.each(json,function(index,item){
            var Movedom=` <div >
            <img src="${item.img}">
            <h2>${item.name}</h2>
            <span>${item.price}</span>
          </div>`
           $('.moveContent').append(Movedom);
         
            })
        }
    })
    
  })
  $('.app').mouseenter(function(){
    $('.appContent').html('');
    $('.appMove').slideDown(267);
     $('.list li a').css('color','#333');
     $.ajax({
        url:'../data/nav.json',
        type:'get',
        dataType:'json',
        success:function(json){
            var json=json.app;
            $.each(json,function(index,item){
            var Movedom=` <div >
            <img src="${item.img}">
            <h2>${item.name}</h2>
            <span>${item.price}</span>
          </div>`
           $('.appContent').append(Movedom);
         
            })
        }
    })
    
  })
  $('.Flyme').mouseenter(function(){
    $('.move').slideUp(100);
    $('.appContent').html('');
  })
  $('.service').mouseenter(function(){
    $('.move').slideUp(100);
    $('.list li a').css('color','#333');
    $('.appContent').html('');
  })
  $('.stores').mouseenter(function(){
    $('.move').slideUp(100);
    $('.list li a').css('color','#333');
    $('.appContent').html('');
  })
  $('.society').mouseenter(function(){
    $('.move').slideUp(100);
    $('.list li a').css('color','#333');
    $('.appContent').html('');
  })
  $('.goverment').mouseenter(function(){
    $('.move').slideUp(100);
    $('.list li a').css('color','#333');
    $('.appContent').html('');
  })
  $('.appMove').mouseleave(function(){
    $(this).slideUp(100);
    $('.list li a').css('color','#333');
    $('.appContent').html('');
  })
  $('.move').mouseleave(function(){
      $(this).slideUp(100);
      $('.list li a').css('color','#333');
      $('.moveContent').html('');
  })
  $('.showSubscribe').mouseenter(function(){
    $('.subscribe').css('display','block');
  })
  $('.footerContent').mouseleave(function(){
    $('.subscribe').css('display','none');
  })
  $('.showWechat').mouseenter(function(){
    $('.weChat').css('display','block');
  })
  $('.footerContent').mouseleave(function(){
    $('.weChat').css('display','none');
  })

  //鼠标移入登录注册以动画样式显示
$('.login').mouseenter(function(){
  $(this).find('.register').stop(true).slideDown(300);
})
$('.login').mouseleave(function(){
  $(this).find('.register').stop(true).slideUp(100);
})
//根据code进行的值进行渲染数据
$(function(){
  if (localStorage.getItem('details')) {
    $('.details').html('');
    var goodsArr = JSON.parse(localStorage.getItem('details'));
  $.ajax({
    type:'get',
    dataType:'json',
    url:'../data/shoplist.json',
    success:function(json){
      var jsonArr=json.phoneList;
      $.each(goodsArr,function(index,item){
        $.each(jsonArr,function(i,obj){
          if(item.code===obj.code){
            var goodsDom=` <div class="bigImg">
            <div class="big">
            <img src="${obj.bigImg}">
          </div>
            <ul class="smallImg">
              <li>
               <img src="${obj.imgs[0]}" id="1">
              </li>
              <li>
                <img src="${obj.imgs[1]}" id="1">
               </li>
               <li>
                <img src="${obj.imgs[2]}" id="1">
               </li>
               <li>
                <img src="${obj.imgs[3]}" id="1">
               </li>
              </ul>
              <p>
                <span>
                  <img src="../image/hide.jpg">
                  <em>收藏</em>
                </span>
                <span>
                  <img src="../image/contrast.jpg">
                  <em>对比</em>
                </span>
              </p>
          </div>
          <div class="detailMessage">
            <h1>${obj.title}</h1>
            <p class="save">
              ${obj.title1}
            </p>
            <div class="support">
              <p><span><i>￥</i><em>${obj.price}</em></span></p>
              <p>
                <span>优惠券</span>
                <span>满4299减100</span>
                <span>满4299减200</span>
                <span>更多>></span>
              </p>
              <p>
                <span>加价购</span>
                <span>另加29元起，即可换购超值商品</span>
                <span>立即加购>></span>
              </p>
            </div>
            <p class="seven">
              <span>支<em></em><i></i>持</span>
              <span>花呗分期</span>
              <span>顺丰发货</span>
              <span>7天无理由退货（具体查看详情）</span>
            </p>
            <p class="service">
              <span>配送服务</span>
              <span>广东省&nbsp;&nbsp;深圳市 <em></em></span>
            </p>
            <p class="worker">
              本商品由魅族负责发货并提供售后服务
              <span>商城客服</span>
            </p>
            <p class="dash"></p>
            <div class="type">
              <div class="typeOne">型<em></em>号</div>
              <div class="typeTwo">
              <span code="17">${obj.type[0]}</span>
              <span code="17pro">${obj.type[1]}</span>
              <span code="17pro-dz">${obj.type[2]}</span>
              <span code="17">${obj.type[3]}</span>
            </div>
          </div>
          <p class="netCom">
             <span>网络类型</span>
             <span>全网通公开版</span>
          </p>
          <div class="colorType">
            <div class="colorL">颜色分类</div>
            <div class="colorR">
              <span code="17">${obj.colors[0]}</span>
              <span code="17pro">${obj.colors[1]}</span>
              <span code="17pro-dz">${obj.colors[2]}</span>
              <span code="17">${obj.colors[3]}</span>
            </div>
          </div>
          <p class="memory">
            <span>内存容量</span>
            <span>8+128GB</span>
            <span>8+256GB</span>
          </p>
          <p class="select">
            <span>选择套餐</span>
            <span code="17">官方标配</span>
            <span code="17pro">${obj.food[1]}<em>${obj.save[0]}</em></span>
            <span code="17pro">${obj.food[2]}<em>${obj.save[1]}</em></span>
          </p>
          <p class="stage">
            <span>花呗分期</span>
            <span>
              <i>${obj.huabei[0].money}</i>
              <em>${obj.huabei[0].time}</em>
            </span>
            <span>
              <i>${obj.huabei[1].money}</i>
              <em>${obj.huabei[1].time}</em>
            </span>
            <span>
              <i>${obj.huabei[0].money}</i>
              <em>${obj.huabei[0].time}</em>
            </span>
          </p>
          <p class="num">
            <span>数<em></em><i></i>量</span>
            <span  class="add">
              <em>-</em>
              <input type="text" value="1" >
              <i>+</i>
            </span>
          </p>
          </div>
        </div>`
          }
 //点击图片放大样式         
          $('.details').append(goodsDom);
          var imgs=document.querySelectorAll('.smallImg img');
          var bigImg=document.querySelector('.big img');
          for(let x=0;x<imgs.length;x++){
            imgs[x].onclick=function(){
              bigImg.src=jsonArr[0].bigImgs[x];
            }
          }
       
//点击时切换样式
$('.typeTwo span').eq(0).css('border','1px solid #000').siblings().css('border','1px solid #BFBFBF');
$('.details').on('click','.typeTwo span',function(){
 $('.details').html('');
var code1=$(this).attr('code');
$(this).css('border','1px solid #000').siblings().css('border','1px solid #BFBFBF');
$.each(jsonArr,function(i,obj){
  if(code1===obj.code){
    var newgoodsDom=` <div class="bigImg">
            <div class="big">
            <img src="${obj.bigImg}">
          </div>
            <ul class="smallImg">
              <li>
               <img src="${obj.imgs[0]}">
              </li>
              <li>
                <img src="${obj.imgs[1]}">
               </li>
               <li>
                <img src="${obj.imgs[2]}">
               </li>
               <li>
                <img src="${obj.imgs[3]}">
               </li>
              </ul>
              <p>
                <span>
                  <img src="../image/hide.jpg">
                  <em>收藏</em>
                </span>
                <span>
                  <img src="../image/contrast.jpg">
                  <em>对比</em>
                </span>
              </p>
          </div>
          <div class="detailMessage">
            <h1>${obj.title}</h1>
            <p class="save">
              ${obj.title1}
            </p>
            <div class="support">
              <p><span><i>￥</i><em>${obj.price}</em></span></p>
              <p>
                <span>优惠券</span>
                <span>满4299减100</span>
                <span>满4299减200</span>
                <span>更多>></span>
              </p>
              <p>
                <span>加价购</span>
                <span>另加29元起，即可换购超值商品</span>
                <span>立即加购>></span>
              </p>
            </div>
            <p class="seven">
              <span>支<em></em><i></i>持</span>
              <span>花呗分期</span>
              <span>顺丰发货</span>
              <span>7天无理由退货（具体查看详情）</span>
            </p>
            <p class="service">
              <span>配送服务</span>
              <span>广东省&nbsp;&nbsp;深圳市 <em></em></span>
            </p>
            <p class="worker">
              本商品由魅族负责发货并提供售后服务
              <span>商城客服</span>
            </p>
            <p class="dash"></p>
            <div class="type">
              <div class="typeOne">型<em></em>号</div>
              <div class="typeTwo">
              <span code="17">${obj.type[0]}</span>
              <span code="17pro">${obj.type[1]}</span>
              <span code="17pro-dz">${obj.type[2]}</span>
              <span code="17">${obj.type[3]}</span>
            </div>
          </div>
          <p class="netCom">
             <span>网络类型</span>
             <span>全网通公开版</span>
          </p>
          <div class="colorType">
            <div class="colorL">颜色分类</div>
            <div class="colorR">
              <span>${obj.colors[0]}</span>
              <span>${obj.colors[1]}</span>
              <span>${obj.colors[2]}</span>
              <span>${obj.colors[3]}</span>
            </div>
          </div>
          <p class="memory">
            <span>内存容量</span>
            <span>8+128GB</span>
            <span>8+256GB</span>
          </p>
          <p class="select">
            <span>选择套餐</span>
            <span>官方标配</span>
            <span>${obj.food[1]}<em>${obj.save[0]}</em></span>
            <span>${obj.food[2]}<em>${obj.save[1]}</em></span>
          </p>
          <p class="stage">
            <span>花呗分期</span>
            <span>
              <i>${obj.huabei[0].money}</i>
              <em>${obj.huabei[0].time}</em>
            </span>
            <span>
              <i>${obj.huabei[1].money}</i>
              <em>${obj.huabei[1].time}</em>
            </span>
            <span>
              <i>${obj.huabei[0].money}</i>
              <em>${obj.huabei[0].time}</em>
            </span>
          </p>
          <p class="num">
            <span>数<em></em><i></i>量</span>
            <span  class="add">
              <em>-</em>
              <input type="text" value="1" >
              <i>+</i>
            </span>
          </p>
          </div>
        </div>`
  }
  $('.details').append(newgoodsDom);
  $('.typeTwo span').eq(0).css('border','1px solid #000').siblings().css('border','1px solid #BFBFBF');
})
})
//点击切换颜色
$('.colorR span').eq(0).css('border','1px solid #000').siblings().css('border','1px solid #BFBFBF');
$('.details').on('click','.colorR span',function(){
var code1=$(this).attr('code');
$(this).css('border','1px solid #000').siblings().css('border','1px solid #BFBFBF');
  $('.bigImg').html('');
  $.each(jsonArr,function(i,obj){
    if(code1===obj.code){
      var bigDom=`
      <div class="big">
      <img src="${obj.bigImg}">
    </div>
      <ul class="smallImg">
        <li>
         <img src="${obj.imgs[0]}">
        </li>
        <li>
          <img src="${obj.imgs[1]}">
         </li>
         <li>
          <img src="${obj.imgs[2]}">
         </li>
         <li>
          <img src="${obj.imgs[3]}">
         </li>
        </ul>
        <p>
          <span>
            <img src="../image/hide.jpg">
            <em>收藏</em>
          </span>
          <span>
            <img src="../image/contrast.jpg">
            <em>对比</em>
          </span>
        </p>`
    }
    $('.bigImg').append(bigDom);
  })
})
//点击改变内存容量
$('.memory span').eq(1).css('border','1px solid #000');
$('.details').on('click','.memory span',function(){
  $(this).css('border','1px solid #000').siblings().css('border','1px solid #BFBFBF');
  $('.memory span').eq(0).css('border','none');
  $('.support').find('p').eq(0).html('');
  var priceDom=` <p><span><i>￥</i><em>${4699}</em></span></p>`
  $('.support').find('p').eq(0).html(priceDom);
})

//改变套餐
$('.select span').eq(1).css('border','1px solid #000');
$('.details').on('click','.select span',function(){
  $(this).css('border','1px solid #000').siblings().css('border','1px solid #BFBFBF');
  $('.select span').eq(0).css('border','none');
  var code2=$(this).attr('code');
 $.each(jsonArr,function(i,obj){
   if(code2===obj.code){
   $('.support').find('p').eq(0).html('');
   var priceDom=` <p><span><i>￥</i><em>${obj.price}</em></span></p>`
   $('.support').find('p').eq(0).html(priceDom);
   $('.stage').html('')
   var huabeiDom=` <span>花呗分期</span>
   <span>
     <i>${obj.huabei[1].money}</i>
     <em>${obj.huabei[1].time}</em>
   </span>
   <span>
     <i>${obj.huabei[1].money}</i>
     <em>${obj.huabei[1].time}</em>
   </span>
   <span>
     <i>${obj.huabei[1].money}</i>
     <em>${obj.huabei[1].time}</em>
   </span>`
   $('.stage').append(huabeiDom);
   }
 })
})


//花呗分期
$('.stage span').eq(1).css('border','1px solid #000');
$('.details').on('click','.stage span',function(){
  $(this).css('border','1px solid #000').siblings().css('border','1px solid #BFBFBF');
  $('.stage span').eq(0).css('border','none');
})
        })
      })
    }
  })
  
     //点击数字修改颜色
         
     $('.details').on('click','.add i',function(){
      var num=$(this).prev().val();
      num++;
      $(this).prev().val(num);
      if(num>=3){
        num=3;
        $(this).prev().val(num);
        $(this).css('color','#e0e0e0');
        $(this).prev().prev().css('color','#000')
      }
      if(num==2){
        $(this).css('color','#000')
      }
  })
  $('.details').on('click','.add em',function(){
    var num=$(this).next().val();
    num--;
    $(this).next().val(num);
    if(num<=1){
      num=1;
      $(this).next().val(num);
      $(this).css('color','#e0e0e0')
      $(this).next().next().css('color','#000')
    }
    if(num==2){
      $(this).css('color','#000')
    }
  })
}
})
