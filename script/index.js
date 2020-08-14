var imgs=document.querySelectorAll('.banner img')
var nums=document.querySelectorAll('.num li')
var timer;
var showIndex=0;
var preIndex=0;
animate(imgs[showIndex],{'opacity':1},function(){
    timer=setInterval(function(){
        moveNext();
    },3000)
})
function moveNext(){
    imgs[preIndex].className='';
    nums[preIndex].className='';
    imgs[preIndex].style.opacity=0.02;
    showIndex++;
    if(showIndex>=imgs.length){
        showIndex=0;
    }
    imgs[showIndex].className='show';
    nums[showIndex].className='active';
    preIndex=showIndex;
    animate(imgs[showIndex],{'opacity':1});
}
for(var i=0;i<nums.length;i++){
    nums[i].index=i;
    nums[i].onclick=function(){
        clearInterval(timer);
        clearInterval(imgs[showIndex].timer);
        imgs[preIndex].className='';
        nums[preIndex].className='';
        imgs[preIndex].style.opacity=0.02;
        showIndex=this.index;
        imgs[showIndex].className='show';
        nums[showIndex].className='active';
        preIndex=showIndex;
        animate(imgs[showIndex],{'opacity':1});
        timer=setInterval(function(){
        moveNext();
    },3000)
}
}
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
  $('.list li a').css('color','#fff');
  $('.appContent').html('');
})
$('.service').mouseenter(function(){
  $('.move').slideUp(100);
  $('.list li a').css('color','#fff');
  $('.appContent').html('');
})
$('.stores').mouseenter(function(){
  $('.move').slideUp(100);
  $('.list li a').css('color','#fff');
  $('.appContent').html('');
})
$('.society').mouseenter(function(){
  $('.move').slideUp(100);
  $('.list li a').css('color','#fff');
  $('.appContent').html('');
})
$('.goverment').mouseenter(function(){
  $('.move').slideUp(100);
  $('.list li a').css('color','#fff');
  $(this).css('color','#008cff');
  $('.appContent').html('');
})
$('.appMove').mouseleave(function(){
  $(this).slideUp(100);
  $('.list li a').css('color','#fff');
  $('.appContent').html('');
})
$('.move').mouseleave(function(){
    $(this).slideUp(100);
    $('.list li a').css('color','#fff');
    $('.moveContent').html('');
})