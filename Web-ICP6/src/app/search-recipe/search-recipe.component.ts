import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });
  }
  recipeAPIQuery(search) {
    var request = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=7d5182c5&app_key=a0fa0e82fa892fcae09dd4af3f6a2993`;
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    fetch(request, options)
      .then(response => response.json())
      .then(response => {
        console.log(response.hits);
        this.recipeList.push.apply(this.recipeList, response.hits);
      })
      .catch(err => console.error(err));
  }

  getVenues() {

    if (this.recipeValue !== null) {
      this.recipeAPIQuery(this.recipeValue);
    }
    if(this.placeValue!== null){
      this.foursquareApiQuery(this.recipeValue,this.placeValue)
    }
  }

  foursquareApiQuery(search, location) {
    console.log(search);
    console.log(location);
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'fsq3Iab1bKqujnaKRwoZFWAqE9Xd8iR6fja/cuouM/06Kp4='
      }
    };

    fetch(`https://api.foursquare.com/v3/places/search?query=${this.recipeValue}&near=${this.placeValue}`, options)
      .then(response => response.json())
      .then(response => {

        this.venueList = response.results
        console.log(this.venueList[0]);
        console.log(this.venueList);

        //this.venueList.push.apply(this.venueList, response.results);
      })
      .catch(err => console.error(err));
  }





}
