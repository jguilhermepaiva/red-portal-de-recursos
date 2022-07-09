main()
main0()

 function getData(url){
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
 }

 function criaCard0(recurso){
   card = document.createElement("div")
   var link = document.createElement("a");
   var img = document.createElement("img");
   img.src = "https://api.portalmec.c3sl.ufpr.br"+recurso.thumbnail;
    //img.href = "https://api.portalmec.c3sl.ufpr.br"+recurso.thumbnail;
   card.appendChild(img);


   return card
 }


 function criaCard(recurso){

    
    card = document.createElement("div")
    //var link = document.createElement("a");
    
   
   // var img = document.createElement("img");
   // img.src = "https://api.portalmec.c3sl.ufpr.br"+recurso.thumbnail;
    //img.href = "https://api.portalmec.c3sl.ufpr.br"+recurso.thumbnail;
   // card.appendChild(img);

    var tdName = document.createElement("h2");
    tdName.innerHTML ="Nome: "+ recurso.name;
   
    tdDescription = document.createElement("h4")
    tdDescription.innerHTML ="Descrição: "+  recurso.description
   
    tdAuthor = document.createElement("h4")
    tdAuthor.innerHTML ="Autor: "+  recurso.author
    
    tdCategory = document.createElement("h4")
    tdCategory.innerHTML ="Categoria: "+  recurso.object_type 
    
    tdLink = document.createElement("h4")
    tdLink.innerHTML ="Link: "+  recurso.default_attachment_location  

    tdTags = document.createElement("h4")
    tdTags.innerHTML ="Palavras-chave: "+  recurso.tags.map(function(e){
     return e.name;    
   })

    tdDetails = document.createElement("h4")
    tdDetails.innerHTML = "Página de Detalhes: https://plataformaintegrada.mec.gov.br/recurso/"+recurso.id


    
    card.appendChild(tdName);
    card.appendChild(tdDescription)
    card.appendChild(tdAuthor)
    card.appendChild(tdCategory)
    card.appendChild(tdTags)
    card.appendChild(tdLink)
    card.appendChild(tdDetails)

    return card
 }

 function main(){
    let data = getData("https://api.portalmec.c3sl.ufpr.br/v1/learning_objects")
    let recursos = JSON.parse(data)
    let tabela = document.getElementById("tabela")
    console.log(recursos)

    recursos.forEach(element =>{
        let card = criaCard(element);
        tabela.appendChild(card);
    })
    recursos.forEach(element =>{
      let card = criaCard(element);
      tabela.appendChild(card);
    })
    recursos.forEach(element =>{
    let card = criaCard(element);
   tabela.appendChild(card);
     })
    recursos.forEach(element =>{
      let card = criaCard(element);
      tabela.appendChild(card);
      })
    recursos.forEach(element =>{
       let card = criaCard(element);
      tabela.appendChild(card);
      })
   
   
 }

 function main0(){
   let data = getData("https://api.portalmec.c3sl.ufpr.br/v1/learning_objects")
   let recursos = JSON.parse(data)
   let tabela0 = document.getElementById("tabela0")

   recursos.forEach(element =>{
       let card = criaCard0(element);
       tabela0.appendChild(card);
   })
   recursos.forEach(element =>{
      let card = criaCard0(element);
      tabela0.appendChild(card);
  })
  recursos.forEach(element =>{
   let card = criaCard0(element);
   tabela0.appendChild(card);
   })
   recursos.forEach(element =>{
      let card = criaCard0(element);
      tabela0.appendChild(card);
   })
   recursos.forEach(element =>{
      let card = criaCard0(element);
      tabela0.appendChild(card);
   })
  
  
}

    




 

   
    
   