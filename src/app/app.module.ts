import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { SearchPostsByUserComponent } from './components/search-posts-by-user/search-posts-by-user.component';
import { PostsService } from './services/posts-service.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PostMessageFooterComponent } from './components/post-message-footer/post-message-footer.component';
import { SideBarNavComponent } from './components/side-bar-nav/side-bar-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SubmitPostComponent } from './components/submit-post/submit-post.component';

export function appInit(initPosts: PostsService) {
    return () => initPosts.getAllPostsInit();
  }

@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    SearchPostsByUserComponent,
    PostMessageFooterComponent,
    SideBarNavComponent,
    SubmitPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule
  ],
  providers: [ PostsService,
    { provide: APP_INITIALIZER, useFactory: appInit, deps: [PostsService], multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }