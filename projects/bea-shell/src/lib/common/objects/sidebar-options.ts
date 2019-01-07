import { SubmenuIcon, MenuItem } from '@bea-shell/common/objects';

export class SidebarOptions {
    header?: MenuItem[]
    menuItems?: MenuItem[]
    footer?: MenuItem[]
    submenuIcon?: SubmenuIcon
    disabled?: boolean
    alwaysExpandable?: boolean = false
    placement?: 'left' | 'right'
}