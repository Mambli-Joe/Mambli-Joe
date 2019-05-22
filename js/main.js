$('li').on('click', function (event) {
    event.preventDefault();
    var link = this.children;
    var url = link[0].href;
    console.log(url);
    $('li.current').removeClass('current');
    $(this).addClass('current');

    switch (url) {
        case 'http://ajax/pages/about.html':
            $('#content').load(url + '#about');
            console.log('about link');
            break;
        case 'http://ajax/pages/portfolio.html':
            $('#content').load(url + '#portfolio');
            console.log('portfolio link');
            break;
        case 'http://ajax/pages/contact.html':
            $('#content').load(url + '#contact');
            console.log('contact link');
            break;
        case 'http://ajax/pages/skills.html':
            $('#content').load(url + '#skills');
            console.log('skills link');
            break;

    }

});

	//LOADER

	$(window).on('load', function(){
		$('#preloader').fadeOut(2000);
    });
    
    //WOW ANIMATE
    new WOW().init();
    
    //WORKS
    