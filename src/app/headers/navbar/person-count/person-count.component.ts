import { Component } from '@angular/core';

@Component({
  selector: 'app-person-count',
  templateUrl: './person-count.component.html',
  styleUrls: ['./person-count.component.css']
})
export class PersonCountComponent {
sampleData:any;

constructor(){
this.sampleData=
  [
    {
      "id": "1",
      "vehicalType": "car",
      "numberPlate": "ABC123",
      "inDate": "2022-01-01",
      "inTime": "09:00:00",
      "outDate": "2022-01-01",
      "outTime": "18:00:00",
      "image": "http://example.com/car1.jpg"
    },
    {
      "id": "2",
      "vehicalType": "truck",
      "numberPlate": "DEF456",
      "inDate": "2022-01-01",
      "inTime": "10:00:00",
      "outDate": "2022-01-01",
      "outTime": "17:00:00",
      "image": "http://example.com/truck1.jpg"
    },
    {
      "id": "3",
      "vehicalType": "bus",
      "numberPlate": "GHI789",
      "inDate": "2022-01-01",
      "inTime": "11:00:00",
      "outDate": "2022-01-01",
      "outTime": "16:00:00",
      "image": "http://example.com/bus1.jpg"
    },
    {
      "id": "4",
      "vehicalType": "car",
      "numberPlate": "JKL012",
      "inDate": "2022-01-01",
      "inTime": "12:00:00",
      "outDate": "2022-01-01",
      "outTime": "15:00:00",
      "image": "http://example.com/car2.jpg"
    },
    {
      "id": "5",
      "vehicalType": "truck",
      "numberPlate": "MNO345",
      "inDate": "2022-01-01",
      "inTime": "13:00:00",
      "outDate": "2022-01-01",
      "outTime": "14:00:00",
      "image": "http://example.com/truck2.jpg"
    },
    {
      "id": "6",
      "vehicalType": "bus",
      "numberPlate": "PQR678",
      "inDate": "2022-01-01",
      "inTime": "14:00:00",
      "outDate": "2022-01-01",
      "outTime": "13:00:00",
      "image": "http://example.com/bus2.jpg"
    },
    {
      "id": "7",
      "vehicalType": "car",
      "numberPlate": "STU901",
      "inDate": "2022-01-01",
      "inTime": "15:00:00",
      "outDate": "2022-01-01",
      "outTime": "12:00:00",
      "image": "http://example.com/car3.jpg"
    },
    {
      "id": "8",
      "vehicalType": "truck",
      "numberPlate": "VWX234",
      "inDate": "2022-01-01",
      "inTime": "16:00:00",
      "outDate": "2022-01-01",
      "outTime": "11:00:00",
      "image": "http://example.com/truck3.jpg"
    },
    {
      "id": "9",
      "vehicalType": "bus",
      "numberPlate": "YZA567",
      "inDate": "2022-01-01",
      "inTime": "17:00:00",
      "outDate": "2022-01-01",
      "outTime": "10:00:00",
      "image": "http://example.com/bus3.jpg"
    },
    {
      "id": "10",
      "vehicalType": "car",
      "numberPlate": "BCD890",
      "inDate": "2022-01-01",
      "inTime": "18:00:00",
      "outDate": "2022-01-01",
      "outTime": "09:00:00",
      "image": "http://example.com/car4.jpg"
    }
  ]

}


}
