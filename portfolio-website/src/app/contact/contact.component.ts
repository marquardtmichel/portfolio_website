import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm, AbstractControl } from '@angular/forms';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'port-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('statusName') statusName!: ElementRef;
  @ViewChild('statusEmail') statusEmail!: ElementRef;
  @ViewChild('statusMessage') statusMessage!: ElementRef;

  public FormData: FormGroup;

  constructor(
    private builder: FormBuilder,
    private contact: ContactService,
    ) {
      this.FormData = new FormGroup({
        Fullname: new FormControl(),
        Email: new FormControl(),
        Message: new FormControl(),
      })
  }

  get Fullname(): AbstractControl {
    return this.FormData.get('Fullname')!;
  }

  get Email(): AbstractControl {
    return this.FormData.get('Email')!;
  }

  get Message(): AbstractControl {
    return this.FormData.get('Message')!;
  }

  checkValidation() {
    let isDataValid = true;
    let statusMessageName = "";
    let statusMessageEmail = "";
    let statusMessageMessage = "";

    if (!this.Fullname.value) {
      statusMessageName += '<p class="error" style="margin:0"><strong>Name</strong> cannot be empty</p>';
      isDataValid = false;
    }

    if (!this.Email.value) {
      statusMessageEmail += '<p class="error" style="margin:0"><strong>Email</strong> cannot be empty</p>';
      isDataValid = false;
    } else {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(this.Email.value)) {
        statusMessageEmail += '<p class="error" style="margin:0"><strong>Email</strong> is invalid!</p>';
        isDataValid = false;
      }
    }

    if (!this.Message.value) {
      statusMessageMessage += '<p class="error" style="margin:0"><strong>Message</strong> cannot be empty</p>';
      isDataValid = false;
    }

    return {
      statusMessageName,
      statusMessageEmail,
      statusMessageMessage,
      isDataValid
    };
  }

  validateForm = () => {
    const { isDataValid, statusMessageName, statusMessageEmail, statusMessageMessage } = this.checkValidation();

    if(!isDataValid) {
      this.statusName.nativeElement.innerHTML = statusMessageName;
      this.statusEmail.nativeElement.innerHTML = statusMessageEmail;
      this.statusMessage.nativeElement.innerHTML = statusMessageMessage;
      return;
    }

    this.contact.PostMessage(FormData)
    .subscribe(response => {
      console.log(response);
      location.href = 'https://mailthis.to/confirm';
      this.FormData.setValue({
        Fullname: '',
        Email: '',
        Message: ''
      })


      setTimeout(() => {
        this.statusName.nativeElement.innerHTML = '';
        this.statusMessage.nativeElement.innerHTML = '';
        this.statusEmail.nativeElement.innerHTML = '';
      }, 2000);
    })
  }

  ngOnInit(): void {
  
  }


}
