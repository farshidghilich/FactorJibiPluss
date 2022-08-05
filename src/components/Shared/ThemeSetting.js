import React, { useState } from "react";
import { connect } from "react-redux";
import {
  setThemeColor,
  setFontStyle,
  setLightTheme,
  setRtlVersion,
  setHorizontalMenu,
  setMiniSidebar,
  setMiniSidebarMenuOn,
} from "../../actions/settingsAction";

const ThemeSetting = ({
  setThemeColor,
  themeColor,
  setFontStyle,
  fontStyle,
  setLightTheme,
  lightVersion,
  setRtlVersion,
  RtlVersion,
  horizontalMenu,
  setMiniSidebar,
  setHorizontalMenu,
  miniSidebar,
  setMiniSidebarMenuOn,
  miniSideMenuOn,
}) => {
  const [openSettingBar, setOpenSettingBar] = useState(false);
  return (
    <div className={`themesetting ${openSettingBar ? " open" : ""}`}>
      <span
        title="تنظیمات"
        className="theme_btn"
        onClick={() => setOpenSettingBar(!openSettingBar)}
      >
        <i className="icon-magic-wand"></i>
      </span>
      <div className="card theme_color">
        <div className="header"></div>
      </div>
      <div className="card font_setting"></div>
      <div className="card setting_switch">
        <div className="header">
          <h2>تنظیمات اپلکیشن</h2>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            {lightVersion ? "تم تاریک" : "تم روشن"}
            <div className="float-right">
              <label className="switch">
                <input
                  type="checkbox"
                  className="lv-btn"
                  onChange={() => setLightTheme(!lightVersion)}
                  checked={lightVersion ? "checked" : ""}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </li>

          <li className="list-group-item">
            منو کوچک
            <div className="float-right">
              <label className="switch">
                <input
                  type="checkbox"
                  className="mini-sidebar-btn"
                  onChange={() => {
                    setMiniSidebar(!miniSidebar);
                    setMiniSidebarMenuOn(!miniSideMenuOn);
                  }}
                  checked={miniSidebar}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  themeColor: state.settings.themeColor,
  fontStyle: state.settings.fontStyle,
  lightVersion: state.settings.lightVersion,
  RtlVersion: state.settings.RtlVersion,
  horizontalMenu: state.settings.horizontalMenu,
  miniSidebar: state.settings.miniSidebar,
  miniSideMenuOn: state.settings.miniSideMenuOn,
});

const mapDispatchToProps = (dispatch) => ({
  setThemeColor: (e) => dispatch(setThemeColor(e)),
  setFontStyle: (e) => dispatch(setFontStyle(e)),
  setMiniSidebar: (e) => dispatch(setMiniSidebar(e)),
  setLightTheme: (e) => dispatch(setLightTheme(e)),
  setRtlVersion: (e) => dispatch(setRtlVersion(e)),
  setHorizontalMenu: (e) => dispatch(setHorizontalMenu(e)),
  setMiniSidebarMenuOn: (e) => dispatch(setMiniSidebarMenuOn(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSetting);
