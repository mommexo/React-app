document.addEventListener('DOMContentLoaded', function () {

    function changeOnHover() {
        var navigationLinks = document.querySelectorAll('.main-navigation a');

        navigationLinks.forEach(function (link) {
            link.addEventListener('mouseover', function () {
                link.style.backgroundColor = "lightgray";
            });

            link.addEventListener('mouseout', function () {
                link.style.backgroundColor = "";
            });
        });
    }


    function enhanceSearchBox() {
        var searchBox = document.getElementById('searchBox');

        if (searchBox) {
            searchBox.addEventListener('focus', function () {
                searchBox.style.border = "2px solid red";
            });

        } else {
            console.error("EROR");
        }
    }

    changeOnHover();
    enhanceSearchBox();
});
