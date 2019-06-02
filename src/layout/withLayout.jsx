import React from "react";

import { getDisplayName } from "../utils";

import "../styles/common.sass";
// You can implement your layout here, I'm just adding some styles :))
const withLayout = Component => {
    const WrapperComponent = props => {
        return <Component {...props} />;
    };
    WrapperComponent.displayName = `Layout(${getDisplayName(Component)})`;
    return WrapperComponent;
};

export default withLayout;
