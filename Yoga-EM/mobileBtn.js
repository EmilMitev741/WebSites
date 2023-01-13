function myFunction() {
    document.querySelector('.navigation-list').classList.toggle('hidden');
    document.querySelectorAll('.mobile-menu img').forEach(btn => {
    btn.classList.toggle('hidden');
    });

    window.onclick = function (event) {
        if (!event.target.matches('.mobile-menu img')) {
            var dropdowns = document.getElementsByClassName('navigation-list');
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (!openDropdown.classList.contains('hidden')) {
                    openDropdown.classList.add('hidden');
                }
            }

            document.querySelector('.openMenu').classList.remove('hidden')
            document.querySelector('.closeMenu').classList.add('hidden')
        }
    }
}
