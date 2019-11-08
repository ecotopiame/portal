import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser() {
    return {
      fullName: 'Sharon Tzur',
      avatar: 'https://lh3.googleusercontent.com/-5Gn-UkRlXcU/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcqD0KX0vucW9pbijFPygWdnknR4Q.CMID/s32-c/photo.jpg',
    }
  }
}
