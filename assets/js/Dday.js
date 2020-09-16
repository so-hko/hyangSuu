window.onload=function(){
  var Dday=document.getElementById('Dday');
  setInterval(function(){
      var now = new Date();
      var then = new Date("JUNE 22,2019");
      var gap = now.getTime() - then.getTime();
      gap = Math.floor(gap / (1000 * 60 * 60 * 24));
      Dday.innerHTML=gap.toString()
    },1000);
};
