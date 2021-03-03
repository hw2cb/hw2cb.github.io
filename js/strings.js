
function check()
{
    let first = document.getElementById('firststr').value;
    let second = document.getElementById('secondstr').value;
    let hide_div = document.getElementById('hide-div-string');
    var validate = document.getElementById('validate-string');
    if(first.length == 0 || second.length ==0)
    {
        
        validate.style.display = 'block';
    }
    else
    {
        hide_div.style.display = 'block';
        validate.style.display = 'none';
        if(first.length === second.length)
        {
            document.getElementById('string-res').innerHTML = true;
        }
    
        else
        {
            document.getElementById('string-res').innerHTML = false;
        }
    }
};