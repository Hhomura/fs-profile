function intersection(animationClass, elementsClass){
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) =>{
            if(entry.isIntersecting){
                entry.target.classList.add(animationClass)
            }else{
                entry.target.classList.remove(animationClass);
            }
        });
    });
        const hiddenElements = document.querySelectorAll(elementsClass);
        hiddenElements.forEach((el) => observer.observe(el));
}

intersection('show', '.resume_sub_container');
intersection('show', '.skills_card');
intersection('show', '.skills_profile');
intersection('slide_in_left', '.skills_experience');
intersection('slide_in_right', '.profile_card_txts');
intersection('slide_in_left', '.profile_links');