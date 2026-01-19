import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ContactsPage } from './contacts-page/contacts-page';
import { SkillsPage } from './skills-page/skills-page';
import { AboutPage } from './about-page/about-page';
import { Expertise } from './expertise/expertise';

export const routes: Routes = [
    
{
    path: 'home',
    component: HomePage
},
{
    path: 'about',
    component: AboutPage
},
{
    path: 'skills',
    component: SkillsPage
},
{
    path: 'expertise',
    component: Expertise
},
{
    path: 'contacts',
    component: ContactsPage
},
{
    path: '**',
    redirectTo:'home',
    pathMatch:"full"
},
{
    path: '',
    redirectTo:'home',
    pathMatch:"full"
}
];
