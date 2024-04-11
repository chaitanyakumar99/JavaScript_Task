setInterval(() => {
    let date = new Date().toLocaleString()
    document.getElementById('dclock').innerHTML=date
}, 1000);