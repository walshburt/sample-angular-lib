import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() { }
  public doGood(url: string): string {
	return "GOOD URL: " + url;
  }
}
