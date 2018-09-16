import React, { Component } from 'react';

class Guess extends Component {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           editing: false
  //       }
  //   }

  onSubmit(event) {
      event.preventDefault();
      const text = this.textInput.value.trim();
      if (text && this.props.onAdd) {
          this.props.onAdd(text);
      }
      this.textInput.value = '';
      if(this.props.onAdd2) {
        this.props.onAdd2(true);
      }
  }

    // setEditing(editing) {
    //     this.setState({
    //         editing
    //     });
    // }

    render() {
        // if (!this.state.editing) {
        //     return (
        //         <div className="add-button"
        //             onClick={() => this.setEditing(true)}>
        //             <a href="#">Add a {this.props.type}...</a>
        //         </div>
        //     );
        // }

        return (

            <form className="guess" onSubmit={(e) => this.onSubmit(e)}>
                <input type="text" name="guess" ref={input => this.textInput = input} />
                {/* <button>Add</button> */}
                <input type="submit" value="Submit" />
            </form>
        );
    }

}

export default Guess;
