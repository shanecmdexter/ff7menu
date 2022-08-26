import { get, writable } from 'svelte/store'
import itemData from '@/data/items'
import magicData from '@/data/magic'
import characterData from '@/data/characters'

export const lastAction = writable({
	type: 'N/A',
	value: 'None'
})

export const inventory = writable({
	items: [...itemData],
	magic: [...magicData]
	// materia
	// equipment
})

export const partyCharacters = writable({
	characters: [...characterData]
})
