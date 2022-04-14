document.querySelector('.boredButton').addEventListener('click', getFetch)

function getFetch(){
    const url = 'https://www.boredapi.com/api/activity'

    fetch(url)
        .then (res => res.json())
        .then (data => {
            console.log(data);
            document.querySelector('.activity').innerText = data.activity
            document.querySelector('.link').innerHTML = data.link.link(data.link)
        })
        .catch (err => {
            console.log(`error ${err}`)
        })
}

