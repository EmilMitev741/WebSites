let moreBtn = document.querySelectorAll("moreBtn");
let moreText = document.querySelectorAll("moreText");

console.log(moreBtn);

document.addEventListener('click', (evt) => {
    // console.log(evt.target);

    const target = evt.target;



    if (target.classList.contains("moreBtn")) {
        const parent = target.closest('.text');
        const text = parent.querySelector('.moreText');

        if (!target.classList.contains("active")) {
            target.classList.add("active");
            text.classList.add("show");
            target.innerHTML = "Show less";
            return;
        } else {
            target.classList.remove('active');
            text.classList.remove('show');
            target.innerHTML = "Read more";
        }


    }
});
// lessBtn.addEventListener('click', showLess);



function solve() {


    // function showMore() {
    //     moreText[0].classList.remove("hidden");
    //     moreText[0].classList.add("show");

    //     moreBtn[0].classList.remove("show");
    //     moreBtn[0].classList.add("hidden");

    //     lessBtn[0].classList.add("show");
    //     lessBtn[0].classList.remove("hidden");
    // }

    // function showLess() {
    //     moreText[0].classList.add("hidden");
    //     moreText[0].classList.remove("show");

    //     moreBtn[0].classList.add("show");
    //     moreBtn[0].classList.remove("hidden");

    //     lessBtn[0].classList.add("hidden");
    //     lessBtn[0].classList.remove("show");
    // }
}