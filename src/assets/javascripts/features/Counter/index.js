import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CountActions from './actions';
import Counter from './component';

const mapStateToProps = ({ count: { value } }) => ({ value });

const mapDispatchToProps = dispatch =>
  bindActionCreators(CountActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
