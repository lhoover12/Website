import React from "react";

class MidComponent extends React.Component {
  render() {
    return (
      <div className="mdl-card coffee-pic mdl-cell mdl-cell--8-col">
        <div className="mdl-card__media mdl-color-text--grey-50">
          <h3>The Lukas experience </h3>
        </div>
        <div className="mdl-card__supporting-text meta mdl-color-text--grey-600">
          <div className="minilogo" />
          <div>
            <strong>Lukas</strong>
            <span />
          </div>
        </div>
      </div>
    );
  }
}

export default MidComponent;
