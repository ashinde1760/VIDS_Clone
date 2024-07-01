import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/app/service/event.service';
import { environment } from 'src/environments/environment';

export interface Firedetection {
  vehiclecount: string;
  vehicletype: string;
  date: string;
  time: string;
  cameratype: string;
  location: string;
}
export interface formateData {
  formates: string;
}
export interface cameraNames {
  cameraTypes: string;
}
@Component({
  selector: 'app-fire-detection',
  templateUrl: './fire-detection.component.html',
  styleUrls: ['./fire-detection.component.css'],
})
export class FireDetectionComponent {
  FireDetection: any;
  FiredetectionArray: Firedetection[] = [];
  fireVideo: boolean = false;
  firePhoto: boolean = false;
  fireId: any;
  firevideoId: any;
  downloadReport: boolean = false;
  firezoomPhoto: boolean = false;
  downloadForm!: FormGroup;
  endDate: string = this.formatDate(new Date());
  startDate: string = this.formatDate(new Date());
  eventValue: any;
  formate!: formateData[];
  fireVideoUrl: any;
  fireImageUrl: any;
  cameraType!: cameraNames[];
  totalItems: number = 0;
  first: any = 1;
  currentPage: any = 1;
  itemsPerPage: any = 10;
  today: any;
  constructor(private eventservice: EventService) {
    this.formate = [
      { formates: 'Pdf' },
      { formates: 'Csv' },
      { formates: 'Excel' },
    ];

    this.cameraType = [
      { cameraTypes: 'All camera' },
      { cameraTypes: '73-Honeywell' },
      { cameraTypes: '76-Honeywell' },
      { cameraTypes: '77-Honeywell' },
      { cameraTypes: '139-Hikvision' },
      { cameraTypes: '157-Hikvision' },
      { cameraTypes: '158-Hikvision' },
    ];
  }

