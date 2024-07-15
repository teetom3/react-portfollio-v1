import React, { Component } from 'react';
import Avatar from "../avatar/Avatar.js";
import SkillstMenu from "./SkillsMenu.js"


export default class Skills extends Component {
  render() {
    return (
      <>
      <Avatar page="skills"/>
      <SkillstMenu/>
      </>
    )
  }
}
