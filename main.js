window.onload = () =>
{
  function id(i){return document.getElementById(i);}
  function cls(c){return document.getElementsByClassName(c);}
  function tag(t){return document.getElementsByTagName(t);}
  
  id('run').onclick = () => id('output').contentWindow.document.innerHTML = id('input').value;
};
