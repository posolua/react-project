import React, { Component } from 'react';

import Modal from '../../Modal/index';
import Loading from '../../Loading/index';

class MainPage extends Component {
  state = {
    isModalOpen: false,
    isModalLoading: false,
    notes: [],
  };

  handleOpenModal = () => {
    this.setState({
      isModalLoading: true,
    });
    this.setState({
      isModalLoading: false,
      isModalOpen: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleSubmitNodeEditor = (text, rate) => {
    this.setState(prevState => ({
      notes: [{ id: Date.now(), text, rate }, ...prevState.notes],
    }));
  };

  handleInputValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { isModalOpen, isModalLoading } = this.state;

    return (
      <div>
        <div>
          <h2>Main Page!</h2>
          <hr />
        </div>

        <hr />
        <button type="button" onClick={this.handleOpenModal}>
          Open Modal
        </button>

        {isModalOpen && (
          <Modal handleCloseClick={this.handleCloseModal}>
            <div>
              <p>Fusce egestas elit eget lorem</p>
            </div>
          </Modal>
        )}

        {isModalLoading && <Loading />}
      </div>
    );
  }
}

export default MainPage;
