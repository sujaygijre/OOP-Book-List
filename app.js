function Book(title,author,isbn)
{
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}

function UI(){}

UI.prototype.addbooktoList=function(book)
{
    const list=document.querySelector('#book-list');
    const row= document.createElement('tr');

    row.innerHTML=`
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>`;

      list.appendChild(row);  

      
}

UI.prototype.clearlist=function()
{
    document.querySelector('#title').value="";
    document.querySelector('#author').value="";
    document.querySelector('#isbn').value="";

    console.log("cleared all the elements");
}

UI.prototype.deletelist=function(target)
{
    target.parentElement.parentElement.remove();
}

document.getElementById('book-form').addEventListener('submit',
function(e){

    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const isbn=document.querySelector('#isbn').value;

    const book = new Book(title,author,isbn);

    if(title==='' || author==='' || isbn==='')
    {
        if(title==='' && author!=='' && isbn!=='')
        {
            alert(" The title field cannot be left blank");
        }
        else if(author==='' && title!=='' && isbn!=='')
        {
            alert(" The author field cannot be left blank");
        }
        else if(author!=='' && title!=='' && isbn==='')
        {
            alert(" The isbn field cannot be left blank");
        }
    }
    else
    {
        const ui=new UI();
        ui.addbooktoList(book);
        ui.clearlist();
    }
        
    

   // e.preventDefault();
})

document.getElementById('book-list').addEventListener('click',function(e)
{

    const ui=new UI();

    if(e.target.className==='delete')
    {
        ui.deletelist(e.target);
    }

    console.log(e.target.className);

    e.preventDefault();
})