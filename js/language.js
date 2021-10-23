// https://api.github.com/users/techishant/repos
var langs = {};
var total = 0;
var requestOption = {
    method:'get',
    redirect:'follow'
}
var fetchDataVar = fetch('https://api.github.com/users/techishant/repos', requestOption)
.then(
    (response) => response.json()
)
.then(
    (response) => {
        console.log(response)
        for (repo in response){
            if (response[repo].language == null){
                continue
            }
            // Fetching languages
            languageFetch = fetch(response[repo].languages_url, requestOption)
            .then(response => response.json())
            .then(response => {
                for(lang in response){
                    if (langs[lang] == undefined){
                        langs[lang] = response[lang]
                    }else{
                        langs[lang] += response[lang]
                    }
                }
            }
            );
            // Close Fetch Lang
        }
        // for close
        console.log(langs)
        for(lang in langs){
            total = total + langs[lang]
            console.log(total)
        }
    }
)

