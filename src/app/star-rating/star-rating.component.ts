import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})

export class StarRatingComponent implements OnInit {
  auxRating!: number;
  @Input() rating!: number;
  @Output() ratingChanged = new EventEmitter<number>();

  restoreRating() {
    this.auxRating = this.rating;
  }

  constructor() { }

  ngOnInit(): void {
    this.restoreRating();
  }

  public setRating() {
    this.ratingChanged.emit(this.auxRating);
  }

}
