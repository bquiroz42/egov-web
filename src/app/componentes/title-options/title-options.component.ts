import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-options',
  templateUrl: './title-options.component.html',
  styleUrls: ['./title-options.component.css']
})

export class TitleOptionsComponent implements OnInit {

  @Input('titulo') titulo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
