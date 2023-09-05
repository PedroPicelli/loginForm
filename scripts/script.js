const nameLogin = window.document.getElementById('nameLogin')
const labelNameLogin = window.document.getElementById('labelNameLogin')
const passwordLogin = window.document.getElementById('passwordLogin')
const labelPasswordLogin = window.document.getElementById('labelPasswordLogin')
let tamanhosAnterioresInputs = []
let heightScreen = 0
let widthScreen = 0

function mudaPosLabel(chamante) {
    let chamanteStr = chamante
    for(let index = 0; index <= tamanhosAnterioresInputs.length; index++) {
        if(tamanhosAnterioresInputs[index] === chamante) {
            break
        }
        if(tamanhosAnterioresInputs.length === index) {
            tamanhosAnterioresInputs.push(chamante)
            tamanhosAnterioresInputs.push(0)
            break
        }
    }
    let label = 'label' + chamante[0].toUpperCase()
    for(let index = 1; index < chamante.length; index++) {
        label = label + chamante[index]
    }
    chamante = window.document.getElementById(chamante)
    label = window.document.getElementById(label)
    if(chamante.value.length >= 1 && tamanhosAnterioresInputs[tamanhosAnterioresInputs.indexOf(chamanteStr) + 1] == 0) {
        label.style.animation = 'inputs-acionados .15s'
        label.style.bottom = 'calc(5 / 100 * 60vh + 1rem + 10px)'
        label.style.left = '0'
    } else if(chamante.value.length == 0) {
        label.style.animation = 'inputs-desacionados .15s'
        label.style.bottom = 'calc(5 / 100 * 60vh - 1rem / 2)'
        label.style.left = '15px'
    }
    for(let index = 0; index <= tamanhosAnterioresInputs.length; index++) {
        if(tamanhosAnterioresInputs[index - 1] === chamanteStr) {
            tamanhosAnterioresInputs[index] = chamante.value.length
            break
        }
    }
    setTimeout(_ => {
        label.style.animation = ''
    }, 150)
}

function mudarPag(divId, divIdOutro) {
    let div1 = window.document.getElementById(divId)
    let div2 = window.document.getElementById(divIdOutro)
    if(widthScreen <= 550) {
        div1.style.transition = ''
        div2.style.transition = ''
        div1.style.transform = 'rotateY(0deg)'
        div2.style.transform = 'rotateY(0deg)'
    }
    if(widthScreen > 550) {
        div1.style.transform = 'rotateY(-90deg)'
        setTimeout(_ => {
            div1.style.display = 'none'
            div2.style.display = 'flex'
            setTimeout(_ => { 
                if(widthScreen > 550)
                    div2.style.transform = 'rotateY(0deg)'
            }, 1)
        }, 1000)
    } else {
        div1.style.display = 'none'
        div2.style.display = 'flex'
    }
}

function senhaView(cadeado1, cadeado2, input, abrir=false) {
    cadeado1 = window.document.getElementById(cadeado1)
    cadeado2 = window.document.getElementById(cadeado2)
    input = window.document.getElementById(input)
    cadeado2.style.display = 'inherit'
    cadeado1.style.display = 'none'
    if(abrir) {
        input.setAttribute('type', 'text')
    } else {
        input.setAttribute('type', 'password')
    }
}

function tamanhoMudou() {
    heightScreen = window.innerHeight
    widthScreen = window.innerWidth
}
