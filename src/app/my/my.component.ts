import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  getRequest () {
  	return this.http.get('http://jsonplaceholder.typicode.com/posts')
  		.map(res => res.json())
  		.subscribe(posts => console.log(posts));
  }

  postRequest () {
  	return this.http.post('http://jsonplaceholder.typicode.com/posts', {foo: 'bar'})
  		.map(res => res.json())
  		.subscribe(post => console.log(post));
  }

  putRequest () {
  	return this.http.put('http://jsonplaceholder.typicode.com/posts/1', {foo: 'bar'})
  		.map(res => res.json())
  		.subscribe(post => console.log(post));
  }

  deleteRequest () {
  	return this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
  		.map(res => res.json())
  		.subscribe(post => console.log(post));
  }

  errorRequest () {
    return this.http.put('http://jsonplaceholder.typicode.com/posts/', {foo: 'bar'})
      .map(res => res.json())
      .subscribe(post => console.log(post));
  }  
}
