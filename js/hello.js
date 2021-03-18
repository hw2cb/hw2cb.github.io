document.getElementById('names').innerHTML = (localStorage.getItem('name'));
function say()
{
    
    var name = document.getElementById('name').value;
    var names = document.getElementById('name');
    var validate = document.getElementById('validate-name');
    
    if(name.match(/^\d+$/) || name.length == 0)
    {
        var validate = document.getElementById('validate-name');
        validate.style.display = 'block';
        
    }
    else 
    {
        var say = 'Приветствую, ' + name;
        validate.style.display = 'none';
        var hide_div = document.getElementById('hide-div');
        document.getElementById('names').innerHTML = say;
        hide_div.style.display = 'block';
        document.getElementById('name').setAttribute('readonly', 'readonly');
        localStorage.setItem('name', say.toString());
    }

};
function openWindow(window)
{
    var dialog = document.getElementById(window);
    dialog.showModal();
};

function closeWindow(window)
{
    var dialog = document.getElementById(window);
    dialog.close();
}
