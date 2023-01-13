const dropDownMenu = document.querySelectorAll(".navigation-list li.hasDropDown");

for (const item of dropDownMenu) {
    item.addEventListener('click', function () {
        const dropDownItems = item.querySelectorAll("ul li");
        const dropDown = item.querySelector("ul");
        const navLinks = document.querySelectorAll(".navigation-list nav > ul > li");

        let dropDownItemsHeight = 0;

        for (const dropDownItem of dropDownItems) {
            dropDownItemsHeight += dropDownItem.getBoundingClientRect().height;
        }

        if (!item.classList.contains('is-expanded')) {
            for (const i of navLinks) {
                const dropDown = i.querySelector('ul');

                if (i.classList.contains('is-expanded')) {
                    dropDown.style.height = '0px';
                    i.classList.remove('is-expanded');
                }
            }

            item.classList.add('is-expanded');
            dropDown.style.height = `${dropDownItemsHeight}px`;
            return;
        }

        dropDown.style.height = '0px';
        item.classList.remove('is-expanded');
    });
}


