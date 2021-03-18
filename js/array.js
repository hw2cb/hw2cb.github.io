function createArray()
{
    let arr = new Array();
    arr[0]=document.getElementById('first-element').value;
    arr[1]=document.getElementById('second-element').value;
    arr[2]=document.getElementById('third-element').value;
    arr[3]=document.getElementById('fourth-element').value;
    arr[4]=document.getElementById('fifth-element').value;
    return arr;
}
function checked(arr)
{
    var mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for(i=0;i<arr.length; i++)
    {
        if(!arr[i].match(/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/))//если не число
        {
            console.log("Не число");
            return false; 
        }
    }
    return true;
};
function minElementArray()
{
    var validate = document.getElementById('validate-array');
    let arr= createArray();
    if(checked(arr))
    {
        buff = parseInt(arr[0]);
        for(i=0;i<arr.length; i++)
        {
            if(parseInt(arr[i])<buff)
            {
                buff = arr[i];
            }
        }
        document.getElementById('min-res').innerHTML = 'Минимальное значение массива: '+ buff;
        let hide_div = document.getElementById('hide-div-array');
        hide_div.style.display = 'block';
        validate.style.display = 'none';

    }
    else
    {
        validate.style.display = 'block';
    }
   
};
function maxElementArray()
{
    let arr= createArray();
    if(checked(arr))
    {
        buff = parseInt(arr[0]);
        for(i=0;i<arr.length; i++)
        {
            if(parseInt(arr[i])>buff)
            {
                buff = arr[i];
            }
        }
        document.getElementById('max-res').innerHTML = 'Максимальное значение массива: '+ buff;
    }

};