import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { SearchPostsByUserComponent } from './components/search-posts-by-user/search-posts-by-user.component';
import { Posts } from './interfaces/posts';
import { PostsService } from './services/posts-service.service';

export function appInit(initPosts: PostsService) {
  return (): Promise<Posts> => {
    return initPosts.setAllPosts();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    SearchPostsByUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ PostsService,
    { provide: APP_INITIALIZER, useFactory: appInit, deps: [PostsService], multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
