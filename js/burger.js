var $hamburger = $(".hamburger");
var $menu = $(".navbar-wrap");
  $hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
		$menu.toggleClass("navbar-wrap--hidden");
    // Do something else, like open/close menu
	});


