import React, { Component } from 'react';
import * as Api from '../../../services/api';
import OrderHistory from '../../History/index';
import Modal from '../../Modal/index';
import Loading from '../../Loading/index';

export default class OrderHistoryPage extends Component {
  state = {
    listHistory: [],
    isModalLoading: false,
    moreInfo: null,
    address: '',
    price: '',
    rating: '',
  };

  componentDidMount() {
    Api.getAllList('history').then(list =>
      this.setState({
        listHistory: list,
      }),
    );
  }

  handleCloseModalMoreInfo = () => {
    this.setState({
      moreInfo: null,
    });
  };

  handleBtnDelete = id => {
    Api.deleteById('history', id).then(response => {
      if (response.status !== 200) return;
      this.setState(prev => ({
        listHistory: prev.listHistory.filter(el => el.id !== id),
      }));
    });
  };

  handleBtnMore = id => {
    this.setState({
      isModalLoading: true,
    });
    Api.getById('history', id).then(response => {
      if (response.status !== 200) return;

      this.setState({
        isModalLoading: false,
        moreInfo: response.data,
      });
    });
  };

  handleInputValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleAddItem = e => {
    e.preventDefault();
    const { address, price, rating } = this.state;

    const date = new Date();

    const time = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };

    const newItemInList = {
      date: `${time.day}/${time.month}/${time.year}`,
      address,
      price,
      rating,
    };
    Api.addItem('history', newItemInList).then(response => {
      if (response.status !== 201) return;

      Api.getAllList('history').then(allList =>
        this.setState({
          listHistory: allList,
          address: null,
          price: null,
          rating: null,
        }),
      );
    });
  };

  render() {
    const { listHistory, moreInfo, isModalLoading } = this.state;
    return (
      <>
        <OrderHistory
          list={listHistory}
          deleteClick={this.handleBtnDelete}
          moreClick={this.handleBtnMore}
        />
        {isModalLoading && <Loading />}
        {moreInfo && (
          <Modal handleCloseClick={this.handleCloseModalMoreInfo}>
            <div>
              <p>Date: {moreInfo.date}</p>
              <p>Price: {moreInfo.price}</p>
              <p>Address: {moreInfo.address}</p>
              <p>Rating: {moreInfo.rating}</p>
            </div>
          </Modal>
        )}
      </>
    );
  }
}
