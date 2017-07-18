$(".navbar-nav li a").click(function(event) 
	{
	   if (!$(this).parent().hasClass('dropdown'))
	       $(".navbar-collapse").collapse('hide');
	});
/* Bootstrap's default setting is to keep the menu open when you click on a menu item. 
You can manually override this behaviour by calling .collapse('hide'); 
on the jQuery element that you want to collapse. */
