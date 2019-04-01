//on site
if('serviceWorker' in navigator)
{
  window.addEventListener('load', () =>
  {
    navigator.serviceWorker
    .register('SW_stat.js')
    .then(reg => console.log('service worker: registered'))
    .catch(err => console.log(`service worker: error: ${err}`));
  });
}

displayStart = function(){
   // the code required to display a view
     var text = document.getElementById('Books').innerHTML;
     document.getElementById('body').innerHTML = text;
};
window.onload = function(){
  displayStart();
  change_view("the end",'page',1);
}

change_view = function(book,type,page){
  //var text = document.getElementById(val).innerHTML;
  window.scroll(0, 0);
  var content,i;
  content=document.getElementsByClassName(type);
    for (i =0 ; i<content.length;i++){
      content[i].style.display = "none";
    }
  content=document.getElementsByClassName(book);
  content =content[0].childNodes[page];
  content.style.display="block";

}


function SwitchTab(evnt,name,type,table){
var content, tablink,i;
  content=document.getElementsByClassName(type);
    for (i =0 ; i<content.length;i++){
      content[i].style.display = "none";
    }
  tablink=document.getElementsByClassName(table);
  for(i=0; i<tablink.length;i++){
    tablink[i].className = tablink[i].className.replace(" active","");
  }
  document.getElementById(name).style.display="block";
  evnt.currentTarget.className += " active";
  change_view(name,'page',1);

};
