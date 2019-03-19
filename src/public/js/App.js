dataManager(data)
{
    buildDOM(data.msg);
};

buildDOM = (el) =>
{
    document.getElementById('main').innerHTML = el;
}; 
