'use strict';

import * as sadeghmohebbiGithubUser from '../sadeghmohebbi-user';

it('my github username should match \'sadeghmohebbi\' from api', () => {
  expect.assertions(1);
  return sadeghmohebbiGithubUser.getUserName().then(data => expect(data).toEqual('sadeghmohebbi'));
});