  ngOnInit() {
    this.loadLatestEvents();
    this.downloadForm = new FormGroup({
      event: new FormControl('Fire_Detection', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl('', [Validators.required]),
      formate: new FormControl('', [Validators.required]),
      cameratype: new FormControl('', [Validators.required]),
    });

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    this.today = `${year}-${month}-${day}`;
  }

  loadLatestEvents(): void {
    const event = 'Fire_Detection';
    this.eventservice
      .getLatestEventByEvent(event, this.currentPage, this.itemsPerPage)
      .subscribe((FiredetectionData: any) => {
        console.log(FiredetectionData, 'FiredetectionData');
        this.FiredetectionArray = FiredetectionData.latestEvents;
        this.totalItems = FiredetectionData.totalItems;
        this.FireDetection = FiredetectionData;
      });
  }
  onPageChange(event: any): void {
    console.log('onPageChange triggered:', event);
    this.currentPage = event.page + 1; // PrimeNG Paginator uses 0-based indexing
    this.loadLatestEvents();
  }

  onClickCanclevideo() {
    this.fireVideo = false;
    window.location.reload();
    this.fireVideoUrl = '';
    this.ngOnInit();
  }

  onClickfireVideo(id: any) {
    this.fireVideo = true;

    // console.log(this.Wrongside[i]._id,'ujfgjkghuj');
    this.firevideoId = id;
    this.fireVideoUrl = `${environment.url}/playVideo/${id}`;
    this.eventservice.playVideoApi(id).subscribe(
      (data: any) => {
        console.log(data, 'wrong side id wise data');
      },
      (error: HttpErrorResponse) => {
        console.error('Error:', error);
        const url = error.url;
        // console.log('URL:', url);
        this.fireVideoUrl = url;
        console.log(this.fireVideoUrl, 'url');
      }
    );
  }

  zoomInImage() {
    this.firezoomPhoto = true;
    this.firePhoto = false;
  }

  onClickCancelPhoto() {
    this.firePhoto = false;
    window.location.reload();
    this.fireImageUrl = '';
    this.ngOnInit();
  }
  onClickfirePhoto(id: any) {
    this.firePhoto = true;

    // console.log(this.Wrongside[i]._id,'ujfgjkghuj');
    this.fireId = id;
    this.fireImageUrl = `${environment.url}/getLatestImage/${id}`;
    this.eventservice.displayImage(id).subscribe(
      (data: any) => {
        console.log(data, 'wrong side id wise data');
      },
      (error: HttpErrorResponse) => {
        console.error('Error:', error);
        const url = error.url;
        // console.log('URL:', url);
        this.fireImageUrl = url;
        console.log(this.fireImageUrl, 'url');
      }
    );
  }

  onDateChange(event: any) {
    const selectedDate: Date = event.target.valueAsDate;

    if (selectedDate) {
      this.endDate = this.formatDate(selectedDate);
    }
  }
  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  onDateChange1(event: any) {
    const selectedDate: Date = event.target.valueAsDate;

    if (selectedDate) {
      this.startDate = this.formatDate(selectedDate);
    }
  }
  formatDate1(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  onclickDownloadReport() {
    this.downloadReport = true;
  }
  onDropdownChange(event: any) {
    this.eventValue = event.value;
    console.log(this.eventValue, 'event value');
  }
  onClickDownloadReport() {
    // if (this.downloadForm.valid) {
    //   // console.log(this.downloadForm.value, 'download payload');

    // }
    if (this.eventValue == 'Excel') {
      this.downLoad1();
    } else if (this.eventValue == 'Pdf') {
      this.downLoad2();
    } else if (this.eventValue == 'Csv') {
      this.downLoad3();
    }
    this.downloadReport = false;
    this.downloadForm.reset();
  }
  onClickCancel() {
    this.downloadReport = false;
    // this.downloadForm.reset()();
    this.ngOnInit();
  }

  // excel format
  downLoad1() {
    this.downloadForm.value.startDate=this.startDate;
    this.downloadForm.value.endDate=this.endDate
    console.log('excel file ');
    this.eventservice
      .downloadPdfFormate(this.downloadForm.value)
      .subscribe((x: any) => {
        var newBlob = new Blob([x], { type: 'application/vnd.ms-excel' });
        const data = window.URL.createObjectURL(newBlob);
        var link = document.createElement('a');
        link.href = data;
        link.download = 'Vids Report.xlsx';
        link.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );
        console.log('file Downloded');
        // console.log(data,'download file');
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error);
      });
  }
  //pdf formate
  downLoad2() {
    this.downloadForm.value.startDate=this.startDate;
    this.downloadForm.value.endDate=this.endDate
    console.log('pdf file ');

    this.eventservice
      .downloadPdfFormate1(this.downloadForm.value)
      .subscribe((x: any) => {
        var newBlob = new Blob([x], { type: 'application/pdf' });
        const data = window.URL.createObjectURL(newBlob);
        var link = document.createElement('a');
        link.href = data;
        link.download = 'vds Data.pdf';
        link.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );
        console.log('file Downloded');
        this.ngOnInit();
        // console.log(data,'download file');
      },
      (error: HttpErrorResponse) => {
        alert(error);
      });
  }
  downLoad3() {
    this.downloadForm.value.startDate=this.startDate;
    this.downloadForm.value.endDate=this.endDate
    console.log('csv file ');
    // csv formate
    this.eventservice
      .downloadPdfFormate2(this.downloadForm.value)
      .subscribe((x: any) => {
        var newBlob = new Blob([x], { type: 'text/csv' });
        const data = window.URL.createObjectURL(newBlob);
        var link = document.createElement('a');
        link.href = data;
        link.download = 'vds Data.csv';
        link.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );
        console.log('file Downloded');
        this.ngOnInit();
        // console.log(data,'download file');
      },
      (error: HttpErrorResponse) => {
        alert(error);
      });
  }
}
