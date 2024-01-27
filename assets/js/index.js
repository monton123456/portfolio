let work = document.getElementById('World')
let education = document.getElementById('education')
let list = document.querySelector('.page-about__profile-list')

console.log(work, education, list);

function Click(){
    console.log('нажали')
}

work.onclick = function(){
    console.log('нажали на work')
    list.innerHTML = '';
    list.insertAdjacentElement('afterbegin',` <article class="profile-item">
              <h5>asdfghjkl;'</h5>
              <div class="profile-item__bottom">
                <h5>qwertyu8i9o0p</h5>
                <div class="profile-item__date">
                  <img src="./assets/img/icons/calendar.svg" alt="" />
                  <h6>2009 - 2014</h6>
                </div>
              </div>
            </article>`)

};

education.onclick = () => {
    console.log('нажали на education')
}
