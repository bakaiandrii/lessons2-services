import {Component, Input} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lessons2-services';

  users: User[];
  posts: Post[];

  constructor(private userService: UserService, private  postService: PostService) {
    userService.users().subscribe(value => this.users = value);
    postService.post().subscribe(value => this.posts = value );
  }
}
