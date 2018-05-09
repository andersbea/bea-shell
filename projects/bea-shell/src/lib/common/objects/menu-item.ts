import { Visibility } from './visibility';

export class MenuItem {
    title?: string
    link?: string
    icon?: string
    subitems?: MenuItem[]
    visibility?: Visibility[];
}