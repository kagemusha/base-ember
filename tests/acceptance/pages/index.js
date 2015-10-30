import PageObject from '../../page-object';

const {
  visitable,
  // text,
  // collection
} = PageObject;

export default PageObject.build({
  visit: visitable('/'),
});
