import { Component, OnInit} from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent implements OnInit{
    
    
    constructor(public postservice: PostService,public route: ActivatedRoute){}

    public post:Post = {id:'',content:'',title:''};
    private postId:string = '';
    private mode = 'create';

    ngOnInit(){
        this.route.paramMap.subscribe((paramMap:ParamMap)=>{
            if(paramMap.has('postId')){
                this.mode="edit";
                
                this.postId = <any>paramMap.get('postId');
                this.post = <any>this.postservice.getPost(this.postId);
            }else{
                this.mode = "create";
                this.postId = '';
            }
        });
    }

    newPost = 'This is a Post';
    enteredTitle ="";
    enteredContent = "";
    
    
    onAddPost(form : NgForm){
        if(form.invalid){
            return;
        }

        if(this.mode === "create"){
            this.postservice.addPost(form.value.title, form.value.content);
        }else{
            this.postservice.updatePost(this.postId, form.value.title, form.value.content);
        }
        form.resetForm();
    }
}