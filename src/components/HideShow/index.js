import React from 'react'
import './index.css'

class HideShow extends React.Component{
    state = {
        show : false
    }

    onChange = () => {
        this.setState(prevState => ({
            show : !prevState.show
        }))
    }

    render(){
        const {show} = this.state
        return (
            <div className="app-container">
              <h1 className="heading">Show/Hide</h1>
              <div className="show-hide-container">
                <div className="name-container">
                  <button
                    type="button"
                    className="show-hide-button"
                    onClick={this.onChange}
                  >
                    {!show ? "Show Name": "Hide Name"}
                  </button>
                 
                  {show && <p className="name">Jonas</p>}
                </div>
              </div>
            </div>
          )
        }
      }

export default HideShow

