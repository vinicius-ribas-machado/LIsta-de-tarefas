function AddLista(){
    let input = document.getElementById('INPtarefas').value
    let texto = document.getElementById('sua-lista')

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    let exib = document.createTextNode(input)

    let div = document.createElement('div')


    div.appendChild(checkbox)
    div.appendChild(exib)

    texto.appendChild(div)

    
    document.getElementById('INPtarefas').value = ''
    
}