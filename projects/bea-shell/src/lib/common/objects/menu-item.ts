import { Visibility } from './visibility';

export class MenuItem {

    // Content
    title?: string
    html?: string
    icon?: string
    subitems?: MenuItem[]

    // Appearance
    class?: string;
    visibility?: Visibility[];
    iconPlacement?: 'left' | 'right';

    // Routing
    link?: string
    newTab?: boolean;
}