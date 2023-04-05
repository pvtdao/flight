import { addDays } from 'date-fns'

const flightData = [
	{
		name: 'Vietname Airline',
		code: 'VNA',
		baggage: '20',
		inFlightMeal: true,
		inFlightEntertaiment: true,
		seatLayout: '4-4',
		seatPitch: '35h inches (standard)',
		logo: 'https://i.pinimg.com/originals/7a/ec/17/7aec17946661a88378269d0b642b61f3.png',
		flight: [
			{
				transit: 'Straight',
				date: addDays(new Date(), 1),
				start: '10:00',
				end: '11:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '1.500.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 1),
				start: '10:00',
				end: '11:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Premium',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '1.900.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 1),
				start: '10:00',
				end: '11:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Business',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '2.100.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 0),
				start: '10:30',
				end: '11:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 00m',
				price: {
					originalPrice: '1.750.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 0),
				start: '10:30',
				end: '11:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Premium',
				timeTravel: '1h 00m',
				price: {
					originalPrice: '1.450.000 vnd',
					special: '1.400.000 vnd'
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 0),
				start: '10:30',
				end: '11:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Business',
				timeTravel: '1h 00m',
				price: {
					originalPrice: '1.550.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 2),
				start: '14:15',
				end: '16:15',
				from: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '2h 00m',
				price: {
					originalPrice: '1.500.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 2),
				start: '14:15',
				end: '16:15',
				from: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Premium',
				timeTravel: '2h 00m',
				price: {
					originalPrice: '1.600.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 2),
				start: '14:15',
				end: '16:15',
				from: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Business',
				timeTravel: '2h 00m',
				price: {
					originalPrice: '1.700.000 vnd',
					special: false
				}
			},
			{
				transit: 'Transit',
				date: addDays(new Date(), 1),
				start: '15:45',
				end: '18:15',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				type: 'multi',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '2.000.000 vnd',
					special: '1.999.999 vnd'
				}
			},
			{
				transit: 'Transit',
				date: addDays(new Date(), 1),
				start: '15:45',
				end: '18:15',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				type: 'multi',
				seatClass: 'Preium',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '3.000.000 vnd',
					special: '2.550.000 vnd'
				}
			},
			{
				transit: 'Transit',
				date: addDays(new Date(), 1),
				start: '15:45',
				end: '18:15',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				type: 'multi',
				seatClass: 'Business',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '4.000.000 vnd',
					special: '3.500.000 vnd'
				}
			},
			{
				transit: '2+ Transit',
				date: addDays(new Date(), 0),
				start: '10:00',
				end: '12:30',
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'BKK',
					place: 'Bangkok',
					location: 'Thailand'
				},
				price: {
					originalPrice: '2.100.000 vnd',
					special: '2.000.000 vnd'
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 0),
				start: '10:30',
				end: '12:00',
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 30m',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				price: {
					originalPrice: '1.500.000 vnd',
					special: '1.300.000 vnd'
				}
			},
			{
				transit: '2+ Transit',
				date: addDays(new Date(), 0),
				start: '14:00',
				end: '16:30',
				type: 'multi',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				from: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				to: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},

				price: {
					originalPrice: '2.500.000 vnd',
					special: false
				}
			},
			{
				transit: '2+ Transit',
				date: addDays(new Date(), 0),
				start: '14:00',
				end: '16:30',
				type: 'multi',
				seatClass: 'Premium',
				timeTravel: '2h 30m',
				from: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				to: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},

				price: {
					originalPrice: '2.900.000 vnd',
					special: false
				}
			},
			{
				transit: 'Transit',
				date: addDays(new Date(), 1),
				start: '15:45',
				end: '18:15',
				type: 'multi',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				to: {
					shorten: 'BKK',
					place: 'Bangkok',
					location: 'Thailand'
				},
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},

				price: {
					originalPrice: '1.500.000 vnd',
					special: '1.300.000 vnd'
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 2),
				start: '20:15',
				end: '21:45',
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 30m',
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				from: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},

				price: {
					originalPrice: '1.500.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 1),
				start: '22:45',
				end: '23:45',
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 00m',
				to: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				from: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},

				price: {
					originalPrice: '1.500.000 vnd',
					special: false
				}
			},
			{
				transit: '2+ Transit',
				date: addDays(new Date(), 0),
				start: '10:00',
				end: '12:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'BKK',
					place: 'Bangkok',
					location: 'Thailand'
				},
				type: 'multi',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '2.250.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 0),
				start: '17:00',
				end: '19:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				type: 'multi',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '2.250.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 1),
				start: '6:00',
				end: '7:30',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '1.250.000 vnd',
					special: '1.100.000 vnd'
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 2),
				start: '15:00',
				end: '16:30',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Premium',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '2.350.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 3),
				start: '15:00',
				end: '16:30',
				from: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '1.350.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 0),
				start: '15:00',
				end: '16:30',
				from: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 00m',
				price: {
					originalPrice: '950.000 vnd',
					special: false
				}
			},
			{
				transit: 'Transit',
				date: addDays(new Date(), 1),
				start: '10:30',
				end: '13:00',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				type: 'multi',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '1.050.000 vnd',
					special: false
				}
			},
			{
				transit: '2+ Transit',
				date: addDays(new Date(), 2),
				start: '11:15',
				end: '13:45',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'BKK',
					place: 'Bangkok',
					location: 'Thailand'
				},
				type: 'multi',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '1.250.000 vnd',
					special: '1.050.000 vnd'
				}
			},
			{
				transit: '2+ Transit',
				date: addDays(new Date(), 2),
				start: '11:15',
				end: '13:45',
				from: {
					shorten: 'BKK',
					place: 'Bangkok',
					location: 'Thailand'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'multi',
				seatClass: 'Business',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '3.250.000 vnd',
					special: '3.050.000 vnd'
				}
			},
			{
				transit: 'Transit',
				date: addDays(new Date(), 0),
				start: '14:15',
				end: '16:45',
				from: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'multi',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '1.350.000 vnd',
					special: false
				}
			}
		]
	},
	{
		name: 'BamBoo Airline',
		code: 'BBA',
		baggage: '15',
		inFlightMeal: true,
		inFlightEntertaiment: false,
		seatLayout: '3-3',
		seatPitch: '29 inches (standard)',
		logo: 'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Bamboo-Airways-V.png',
		flight: [
			{
				transit: '2+ Transit',
				date: addDays(new Date(), 0),
				start: '10:00',
				end: '12:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'BKK',
					place: 'Bangkok',
					location: 'Thailand'
				},
				type: 'multi',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '2.050.000 vnd',
					special: false
				}
			},
			{
				transit: '2+ Transit',
				date: addDays(new Date(), 0),
				start: '10:00',
				end: '12:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'BKK',
					place: 'Bangkok',
					location: 'Thailand'
				},
				type: 'multi',
				seatClass: 'Premium',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '2.550.000 vnd',
					special: false
				}
			},
			{
				transit: 'Transit',
				date: addDays(new Date(), 0),
				start: '17:00',
				end: '19:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				type: 'multi',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '2.050.000 vnd',
					special: false
				}
			},
			{
				transit: 'Transit',
				date: addDays(new Date(), 0),
				start: '17:00',
				end: '19:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				type: 'multi',
				seatClass: 'Business',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '2.950.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 1),
				start: '6:00',
				end: '7:30',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Premium',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '1.250.000 vnd',
					special: '1.100.000 vnd'
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 2),
				start: '15:00',
				end: '16:30',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Premium',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '1.550.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 2),
				start: '15:00',
				end: '16:30',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '1.150.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 3),
				start: '15:00',
				end: '16:30',
				from: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '1.350.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 0),
				start: '15:00',
				end: '16:30',
				from: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 00m',
				price: {
					originalPrice: '950.000 vnd',
					special: false
				}
			},
			{
				transit: 'Transit',
				date: addDays(new Date(), 1),
				start: '10:30',
				end: '13:00',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '950.000 vnd',
					special: false
				}
			},
			{
				transit: '2+ Transit',
				date: addDays(new Date(), 2),
				start: '11:15',
				end: '13:45',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'BKK',
					place: 'Bangkok',
					location: 'Thailand'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '1.250.000 vnd',
					special: '1.050.000 vnd'
				}
			},
			{
				transit: '2+ Transit',
				date: addDays(new Date(), 2),
				start: '11:15',
				end: '13:45',
				from: {
					shorten: 'BKK',
					place: 'Bangkok',
					location: 'Thailand'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '1.250.000 vnd',
					special: '1.050.000 vnd'
				}
			},
			{
				transit: 'Transit',
				date: addDays(new Date(), 0),
				start: '14:15',
				end: '16:45',
				from: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '1.350.000 vnd',
					special: false
				}
			}
		]
	},
	{
		name: 'Vietjet',
		code: 'VJA',
		baggage: '15',
		inFlightMeal: true,
		inFlightEntertaiment: false,
		seatLayout: '3-3',
		seatPitch: '29 inches (standard)',
		logo: 'https://1000logos.net/wp-content/uploads/2021/04/VietJet-Air-logo.png',
		flight: [
			{
				transit: '2+ Transit',
				date: addDays(new Date(), 0),
				start: '10:00',
				end: '12:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'BKK',
					place: 'Bangkok',
					location: 'Thailand'
				},
				type: 'multi',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '2.250.000 vnd',
					special: false
				}
			},
			{
				transit: '2+ Transit',
				date: addDays(new Date(), 0),
				start: '10:00',
				end: '12:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'BKK',
					place: 'Bangkok',
					location: 'Thailand'
				},
				type: 'multi',
				seatClass: 'Premium',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '2.850.000 vnd',
					special: false
				}
			},
			{
				transit: 'Transit',
				date: addDays(new Date(), 0),
				start: '17:00',
				end: '19:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				type: 'multi',
				seatClass: 'Business',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '3.250.000 vnd',
					special: false
				}
			},
			{
				transit: 'Transit',
				date: addDays(new Date(), 0),
				start: '17:00',
				end: '19:30',
				from: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				type: 'multi',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '1.950.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 2),
				start: '6:00',
				end: '7:30',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '1.150.000 vnd',
					special: '1.000.000 vnd'
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 2),
				start: '6:00',
				end: '7:30',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Premium',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '1.550.000 vnd',
					special: '1.300.000 vnd'
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 2),
				start: '6:00',
				end: '7:30',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Business',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '1.950.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 1),
				start: '15:00',
				end: '16:30',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '1.200.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 1),
				start: '15:00',
				end: '16:30',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Premium',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '2.000.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 1),
				start: '15:00',
				end: '16:30',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Business',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '3.000.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 2),
				start: '15:00',
				end: '16:30',
				from: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 30m',
				price: {
					originalPrice: '1.350.000 vnd',
					special: false
				}
			},
			{
				transit: 'Straight',
				date: addDays(new Date(), 1),
				start: '15:00',
				end: '16:30',
				from: {
					shorten: 'HAN',
					place: 'Hanoi',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'DAD',
					place: 'Da Nang',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '1h 00m',
				price: {
					originalPrice: '950.000 vnd',
					special: false
				}
			},
			{
				transit: 'Transit',
				date: addDays(new Date(), 0),
				start: '10:30',
				end: '13:00',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '950.000 vnd',
					special: false
				}
			},
			{
				transit: '2+ Transit',
				date: addDays(new Date(), 0),
				start: '11:15',
				end: '13:45',
				from: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				to: {
					shorten: 'BKK',
					place: 'Bangkok',
					location: 'Thailand'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '1.250.000 vnd',
					special: '1.050.000 vnd'
				}
			},
			{
				transit: '2+ Transit',
				date: addDays(new Date(), 1),
				start: '11:15',
				end: '13:45',
				from: {
					shorten: 'BKK',
					place: 'Bangkok',
					location: 'Thailand'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '1.250.000 vnd',
					special: '1.050.000 vnd'
				}
			},
			{
				transit: 'Transit',
				date: addDays(new Date(), 2),
				start: '14:15',
				end: '16:45',
				from: {
					shorten: 'SIN',
					place: 'Singapore',
					location: 'Singapore'
				},
				to: {
					shorten: 'SGN',
					place: 'Ho Chi Minh',
					location: 'Viet Nam'
				},
				type: 'oneway',
				seatClass: 'Economy',
				timeTravel: '2h 30m',
				price: {
					originalPrice: '1.350.000 vnd',
					special: false
				}
			}
		]
	}
]

export default flightData
