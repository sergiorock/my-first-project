$(document).ready(function(){
  moment.locale('es');
  //Slider
  $('.bxslider').bxSlider({
   mode: 'fade',
   slideWidth: 1300,
   responsive: true
 });

  //Posts
  var posts = [
    {
      title: 'Test Article 1',
      date: moment().format('LLL'),
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic?"
    },
    {
      title: 'Test Article 2',
      date: moment().format('LLL'),
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic?"
    },
    {
      title: 'Test Article 3',
      date: moment().format('LLL'),
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic?"
    },
    {
      title: 'Test Article 4',
      date: moment().format('LLL'),
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic?"
    },
    {
      title: 'Test Article 5',
      date: moment().format('LLL'),
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus incidunt blanditiis nulla asperiores necessitatibus, odio accusantium adipisci aspernatur hic?"
    },
  ];

  posts.forEach((item, index) => {
    var post = `
    <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        <a href="#" class="button-more">Leer más...</a>
    </article>
    `;
    $('#posts').append(post);
  });

  //selector theme
  var theme = $('#theme');
  $('#to-green').click(() => {
    theme.attr('href', 'css/green.css');
  });

  $('#to-red').click(() => {
    theme.attr('href', 'css/red.css');
  });

  $('#to-blue').click(() => {
    theme.attr('href', 'css/blue.css');
  });

  //Scroll to top
  $('.up').click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);

    return false;
  });

  //Fake login
  $('#login form').submit(function(){
    var form_name = $('#form_name').val();
    localStorage.setItem('form_name', form_name);
  });

  var form_name = localStorage.getItem('form_name');

  if (form_name != null && form_name != 'undefined') {
    var about_p = $('#about p');
    about_p.html('<br><strong> Bienvenido ' + form_name +'</strong> ');
    about_p.append("<a href='#' id='logout'> Cerrar sesión</a>")
    $('#login').hide();

    $('#logout').click(function(){
      localStorage.clear();
      location.reload();
    });
  };

});
