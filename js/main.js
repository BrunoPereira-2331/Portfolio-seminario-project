(function(){
    let carouselProjetos = new Carousel({
        container: '.quemSou-div-projetos-slide',
        itens: '.quemSou-div-projetos-slide div',
        btnPrev: '.prev',
        btnNext: '.next'
    });
    
    let carouselRecomandacoes = new Carousel({
        container: '.quemSou-div-recomendacoes',
        itens: '.quemSou-div-recomendacoes div',
        btnPrev: '.prev',
        btnNext: '.next'
    });
})()