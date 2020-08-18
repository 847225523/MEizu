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
  $('.list li a').css('color','#333');
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
  $(this).css('color','#008cff');
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
$.ajax({
  url:'../data/detail.json',
  type:'get',
  dataType:'json',
  success:function(json){
      var json1=json.newPhone;
      $.each(json1,function(index,item){
          var phoneDom=`<div>
          <img src="${item.img}" alt="">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <span code="${item.code}">
            <i >￥</i>
            <em>${item.price}</em>
          </span>
          <ul>
          <li  class="circle">1</li>
          <li >2</li>
          <li >3</li>
          <li >4</li>
          </ul>
      </div>`
      $('.detailsphone').append(phoneDom);
      })
      Jump();
      //通过点击跳转到详情页面    ;
      function Jump(){
      var divS=document.querySelectorAll('.detailsphone div');
      for(let i=0;i<divS.length;i++){
        divS[i].onclick=function(){
          window.open('./detail.html','_blank');
          var detailsArr=[];
          var code = this.children[3].getAttribute('code');    
          detailsArr.push({"code":code});
          localStorage.setItem('details',JSON.stringify(detailsArr));
        }  
      }
    }
    //  点击推荐新品商品进行切换
var spans=document.querySelectorAll('.title-right span');
spans[1].onclick=function(){
 spans[0].className='';
 spans[2].className='';
 spans[1].className='bgBlue';
    var json2=json.ears;
   $('.detailsphone').html('');
   $.each(json2,function(index,item){
    var earDom=`<div>
    <img src="${item.img}" alt="">
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
    <span code="${item.code}">
      <i>￥</i>
      <em>${item.price}</em>
    </span>
    <ul>
    <li  class="circle">1</li>
    <li >2</li>
    <li >3</li>
    <li >4</li>
    </ul>
</div>`
$('.detailsphone').append(earDom);
})
Jump();
} 
spans[2].onclick=function(){
  var json3=json.parts;
  spans[0].className='';
  spans[1].className='';
  spans[2].className='bgBlue';
 $('.detailsphone').html('');
 $.each(json3,function(index,item){
  var partDom=`<div>
  <img src="${item.img}" alt="">
  <h3>${item.title}</h3>
  <p>${item.desc}</p>
  <span code="${item.code}">
    <i>￥</i>
    <em>${item.price}</em>
  </span>
  <ul>
  <li  class="circle">1</li>
  <li >2</li>
  <li >3</li>
  <li >4</li>
  </ul>
</div>`
$('.detailsphone').append(partDom);
})
Jump();
} 
spans[0].onclick=function(){
  spans[2].className='';
  spans[1].className='';
  spans[0].className='bgBlue';
 $('.detailsphone').html('');
 $.each(json1,function(index,item){
  var phoneDom=`<div>
  <img src="${item.img}" alt="">
  <h3>${item.title}</h3>
  <p>${item.desc}</p>
  <span code="${item.code}">
    <i>￥</i>
    <em>${item.price}</em>
  </span>
  <ul>
  <li  class="circle">1</li>
  <li >2</li>
  <li >3</li>
  <li >4</li>
  </ul>
</div>`
$('.detailsphone').append(phoneDom);
})
Jump();
} 
  }
})
//鼠标移入登录注册以动画样式显示
$('.login').mouseenter(function(){
  $(this).find('.register').stop(true).slideDown(300);
})
$('.login').mouseleave(function(){
  $(this).find('.register').stop(true).slideUp(100);
})

//点击圆点切换图片
$('.detailsphone ').on('click','.detailsphone div ul li',function(e){
  var e=e||event;
  if(e.target.tagName==='LI'){
    console.log(111);
  }
})



