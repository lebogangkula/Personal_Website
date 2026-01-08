import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ContactsPage } from './contacts-page/contacts-page';
import { Qualifications } from './qualifications/qualifications';
import { SkillsPage } from './skills-page/skills-page';
import { AboutPage } from './about-page/about-page';

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
    path: 'qualifications',
    component: Qualifications
},
{
    path: 'contacts',
    component: ContactsPage
}
];
