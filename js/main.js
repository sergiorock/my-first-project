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

});
