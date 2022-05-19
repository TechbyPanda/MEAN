import {Post} from './post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({providedIn: 'root'})


export class PostService{
    private posts: Post[] = [];
    private postUpdated = new Subject<Post[]>();

    constructor(private http: HttpClient){

    }

    getPosts(){  
        this.http.get<{message: string, posts: any }>('http://localhost:3000/api/posts')   
        .pipe(map((postData)=>{  
            return postData.posts.map((post:any) => {
                return{
                    title : post.title,
                    content : post.content,
                    id: post._id
                }
            })
        }))
        .subscribe((transformedData)=>{  
            this.posts = transformedData;
            this.postUpdated.next([...this.posts]); 
        });  
    }

    deletePost(postId:String){
        this.http.delete("http://localhost:3000/api/posts/"+postId)
        .subscribe(()=>{
            const updatedPosts = this.posts.filter(post=>post.id!==postId);
            this.posts=updatedPosts;  
            this.postUpdated.next([...this.posts]);
        })
    }

    // getPosts(){  
    //     this.http.get<{message: string, posts: Post[] }>('http://localhost:3000/api/posts')  
    //     .subscribe((PostData)=>{  
    //         this.posts = PostData.posts;
    //         this.postUpdated.next([...this.posts]); 
    //     });  
    // }

    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }

    addPost(title:string,content:string){
        const post: Post = {id:"",title: title, content: content};
        this.http.post<{message:string,postId:string}>('http://localhost:3000/api/posts',post)
        .subscribe((responseData)=>{
            const Id = responseData.postId;
            post.id = Id;
            this.posts.push(post);
            this.postUpdated.next([...this.posts]);
        })
    }

    updatePost( id: string, title:string, content:string){  
        const post: Post = {id:id, title:title, content:content};  
        this.http.put("http://localhost:3000/api/posts/"+id,post)
        .subscribe(response=>{
            const updatedPosts = [...this.posts];
            const oldPostIndex = updatedPosts.findIndex(p => p.id===post.id);
            updatedPosts[oldPostIndex] = post;
            this.posts = updatedPosts;
            this.postUpdated.next([...this.posts])
        });
    }

    getPost(id:string){
        return {...this.posts.find(p => p.id === id)};//spread operator(…)
    }
}