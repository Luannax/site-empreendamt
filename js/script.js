/********************Navbar para telas de pc********************/
$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
  });
    
  window.addEventListener("scroll", function() {
    var elemento = document.querySelector(".logo a");
    var spanElement = document.createElement("span");
    spanElement.id = "msg";

    if (window.scrollY > 20) {
      elemento.innerHTML = '<img id="msg" src="./img/logo.png"/>';
      elemento.appendChild(spanElement);
    } else {
      elemento.innerHTML = "Bem-<span>vindo!</span>";
    }
  });   

  var typed = new Typed(".typing", {
    strings: ["Empreendorismo", "Inovação", "Impulsionamento de negócios no MT", "todas as pessoas!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  }); 
}); 


$('.menu-btn-1024').click(function(){
  var menuIcon = $('.menu-btn-1024 i');
  $('.navbar-1024 .menu-1024').toggleClass("active");
    if (menuIcon.hasClass('fa-bars')) {
      menuIcon.removeClass('fa-bars').addClass('fa-times');
    } else {
      menuIcon.removeClass('fa-times').addClass('fa-bars');
    }  

  $('a').click(function() {
    var menu = $('.navbar-1024 .menu-1024');
    var menuIcon = $('.menu-btn-1024 i');
    menu.removeClass("active");
    menuIcon.removeClass('fa-times').addClass('fa-bars');
  });
});
   

/********************Carousel passo a passo / time / eventos / mentoria********************/
$(document).ready(function(){
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0:{
          items: 1,
          nav: false
        },
        600:{
          items: 2,
          nav: false 
        },
        1000:{
          items: 2,
          nav: false 
        }
      }
    });

    $('.carousel-time').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0:{
          items: 1,
          nav: false
        },  
        600:{
          items: 2,
          nav: false 
        },
        1000:{
          items: 2,
          nav: false 
        }
      }
    });

    $(".carousel-novo").owlCarousel({
      // Configurações para o primeiro carrossel de eventos
      items: 1,
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
    });

    $(".carousel-mentoria").owlCarousel({
      // Configurações para o segundo carrossel (Mentorias)
      items: 3,
      center: true,
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoWidth: false,
    });
});


/********************Section Team********************/
function abrir(botao) {
  var oculto = document.querySelector('.oculto');
  var equipeMentores = document.getElementById('voltar-btn').offsetTop;

  if (oculto.style.display === 'none' || oculto.style.display === '') {
    oculto.style.display = 'flex';
    botao.innerHTML = '<i class="bi bi-chevron-up"></i>';
  } else {
    oculto.style.display = 'none';
    botao.innerHTML = '<i class="bi bi-chevron-down"></i>';

    // Rolar de volta para a seção de equipe de mentores
    window.scrollTo({ top: equipeMentores, behavior: 'smooth' });
  }
}


/********************Section News********************/
const novidadesPorMesAno = {
  "novembro": [
    {
      title: "Empreenda MT Pitch 1.0",
      youtubeVideoId: "https://www.youtube.com/embed/7_9RmS_oPYQ?si=kNalKsskJfHN36-S",
    }
  ],
  "marco": [
    {
      title: "Corte EmpreendaMT - Histórico e Funcionamento do Projeto",
      youtubeVideoId: "https://www.youtube.com/embed/kjOEwzVySd4?si=iD9HDtfDtk0W9dVm",
    }
  ],
  "julho": [
    {
      title: "Pílula do Empreendedor #1 - Registro de Marca",
      youtubeVideoId: "https://www.youtube.com/embed/eF9LKixxCtw?si=n6VUl6p5i_Etphzo",
    },
    {
      title: "Pílula do Empreendedor #2 - Marcas não registráveis",
      youtubeVideoId: "https://www.youtube.com/embed/X_OXAVChXLQ?si=H7iGIDC77CZbtxBS",
    }
  ],
  "agosto": [
    {
      title: "Pílula do Empreendedor #3 - Patentes",
      youtubeVideoId: "https://www.youtube.com/embed/4MfZE36Z05w?si=NVIwkUv6CXNexQIy",
    },
    {
      title: "Pílula do Empreendedor #4 - Marcas Registráveis",
      youtubeVideoId: "https://www.youtube.com/embed/iWW8B1OGnt0?si=qG3OCqAZa2VyDB_U",
    }
  ],
  "setembro": [
    {
      title: "Pílula do Empreendedor #5 - Registro de Software",
      youtubeVideoId: "https://www.youtube.com/embed/Mc4mHWKI7Jg?si=XhiMhuyMMvEpgLZA",
    },
    {
      title: "Pílula do Empreendedor #6 - Contrato de Vesting",
      youtubeVideoId: "https://www.youtube.com/embed/J4IhQg9Go50?si=spPbkTLl9qWfGqYE",
    }, 
  ],
  "outubro": [
    {
      title: "Pílula do Empreendedor #7 - Crowdfunding",
      youtubeVideoId: "https://www.youtube.com/embed/sQXRSvJ07Ho?si=1sE2fPwWQOhae0mc",
    },
    {
      title: "Pílula do Empreendedor #8 - Marco Legal das Startups",
      youtubeVideoId: "https://www.youtube.com/embed/-cz8OK_XMBI?si=5KLC_50LFXfWhNto",
    }
  ],
  "dezembro": [
    {
      title: "Pílula do Empreendedor #9 - InovaSimples (Formalização de Startups)",
      youtubeVideoId: "https://www.youtube.com/embed/Bx4viMBn33I?si=jKLmD35-opr-ZIjV",
    },
  ],
  "marco": [
    {
      title: "Pílula do Empreendedor #10 - LGPD",
      youtubeVideoId: "https://www.youtube.com/embed/128tHpRaFwQ?si=yyqQeBJpQJblC-7q",
    }
  ]
};
const videosPorMes = {};
function atualizarNovidades() {
  const mesInput = document.getElementById("mesInput").value.toLowerCase();
  const videosContainer = document.querySelector(".videos-container");

  // Verifica se o mês pesquisado tem vídeos correspondentes
  if (novidadesPorMesAno[mesInput]) {
    // Salva os vídeos correspondentes ao mês na variável videosPorMes
    videosPorMes[mesInput] = novidadesPorMesAno[mesInput];

    // Limpa os vídeos existentes
    videosContainer.innerHTML = "";

    videosPorMes[mesInput].forEach(function(video) {
      const videoItem = document.createElement("div");
      videoItem.classList.add("video-item");

      const iframe = document.createElement("iframe");
      iframe.src = video.youtubeVideoId;
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("frameborder", "0");

      videoItem.appendChild(iframe);
      videosContainer.appendChild(videoItem);
    });
  } else {
    // Se não houver vídeos para o mês pesquisado, exibe uma mensagem
    alert('Não há vídeos disponíveis para este mês.');
  }
}
