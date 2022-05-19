import { Component,  OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../post.service';


@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls:['./post-list.component.css']
})

export class PostListComponent implements OnInit {
    // postservice: PostService;
    // @Input() 
    posts: Post[] = [];
    private PostSub: Subscription = new Subscription;

    constructor(public postservice: PostService){
        
    }

    ngOnInit(){
        this.postservice.getPosts();
        this.PostSub=this.postservice.getPostUpdateListener().
        subscribe((posts: Post[]) =>{
            this.posts = posts;
        })
    }

    onDelete(postId:String){
        this.postservice.deletePost(postId)
    }

    ngOnDestroy(){
        this.PostSub.unsubscribe();
    }
}


