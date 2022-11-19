import fetch from 'node-fetch'
import axios from 'axios'

async function buscaDadosApiFetch() {
	const response = await fetch('https://api.adviceslip.com/advice')
	const dados = await response.json()
	console.log(dados)
}

async function buscaDadosComAxios() {
	const id = 666 
	const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
	console.log(response.data)
}

buscaDadosApiFetch()
buscaDadosComAxios()