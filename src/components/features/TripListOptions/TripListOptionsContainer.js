import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllRegions}  from '../../../redux/regionsRedux';
import {getAllFilters, changeSearchPhrase, changeDuration, addTag, removeTag, addRegion, removeRegion} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
  regions: getAllRegions(state),

});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeDuration: duration => dispatch(changeDuration(duration)),
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
  addRegion: region => dispatch(addRegion({
    region,
    countries: region.countries,
  })),
  removeRegion: region => dispatch(removeRegion({
    region,
    code: region.code,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
