import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from './sauces';
import Counter from './component';

const mapStateToProps = ({ count: { value } }) => ({ value });

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
