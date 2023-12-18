import React from "react"

class MenuWidgetSection extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div id="menu">
          <div className="widget-menu">
            <cleverfood-panel
              api-url="https://api.good-food.ge"
              css-path="./cleverfood.css"
              custom-css-path="./cleverfood_custom_widget.css"
            ></cleverfood-panel>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuWidgetSection
