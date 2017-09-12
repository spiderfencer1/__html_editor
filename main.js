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
      localStorage.set('__html_editor_file_contents',id('input').value);
    }
    id('load').onclick = () =>
    {
      id('input').value = localStorage.get('__html_editor_file_contents');
    }
  };
catch(ex)
{
  const out = document.getElementById('output').contentWindow.document;
  out.open();
  out.write(ex.message);
  out.close();
}
