const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading= document.querySelector('h5');

// clearBtn.addEventListener('click',runEvent);
//Double click
// clearBtn.addEventListener('dblclick',runEvent);

// clearBtn.addEventListener('mousedown',runEvent);
// clearBtn.addEventListener('mouseup',runEvent);
// card.addEventListener('mouseenter',runEvent);
// card.addEventListener('mouseleave',runEvent);
// card.addEventListener('mouseover',runEvent);
// 
card.addEventListener('mousemove',runEvent);


//event Handler

function runEvent(e){
  console.log(`event type: ${e.type}`);
  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor= `rgb(${e.offsetX},${e.offsetY},40)`;
}

