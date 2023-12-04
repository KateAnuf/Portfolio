const formItems = document.querySelectorAll('.form-input');

for(let item of formItems){
    const thisParent = item.closest('.form-item');
    const thisPlaceholder = thisParent.querySelector('.fake-placholder');

    //Если инпут в фокусе 

    item.addEventListener('focus',function(){
        thisPlaceholder.classList.add('active');

    });

    //Если инпут теряет фокус 
    item.addEventListener('blur',function(){

        if(item.value.length > 0){
            thisPlaceholder.classList.add('active');
        }
        else{
            thisPlaceholder.classList.remove('active');
        }

    })


}