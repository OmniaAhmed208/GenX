(function () {
    const btns = document.querySelectorAll('.titles .button');
    const items = document.querySelectorAll('.serviceItem');

    btns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            e.preventDefault();
            const filter = e.target.dataset.filter;
            console.log(filter)

            items.forEach((item)=>{
                if(filter == 'all'){
                    item.style.display = 'block';
                }
                else{
                    if(item.classList.contains(filter)){
                        item.style.display = 'block';
                    }
                    else{
                        item.style.display = 'none';
                    }
                }
            })
        })
    })
})();

