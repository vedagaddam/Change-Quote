var i = 0;
var zero = "The best way to predict the future is to invet it.";
var one = "The question of whether computers can think is like the question of whether submarines can swim";
var two = "Know how to learn. Then, want to learn.";
var three = "If it's a good idea, go ahead and do it. It is much easier to apologize than it is to get permission.";
  $(document).ready(function() {
    $("#next").on("click", function(){
      if(i==0){
      $(".newmess").html(one);
        i++;
      }
     else if(i==1){
      $(".newmess").html(two);
        i++;
      }
      else if(i==2){
      $(".newmess").html(three);
        i++;
      }
      else if(i==3){
        $(".newmess").html(zero);
        i = 0;
      }
    });
    
    $("#tweet").on("click", function(){
    if(i==0){
      $('#tweet').attr("href", 'https://twitter.com/intent/tweet?text=' + zero);
    }
    else  if(i==1){
      $('#tweet').attr("href", 'https://twitter.com/intent/tweet?text=' + one);
    }
    else if(i==2){
      $('#tweet').attr("href",'https://twitter.com/intent/tweet?text=' +  two);
    }
    else  if(i==3){
      $('#tweet').attr("href", 'https://twitter.com/intent/tweet?text=' + three);
    }
      
      
      
    });
    
  });