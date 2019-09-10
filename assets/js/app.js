$(document).ready(function() {
  // inicio
  $('.carousel').carousel({
      dist:-60,
      indicators: true
    });
  $('#btn1').click(firstView);
  function firstView() {
    $('#container').attr('value', 'inicio');    
    markMenu();
    $('#container').html(`<section id="inicio">
      <div class="foto">
        <img src="assets/img/perfil.jpeg" alt="">
      </div>
      <div class="intro">
        <div class="animationInit">
          <svg viewBox="75 -45 502 102">
          <text text-anchor="middle" x="50%" y="50%">Luis</text>
        </svg>
        </div>
        <div class="apellido">
          <svg viewBox="0 -20 530 70">
          <text text-anchor="middle" x="50%" y="50%">Carmona</text>
        </svg>
        </div>
        <h5> Desarrollador Front-end</h5>
        <br>
        <div id="seeMore"><i class="fa fa-arrow-right"></i> Aquí puedes ver mi trabajo</div>           
      </div>
    </section>`);
    $('#seeMore').click(portfolio); 
  };
  firstView();
  // portafolio
  $('#btn2').click(portfolio); 
  function portfolio() {
    $('#container').attr('value', 'portafolio');
    markMenu(); 
    $('#container').html(`<section id="portafolio">
      <div class="carousel">            
        <a class="carousel-item" href="https://gilconio.github.io/VideoGamers/" target="_blank">
          <div class="overlay">
            <h5>Sitio VideoGamers</h5>
            <p>Desarrollo con Bootstrap 4 <span>Ver más ></span></p>
          </div>
          <img src="assets/img/primer-proyecto.png">
        </a>

        <a class="carousel-item" href="https://gilconio.github.io/VideoGamers/" target="_blank">
          <div class="overlay">
            <h5>Sitio VideoGamers</h5>
            <p>Desarrollo con Bootstrap 4 <span>Ver más ></span></p>
          </div>
          <img src="assets/img/primer-proyecto.png">
        </a>

        <a class="carousel-item" href="https://gilconio.github.io/VideoGamers/" target="_blank">
          <div class="overlay">
            <h5>Sitio VideoGamers</h5>
            <p>Desarrollo con Bootstrap 4 <span>Ver más ></span></p>
          </div>
          <img src="assets/img/primer-proyecto.png">
        </a>
        
      </div>
    </section>`);
    $('.carousel').carousel({
      dist:-60,
      indicators: true
    });
  };
  // sobremi
  $('#btn3').click(() => {
    $('#container').attr('value', 'sobreMi');
    markMenu();
    $('#container').fadeIn("slow").html(`<section id="sobreMi">      
      <div class="der">
        <h4>Creatividad y persistencia</h4>
        <p>
          Desde que empecé a diseñar sitios web descubrí que el
          código me entretiene y me motiva a seguir
          investigando. He profundizado mis conocimientos en
          programación y desarrollo web front end de forma autodidacta.
          He trabajado de forma independiente y para empresas, con
          clientes propios y colaborando con otros profesionales. También he participado en proyectos bajo la metodología Agil.
        </p>
        <br>
        <h5>Skills</h5>
        <div class="icons">
          <a href="#"><i class="fab fa-js"></i></a>
          <a href="#"><i class="fab fa-html5"></i></a>
          <a href="#"><i class="fab fa-angular"></i></a>
          <a href="#"><i class="fab fa-css3"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-sass"></i></a>          
          <a href="#"><i class="fab fa-wordpress"></i></a> 
          <a href="#"><i class="fab fa-php"></i></a> 
        </div>   
      </div>
    </section>`);
  });
  // contacto
  $('#btn4').click(() => {
    $('#container').attr('value', 'contacto');
    markMenu();
    $('#container').html(`<section id="contacto">
      <div class="izq">        
        <svg viewBox="0 0 2000 500">
          <text text-anchor="middle" x="50%" y="50%">hablemos!</text>
        </svg>
        <div class="contactText">
          <p><a href="mailto:luiscarmona981@gmail.com"><i class="fa fa-envelope"></i>luiscarmona981@gmail.com </a></p>
        <p><a href="https://www.linkedin.com/in/luiscarmona981/"><i class="fab fa-linkedin"></i> Linkedin/luis-carmona</a></p> 
        </div>             
      </div>   
    </section>`);
  });

});

// cambia los estilos del menú
function markMenu() {
  if($('#container').attr('value') === 'inicio') {
    resetMenu();
    $('#btn1').css({'background-color': '#555', 'color': 'white'});
  };
  if($('#container').attr('value') === 'portafolio') {
    resetMenu();
    $('#btn2').css({'background-color': '#42C8C3', 'color': 'white'});
  };
  if($('#container').attr('value') === 'sobreMi') {
    resetMenu();
    $('#btn3').css({'background-color': '#6CAE21', 'color': 'white'});
  };
  if($('#container').attr('value') === 'contacto') {
    resetMenu();
    $('#btn4').css({'background-color': '#F74B61', 'color': 'white'});
  };
}

function resetMenu() {
  $('.btnM').css({'background-color': '', 'color': ''});
}


