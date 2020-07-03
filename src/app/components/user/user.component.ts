import {Component, Input} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: User;

  constructor(private  userService: UserService) { }


  showDetails(id: number): void {
    this.userService.postOfSingleUser(id).subscribe(value => console.log(value));
  }
}
