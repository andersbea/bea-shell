
import { MenuItem, MenuItemEvent, TopbarOptions, SidebarOptions } from '@bea-shell/common/objects';

export class BeaShellOptions {
    topbar?: TopbarOptions
    sidebar?: SidebarOptions
    events?: {
        onMenuItemClick?(event?: MenuItemEvent): void;
        onMenuItemDoubleClick?(event?: MenuItemEvent): void;
    }
}
