// Classe responsável por implementar o metódo submitUserAction
// Esse metódo é responsável por pegar o localhost e salvar os arquivos no back-end.
// Os arquivos é enviado em forma de Json

export const submitUserAction = (data) => {
    let url = "http://localhost:8080/usuario"
    fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}