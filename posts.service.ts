import {Injectable} from '@angular/core';
import {Posts} from './posts.model';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PostsService {
    url : string = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http : Http) {

    }

    /** When using promise object */
    /*getposts():Promise<Posts> {
        return this.http.get(this.url).toPromise().then(response => response.json());        
    }*/

    getPosts() {
        return this.http.get(this.url)
        .map((response) => {
            return response.json();
        });
    }
}