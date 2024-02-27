import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Auth } from 'firebase-admin/lib/auth/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
  public isLoged: any=false;


  constructor() { }

}
