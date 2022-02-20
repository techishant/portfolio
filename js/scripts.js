var Nav_Img = document.querySelector(".navImg img"),
About_Img = document.querySelector(".aboutImg");

var data_git = fetch('https://api.github.com/users/techishant', {
    method:'get',
    redirect:'follow'
})
.then((response) => response.json())
.then(
    (response) => {
        if (response.avatar_url != undefined){
            Nav_Img.src = response.avatar_url;
            About_Img.src = response.avatar_url;
        }
        if (response.bio != undefined){
            document.getElementById('AboutCont').innerText = response.bio;
        }
        if (response.repos_url != undefined){
            var repo = fetch(response.repos_url,{
                method:'get',
                redirect:'follow'
            })
            .then((response) => response.json())
            .then(
                (response) => {
                    console.log(response)
                }
            )
        }
    }
)