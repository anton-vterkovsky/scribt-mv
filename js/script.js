let i = 1;
    for(let li of bestsellers__carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    let width = 130; 
    let count = 1; 
    let list = bestsellers__carousel.querySelector('ul');
    let listElems = bestsellers__carousel.querySelectorAll('li');
    let position = 0; 

    bestsellers__carousel.querySelector('.prev').onclick = function() {
    
      position += width * count;
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    bestsellers__carousel.querySelector('.next').onclick = function() {
    
      position -= (width+30) * count;
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };