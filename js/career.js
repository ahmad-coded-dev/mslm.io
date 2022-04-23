function active_btn(clicked_button) {
    if (clicked_button.classList.contains('btn')) {
    } else {
        let job_title_btns = document.getElementsByClassName('job_title');
        for (let i = 0; i < job_title_btns.length; i++) {
            job_title_btns[i].classList.remove('btn');
        }
        hide_all_jobs_desc();
        clicked_button.classList.add('btn');
        clicked_button.scrollIntoView();
    }
}
function selected_section(this_section) {
    let jobs_section = document.getElementsByClassName('section');
    for (let i = 0; i < jobs_section.length; i++) {
        jobs_section[i].style.display = 'none';
    }
    let selected_section = document.getElementsByClassName(this_section);
    selected_section[0].style.display = 'block';
    hide_all_jobs_desc();
}
function all_section() {
    let jobs_section = document.getElementsByClassName('section');
    for (let i = 0; i < jobs_section.length; i++) {
        jobs_section[i].style.display = 'block';
    }
    hide_all_jobs_desc();
}
function hide_all_jobs_desc() {
    let all_jobs = document.getElementsByClassName('job');
    for (let i = 0; i < all_jobs.length; i++) {
        all_jobs[i].classList.remove('show_job_desc');
    }
}
function show_job_desc(selected_job) {
    if (selected_job.parentElement.classList.contains('show_job_desc')) {
        selected_job.parentElement.classList.remove('show_job_desc');
    } else {
        hide_all_jobs_desc();
        selected_job.parentElement.classList.add('show_job_desc');
        selected_job.parentElement.scrollIntoView();
    }
}

jobs_dropdown_menu = document.getElementsByClassName('jobs_dropdown_menu')[0];
function GetSelectedTextValue(mslm_jobs) {
    var selectedValue = mslm_jobs.value;
    var get_class = String(selectedValue);
    jobs_dropdown_menu.scrollIntoView();
    if (get_class == 'all') {
        all_section();
    } else {
        selected_section(String(selectedValue));
    }
}

let modal = document.getElementsByClassName('modal')[0];
function showModal() {
    modal.classList.add('show_modal');
}
modal.addEventListener('click', () => {
    modal.classList.remove('show_modal');
});
window.addEventListener('touchmove', () => {
    modal.classList.remove('show_modal');
});
setInterval(() => {
    if (modal.classList.contains('show_modal')) {
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.position = '';
        document.body.style.top = '';
    }
}, 100);
$RefreshReg$ = () => {};
