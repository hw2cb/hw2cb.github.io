
function startSplashScreen()
{
    var date = new Date();
    document.getElementById('spsc').classList.add('done');
    document.getElementById('date').innerHTML = date.getUTCDay()+'.' + date.getUTCMonth()+'.' + date.getUTCFullYear();
    document.getElementById('nameuser').innerHTML = (localStorage.getItem('name'));
};
function closeSplashScreen()
{
    document.getElementById('spsc').classList.remove('done');
}