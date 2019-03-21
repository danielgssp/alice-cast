class App 
{
    constructor()
    {
        // let start;
        // const url = 'http://172.16.0.169:4212/connection/open';

        // fetch(url).then(r =>r.json()).then(j => 
        // {
        //     console.log(j);
        //     this.buildDOM(j.page);
        //     start = new Function(`return ${j.func}`)();
        // }).catch(e => console.log(e));    
        
        // start();
    };

    buildDOM(el)
    {
        document.getElementById("main").innerHTML = el;
    };

    managerData(data)
    {
        console.log(data);
    };
};