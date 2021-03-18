
function startSplashScreen()
{
    var date = new Date();
    var mon = date.getMonth()+1;

    document.getElementById('spsc').classList.add('done');
    document.getElementById('date').innerHTML = date.getUTCDay()+'.' + mon+'.' + date.getUTCFullYear();
    document.getElementById('nameuser').innerHTML = (localStorage.getItem('name'));
};
function closeSplashScreen()
{
    document.getElementById('spsc').classList.remove('done');
}