export function criarTrComImg(valor, text, url1, url2) {
    const tr = document.createElement('tr')
    const td2 = document.createElement('td')
    const td1 = document.createElement('td')
    td1.textContent = text
    const imgGener = document.createElement('img')
    imgGener.classList.add('imgGenero')
    td2.appendChild(imgGener)
    tr.append(td1, td2)
    if(valor === 'male') {
        imgGener.src = url1
    } else {
        imgGener.src = url2
    }
    return tr
}