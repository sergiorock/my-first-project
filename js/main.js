$(document).ready(function(){

  //Busca en la barra de dirección. -1 significa que no encuentra el string
  //Entonces en este caso si index es distinto a NO encontrado (encontrado) carga el contenido.
  if (window.location.href.indexOf("index") != -1){
  //Slider
  $('.bxslider').bxSlider({
   mode: 'fade',
   slideWidth: 1300,
   responsive: true
  })
  };

 //Busca en la barra de dirección. -1 significa que no encuentra el string
 //Entonces en este caso si index es distinto a NO encontrado (encontrado) carga el contenido.
 if (window.location.href.indexOf("index") != -1){
  //Posts
  moment.locale('es');
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
};

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

  if (window.location.href.indexOf("about") != -1){
    $('#acordeon').accordion();
  }

  if (window.location.href.indexOf("clock") != -1){
    setInterval(function(){
      var clock = moment().format("hh:mm:ss");
      $('#clock').html(clock);
    },1000);
  };

});
