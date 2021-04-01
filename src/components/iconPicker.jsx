import React, { Component } from "react";
import glyphs from "../models/iconsNetGlyphs";

class IconPicker extends Component {
  state = {
    filter: "",
    format: "",
  };
  handleFilterChange = (evt) => {
    this.setState({ filter: evt.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div id="iconPicker" className="mt-5" data-width="800" data-height="600">
          {/* <div className="overlay" onClick={() => this.props.onClose(false)}></div> */}

          <div className="container">
            <div className="row">
              <div className="col">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="btn btn-dark btn-tag">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </label>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Icon"
                    aria-label="search"
                    aria-describedby="basic-addon2"
                    value={this.state.filter}
                    onChange={(e) => this.handleFilterChange(e)}
                  />
                </div>
              </div>
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
                      onClick={() => this.props.onIconSelect(g)}
                    ></i>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IconPicker;
