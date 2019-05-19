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
        case 'http://ajax/pages/blog.html':
            $('#content').load(url + '#blog');
            console.log('blog link');
            break;

    }

    /* $('#test').remove();
     $('#content').load(url + '#about');*/

});