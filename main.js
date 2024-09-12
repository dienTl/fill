var btnlist = document.querySelectorAll('button')
var imagelist = document.querySelectorAll('img')


btnlist.forEach(btn =>{
    btn.addEventListener('click' ,function(e){
        let list= e.currentTarget.getAttribute('type');
        imagelist.forEach(imga =>{
            let food = imga.getAttribute('type');
            console.log(food);
            if(list == 'all' || list == food){
                imga.classList.remove('hide')
            }
            else{
                imga.classList.add('hide')
            }
        })
    })
})