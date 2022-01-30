async function addDogPic() {
    // event.preventDefault();

    const dogBreed = document.querySelector('#dogBreed').innerHTML;

    var apiCall = "https://dog.ceo/api/breed/" + dogBreed +"/images/random"
    console.log(dogBreed, apiCall);
    
    await fetch(apiCall).then(function (response) {
        if(response.ok) {
            response.json().then(function(data) {
                showTheDog(data);
            });
        } else {
            alert('Unable to find a Dog Picutre');
        }
    })
    // .catch(alert('API not working'));
}

function showTheDog(data) {
    console.log(data);
    var newImg = document.createElement("img");
    newImg.setAttribute("src", data.message);
    newImg.setAttribute("alt", "owner's dog");

    document.querySelector("#img-target").append(newImg)
}

addDogPic()

// document.querySelector('#dogPic').addEventListener('click', addDogPic);