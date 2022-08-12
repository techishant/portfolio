// alert("This website is still under development. More at GitHub: https://github.com/techishant/portfolio")

console.log(parseInt((Math.random()*30)+20))

// Can also be included with a regular script tag
var options = {
    strings: ['A tech enthusiast', 'Loves exploring CS', 'A web developer', 'Likes problem solving', "Always active"],
    typeSpeed: 40,
    smartBackspace: true
    };
var typed = new Typed('.typed', options);

const tilt = $('.AboutlogoTilt').tilt();
tilt.on('change');  // parameters: event, transforms
tilt.on('tilt.mouseLeave'); // parameters: event
tilt.on('tilt.mouseEnter'); // parameters: event

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