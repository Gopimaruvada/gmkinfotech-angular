import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BaseService } from "src/app/services/Base.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(public bs: BaseService, private _fb: FormBuilder) {}

  ngOnInit() {
    this.bs.bgclassnav = true;
    this.contactForm = this._fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      mobile: ["", [Validators.required]],
      service: ["", [Validators.required]],
      budget: ["", [Validators.required]],
      urgency: ["", [Validators.required]],
      requirement: ["", [Validators.required]],
      about: ["", [Validators.required]],
    });
  }

  onContactUs(){
    if(this.contactForm.valid){
      this.bs.sendEmail(this.contactForm.value);
    }
  }
}
