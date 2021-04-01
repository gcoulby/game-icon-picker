import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import "./css/css-compiled/main.css";
import glyphs from "./models/iconsNetGlyphs";

class App extends Component {
  state = {
    filter: "",
    copyMode: 0,
  };

  handleFilterChange = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  handleCopyModeChange = (evt) => {
    this.setState({ copyMode: evt.target.value });
  };

  handleIconSelect = (icon) => {
    var str = "";
    switch (parseInt(this.state.copyMode)) {
      case 0:
        str = icon;
        break;
      case 1:
        str = `game-icon game-icon-${icon}`;
        break;
      case 2:
        str = `<i class="game-icon game-icon-${icon}"></i>`;
        break;
      case 3:
        str = `<i className="game-icon game-icon-${icon}"></i>`;
        break;
      case 4:
        str = `https://game-icons.net/search.html?q=${icon}`;
        break;
      case 5:
        str = `https://raw.githubusercontent.com/seiyria/gameicons-font/master/test/svg/${icon}.svg`;
        break;
    }

    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <i className="game-icon game-icon-meeple"></i>&nbsp;Game Icon Picker
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <div className="col-1"></div>
              <div className="col-5">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <label className="btn btn-dark btn-tag">Copy Mode</label>
                  </div>
                  <select
                    className="form-control"
                    onChange={(e) => this.handleCopyModeChange(e)}
                    value={this.state.copyMode}
                  >
                    <option key="copy_type_0" value="0">
                      Icon Name Only ("ancient-sword")
                    </option>
                    <option key="copy_type_1" value="1">
                      Full ("game-icon game-icon-ancient-sword")
                    </option>
                    <option key="copy_type_2" value="2">
                      i element ( &lt;i class="game-icon game-icon-ancient-sword"&gt;&lt;/i&gt; )
                    </option>
                    <option key="copy_type_3" value="3">
                      React i element ( &lt;i className="game-icon game-icon-ancient-sword"&gt;&lt;/i&gt; )
                    </option>
                    <option key="copy_type_4" value="4">
                      Game Icon URL
                    </option>
                    <option key="copy_type_5" value="5">
                      SVG URL
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-1"></div>
              <div className="col-5">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Search Icon"
                  aria-label="search"
                  aria-describedby="basic-addon2"
                  value={this.state.filter}
                  onChange={(e) => this.handleFilterChange(e)}
                />
              </div>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="alert alert-secondary" role="alert">
              The icons used here are developed and maintained by Delapouite and Lorc from{" "}
              <a href="https://game-icons.net/">Game-Icons.net</a>. The webfont version of the icons is provided by{" "}
              <a href="https://seiyria.com/gameicons-font/">Kyle Kemp</a>. This tool provides a quick way to search and
              copy icons in various formats.
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <React.Fragment>
                <div id="iconPicker" className="popup" data-width="800" data-height="600">
                  {/* <div className="overlay" onClick={() => this.props.onClose(false)}></div> */}

                  <div className="container">
                    <div className="row">
                      <div className="col"></div>
                    </div>
                    {/*  Icons   */}
                    <div id="iconPickerIcons" className="row">
                      <div className="col">
                        {glyphs
                          .filter((g) => g.includes(this.state.filter))
                          .map((g) => (
                            <i
                              key={`game-icon game-icon-${g}`}
                              className={`game-icon game-icon-${g}`}
                              aria-hidden="true"
                              onClick={() => this.handleIconSelect(g)}
                            ></i>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
