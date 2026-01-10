    const text1 = "I am Justin Du";
    const text2 = "I am a computer engineering student at Texas A&M University";
    const text3 = "I am an incoming manufacturing intern at Collins Aerospace";
    const element = document.getElementById("typewriter");
    let index = 0;
    let phase = 0;
    
    function typeEffect() {
      if (phase === 0) {
        // typing text1
        element.textContent = text1.slice(0, index++);
        if (index > text1.length) {
          setTimeout(() => {
            phase = 1;
            typeEffect();
          }, 1500);
          return;
        }
      } 
      else if (phase === 1) {
        // deleting back to "I am "
        element.textContent = text1.slice(0, --index);
        if (index === 5) {
          phase = 2;
        }
      } 
      else if (phase === 2) {
        // typing text2
        element.textContent = text2.slice(0, index++);
        if (index > text2.length) {
          setTimeout(() => {
            phase = 3;
            typeEffect();
          }, 2000);
          return;
        }
      }
      else if (phase === 3) {
        // deleting back to "I am "
        element.textContent = text2.slice(0, --index);
        if (index === 5) {
          phase = 4;
        }
      }
      else if (phase === 4) {
        // typing text3
        element.textContent = text3.slice(0, index++);
        if (index > text3.length) {
          setTimeout(() => {
            phase = 5;
            typeEffect();
          }, 2000);
          return;
        }
      }
      else if (phase === 5) {
        // deleting text3 completely
        element.textContent = text3.slice(0, --index);
        if (index === 0) {
          phase = 0;
          index = 0;
        }
      }
      
      setTimeout(typeEffect, 70);
    }
    
    typeEffect();