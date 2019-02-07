import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuList from '../../components/MenuList/index';
import CategoryList from '../../components/Category/index';

import * as actions from '../../modules/category/CategoryActions/index';
import menuSelectors from '../../modules/menu/MenuSelectors/index';
import categorySelectors from '../../modules/category/CategorySelectors/index';

class MenuListContainer extends Component {
  render() {
    const { onChange, value, category = [] } = this.props;
    return (
      <>
        <CategoryList category={category} onChange={onChange} value={value} />
        <MenuList {...this.props} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  menu: menuSelectors.getFilteredMenu(state),
  category: categorySelectors.getItems(state),
  value: categorySelectors.getActiveCategory(state),
});

const mapDispatchToProps = {
  onChange: actions.changeCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuListContainer);
