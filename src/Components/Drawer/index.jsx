import React, { memo, useCallback } from "react";

// import Icon from "../Icon";

import { DrawerStyle, Overlay } from "./styles";

const Drawer = memo(({ children, visible, onClose, width, title }) => {
  const getVisible = useCallback(() => (visible ? width : 0), [visible, width]);

  const handleOnClose = useCallback(() => onClose && onClose(), [onClose]);

  return (
    <React.Fragment>
      <DrawerStyle styles={{ width: getVisible() }}>
        <div className="drawer-title">
          <span>{title || "Title"}</span>
          {/* <Icon
            type="fas fa-times"
            className="close-drawer"
            onClick={handleOnClose}
          /> */}
        </div>
        <div className="drawer-content">{children}</div>
      </DrawerStyle>

      {visible && <Overlay onClick={handleOnClose} />}
    </React.Fragment>
  );
});

export default Drawer;
