import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService{
	createDb(){
		let cats = [
		{
			id: 1,
			name: "FatNinja",
			color: "red",
			found_location: "Dakota",
			found_by: "Erik Liam",
			isHealthy: true
		},
		{
			id: 2,
			name: "Adam",
			color: "white",
			found_location: "Canberra",
			found_by: "Brian Smith",
			isHealthy: true
		},
		{
			id: 3,
			name: "Felicity",
			color: "Mixed",
			found_location: "Beijing",
			found_by: "Adrian Hammer",
			isHealthy: true
		},
		{
			id: 4,
			name: "Harry",
			color: "Brown",
			found_location: "Delhi",
			found_by: "Jason James",
			isHealthy: true
		},
		{
			id: 5,
			name: "Tom",
			color: "Grey",
			found_location: "Washington",
			found_by: "Andy Riktor",
			isHealthy: false
		},
		{
			id: 6,
			name: "Lambda",
			color: "Brown",
			found_location: "Shanghai",
			found_by: "Rudolph Sam",
			isHealthy: true
		},
		{
			id: 7,
			name: "Cindrella",
			color: "White",
			found_location: "New York",
			found_by: "Mary Saint",
			isHealthy: true
		},
		{
			id: 8,
			name: "Rudolph",
			color: "Black",
			found_location: "Oklahoma",
			found_by: "Hermes Smith",
			isHealthy: false
		},
		{
			id: 9,
			name: "Adelaide",
			color: "Mixed",
			found_location: "Alaska",
			found_by: "John James",
			isHealthy: true
		},
		{
			id: 10,
			name: "Pumpkin",
			color: "Black",
			found_location: "Seoul",
			found_by: "Mindy Dames",
			isHealthy: true
		},
		{
			id: 11,
			name: "Charlie",
			color: "White",
			found_location: "Sri Lanka",
			found_by: "Finn James",
			isHealthy: true
		},
		{
			id: 12,
			name: "Xavier",
			color: "White",
			found_location: "Sydney",
			found_by: "Baron Thompson",
			isHealthy: false
		}
		];
		return {cats};
	}
}
