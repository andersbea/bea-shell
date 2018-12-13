import { MenuIcon, MenuItem } from '@bea-shell/common/objects';

export class SidebarOptions {
    header?: MenuItem[]
    menuItems?: MenuItem[]
    footer?: MenuItem[]
    menuIcon?: MenuIcon
    disabled?: boolean
    placement?: 'left' | 'right';
}