
window.addEventListener("keydown", (event) => {

  
  document.getElementById("navhost").focus();
   document.getElementById("navhost").style.visibility = "visible";
    idleTime =0;
      // console.log(event.key);
  //document.getElementById("pressed").innerHTML = event.key;
  //document.getElementById("demo").innerHTML = event.code;
  
  
  
      }, true);
  
  
    
  
  
         $(this).keypress(function (e) {
  
             // console.log(idleTime+"  andd  "+document.getElementById("navhost").style.visibility);
                   idleTime = 0;
                    showMenu();
              }
             );
      
  
  
     
             