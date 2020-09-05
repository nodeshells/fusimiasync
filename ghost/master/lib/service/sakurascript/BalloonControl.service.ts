import {r, w} from "../../utils";

interface MenuItem {
  menuTitle: string;
  emitEvent: string;
}

export type MenuItemVariable = MenuItem[];

export class BalloonControlService {
  /**
   * バルーン内にメニューを描画する
   * @param menuItem
   * @param menuHeader
   */
  public static displayMenu(menuItem: MenuItemVariable, menuHeader: string) {
    return r`${w.noWeightZone()}` +
        r`■${menuHeader}\n` +
        r`------------------------------ -\n` +
        // renderMenuContents
        menuItem.map((menuItems) => {
          return r`\![*]\q[${menuItems.menuTitle},"script:\![raise,${menuItems.emitEvent}]"]\n`;
        }).join("") +
        r`------------------------------ -\e` +
        r`${w.noWeightZone()}`;
  }
}
