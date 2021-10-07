import { Component, OnInit } from '@angular/core';
import { PbLibraryService } from '../service/pb-library.service';
import { Guid } from 'guid-typescript';
import { NrType, User } from '../interface/phonebook';

@Component({
  selector: 'lib-pb-library',
  templateUrl: './pb-library.component.html',
  styleUrls: ['./pb-library.component.css'],
})
export class PbLibraryComponent implements OnInit {
  public userList: Array<User> = [];
  public currentUser: any;
  public editcontact: boolean = false;
  public addcontact: boolean = false;
  public nrTypes: Array<NrType> = [];

  public filterType: any;

  constructor(private pbLibraryService: PbLibraryService) {
    this.getUsersList();
    this.getNrTypes();
  }

  ngOnInit(): void {}

  private getUsersList(): void {
    this.pbLibraryService.getAllUsers().subscribe((data: any): void => {
      this.userList = data;
    });
  }

  public viewContact(contact: any) {
    this.pbLibraryService
      .getCurrentUser(contact.id)
      .subscribe((data: any): void => {
        this.currentUser = data;
        this.editcontact = false;
        this.addcontact = false;
      });
  }

  public removeContact(contact: any) {

    this.pbLibraryService
      .removeCurrentUser(contact.id)
      .subscribe((data: any): void => {
        this.getUsersList();
        this.currentUser = null;
      });
  }

  public editContact() {
    this.editcontact = true;
    this.addcontact = false;
  }
  public addPhoneNumberForUser(numberType: any, number: any) {
    if(numberType == '' || number ==''){
      alert('Please fill the number details');
    }else{
      var object = {
        id: Guid.raw(),
        numbersType: numberType,
        numberDigits: number,
      };
      this.currentUser.numbers.push(object);
    }
  }

  public saveEdits(contact: any) {
    this.pbLibraryService
      .saveEditedUser(contact.id, contact)
      .subscribe((data: any): void => {
        this.getUsersList();
        this.viewContact(contact);
      });
  }

  public cancel(contact: any) {
    this.currentUser = null;
    this.editcontact = false;
    this.addcontact = false;
    this.viewContact(contact);
  }

  public addContact() {
    this.currentUser = {
      firstname: '',
      lastname: '',
      numbers: [],
    };
    this.addcontact = true;
    this.editcontact = false;
  }

  public saveAddedUser(contact: any) {

    if(contact.firstname == '' || contact.lastname =='' || contact.numbers.length ==0){
      alert('Please fill the form details');
    }else{
      this.pbLibraryService
      .saveAddedUser(contact)
      .subscribe((data: any): void => {
        this.getUsersList();
        this.editcontact = false;
        this.addcontact = false;
        this.viewContact(data);
      });
    }

  }

  private getNrTypes(): void {
    this.pbLibraryService.getNrTypes().subscribe((data: any): void => {
      this.nrTypes = data;
    });
  }

  public removePhoneNumberForUser(contact:any, number:any){

    contact.numbers = contact.numbers.filter( (element:any) => element.id != number.id );

    this.pbLibraryService
      .removePhoneNumberForUser(contact.id, contact)
      .subscribe((data: any): void => {});
  }

  public onChange(event: any) {
    this.filterType = event.target.value;

    if (this.filterType == 'firstname') {
      this.userList.sort((a: any, b: any) => {
        let fa = a.firstname.toLowerCase(),
          fb = b.firstname.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    } else if (this.filterType == 'lastname') {
      this.userList.sort((a: any, b: any) => {
        let fa = a.lastname.toLowerCase(),
          fb = b.lastname.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }
  }
}
