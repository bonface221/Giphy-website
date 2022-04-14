import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  
  gifs: any[] = [];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGIFS().subscribe((response: any) => {
      this.gifs = response.data;
      // console.log('Data',response)
    });
  }

}
