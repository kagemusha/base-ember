import PageObject from '../../page-object';

const {
  visitable,
  // text,
  // collections,
  fillable,
  clickOnText
} = PageObject;

export default PageObject.build({
  visit: visitable('/'),
  fillInEmail: fillable('.login-component .email'),
  fillInPassword: fillable('.login-component .password'),
  clickButton: clickOnText(''),
});
