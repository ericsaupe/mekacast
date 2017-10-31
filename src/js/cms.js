import React from "react";
import CMS from "netlify-cms";

import StoryPreview from "./cms-preview-templates/story";
import PagesPreview from "./cms-preview-templates/pages";


// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("story", StoryPreview);
CMS.registerPreviewTemplate("pages", PagesPreview);
CMS.registerWidget("color", ColorControl);
