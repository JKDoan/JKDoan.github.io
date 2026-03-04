import { Routes } from '@angular/router';
import { ProjectItem } from './components/project-item/project-item';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () =>
            import('./pages/home/home').then((m) => m.Home),
    },
    {
        path: "over-mij",
        loadComponent: () =>
            import('./pages/overmij/overmij').then((m) => m.Overmij),
    },
    {
        path: "contact",
        loadComponent: () =>
            import('./pages/contact/contact').then((m) => m.Contact),
    },
    {
        path: "samen-aan-z",
        loadComponent: () =>
            import('./pages/samen-aan-z/samen-aan-z').then((m) => m.SamenAanZ),
    },
    {
        path: "onboarding",
        loadComponent: () =>
            import('./pages/onboarding/onboarding').then((m) => m.Onboarding),
    },
    {
        path: "front-end-android",
        loadComponent: () =>
            import('./pages/front-end-android/front-end-android').then((m) => m.FrontEndAndroid),
    }
];
