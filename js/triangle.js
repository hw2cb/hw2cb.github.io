function square()
{
    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;
    if(!base.match(/^\d+$/) ||!height.match(/^\d+$/) ||height.length == 0 || base.length ==0)
    {
        var validate = document.getElementById('validate-triangle');
        validate.style.display = 'block';
        
    }
    else
    {
        let res = 0.5*base*height;
        let resultat = 'Площадь треугольника: ' + res;
        document.getElementById('triangle-res').innerHTML = resultat;
        let hide_div = document.getElementById('hide-div-triangle');
        hide_div.style.display = 'block';
    }

};