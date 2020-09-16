window.onload=function(){
  var month=document.getElementById('month');
  setInterval(function(){
    var now=new Date();
    var m=now.getMonth()+1;
    var d=now.getDate();
    if(m==1){
      m2 = "JAN"
    }
    if(m==2){
      m2 = "FEB"
    }
    if(m==3){
      m2 = "MAR"
    }
    if(m==4){
      m2 = "APR"
    }
    if(m==5){
      m2 = "MAY"
    }
    if(m==6){
      m2 = "JUNE"
    }
    if(m==7){
      m2 = "JUL"
    }
    if(m==8){
      m2 = "AUG"
    }
    if(m==9){
      m2 = "SEP"
    }
    if(m==10){
      m2 = "OCT"
    }
    if(m==11){
      m2 = "NOV"
    }
    if(m==12){
      m2 = "DEC"
    }
    month.innerHTML=m2.toString() + "<br>" + d.toString();
  },1000);
};
