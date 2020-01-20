import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GuestbookData} from './guestbook.component';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {

  private baseUrl: string = environment.backendUri;

  constructor(private http: HttpClient) {
  }

  public getGuestbook(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/api/guestbook');
  }

  public postGuestbook(guestbookData: GuestbookData): Observable<Object> {
    return this.http.post(this.baseUrl + '/api/guestbook', guestbookData);
  }
}
