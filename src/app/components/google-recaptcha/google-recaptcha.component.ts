import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'google-recaptcha',
  templateUrl: './google-recaptcha.component.html',
  styleUrls: ['./google-recaptcha.component.css']
})
export class GoogleRecaptchaComponent implements OnInit {

  @Input() code: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    var script = document.createElement("script");

    script.setAttribute("src", "https://www.google.com/recaptcha/api.js");
    script.setAttribute("async", "true");
    script.setAttribute("defer", "true");

    document.getElementsByTagName("head").item(0).appendChild(script);

    document.getElementsByClassName("g-recaptcha")[0].setAttribute("data-sitekey", this.code);

  }

}
