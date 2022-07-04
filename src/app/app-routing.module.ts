import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { SearchPostsByUserComponent } from './components/search-posts-by-user/search-posts-by-user.component';
import { SubmitPostComponent } from './components/submit-post/submit-post.component';

const routes: Routes = [
  { path: 'home', component: AllPostsComponent},
  { path: 'userSearch', component: SearchPostsByUserComponent},
  { path: 'postMessage', component: SubmitPostComponent},
  { path: '**', component: AllPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
