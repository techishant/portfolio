// https://api.github.com/users/techishant/repos
var data;
var langs = {};
var total = 0;

function pFunc(one){
    console.log(one)
}

async function GetGitData(){
    var requestOption = {
        method : "get",
        redirect: 'follow'
    };
    await fetch('https://api.github.com/users/techishant/repos', requestOption)
        .then(response => response.json())
        .then(response => (data = response))
        .then(response => {
                data.forEach(repo => 
                    {
                    async function getLangs()
                    {
                        await fetch(repo.languages_url, requestOption)
                        .then(response => response.json())
                        .then(
                                response => 
                                {
                                    for (lan in response){
                                        if (langs[lan] != undefined ){
                                            langs[lan] = langs[lan] + response[lan]
                                        }else{
                                            langs[lan] = response[lan]
                                        }
                                    }
                                }
                            )
                        .catch(error => console.log(error));
                        console.log(repo.name)
                        console.log(langs);
                        total = 0;
                        for (lang in langs){
                            total = total + langs[lang]
                        }
                        console.log('afterFor')
                        console.log('total', total)
                    }
                    if (repo.language != null){
                        getLangs();
                    }
                })
                console.log('after foreach', langs)}
        )
        .then(() => {
            console.log('HHHH', total)
        })
        .catch(error => console.log(error));      
        console.log(data)
}
GetGitData();
console.log(langs)