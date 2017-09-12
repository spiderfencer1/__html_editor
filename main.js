try
{
  window.onload = () =>
  {
    function id(i){return document.getElementById(i);}
    function tag(t){return document.getElementsByTagName(t);}

    id('run').onclick = () =>
    {
      const doc = id('output').contentWindow.document;
      doc.open();
      doc.write(id('input').value);
      doc.close();
    }
    id('save').onclick = () =>
    {
      const el = document.createElement('a');
      el.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(id('input').value));
      el.setAttribute('download',id('fname').value);
      el.style.display = 'none';
      document.body.appendChild(el);
      el.click();
      document.body.removeChild(el);
    }
  };
catch(ex)
{
  const out = document.getElementById('output').contentWindow.document;
  out.open();
  out.write(ex.message);
  out.close();
}
