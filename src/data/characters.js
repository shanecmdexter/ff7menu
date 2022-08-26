import { cloud, tifa, squall, tidus } from '@/data/avatars.js'

export default [
	{
		name: 'Squall',
		avatar: squall,
		lv: 45,
		hp: {
			current: 90,
			max: 100
		},
		mp: {
			current: 44,
			max: 100
		},
		exp: {
			current: 33,
			required: 100
		},
		limit: {
			current: 13,
			required: 100,
			lv: 1
		}
	},
	{
		name: 'Cloud',
		avatar: cloud,
		lv: 50,
		hp: {
			current: 90,
			max: 100
		},
		mp: {
			current: 44,
			max: 100
		},
		exp: {
			current: 2,
			required: 100
		},
		limit: {
			current: 13,
			required: 100,
			lv: 1
		}
	},
	{
		name: 'Tifa',
		avatar: tifa,
		lv: 60,
		hp: {
			current: 50,
			max: 100
		},
		mp: {
			current: 44,
			max: 100
		},
		exp: {
			current: 33,
			required: 100
		},
		limit: {
			current: 13,
			required: 100,
			lv: 1
		}
	}
]
