const changeKeyOfNestedObject = require('.');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('changeKeyOfNestedObject'), () => {
  if (functionNotExists(changeKeyOfNestedObject)) {
    functionNotExistsMsg('changeKeyOfNestedObject');
    return;
  }

  const nestedObject = {
    id: '1',
    firstName: 'firstName',
    lastName: 'lastName',
    children: [
      {
        id: '2',
        firstName: 'firstName',
        lastName: 'lastName',
        children: [
          {
            id: '3',
            firstName: 'firstName',
            lastName: 'lastName',
            children: [
              {
                id: '4',
                firstName: 'firstName',
                lastName: 'lastName',
                children: [
                  {
                    id: '8',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    children: [],
                  },
                  {
                    id: '9',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '5',
        firstName: 'firstName',
        lastName: 'lastName',
        children: [
          {
            id: '6',
            firstName: 'firstName',
            lastName: 'lastName',
            children: [],
          },
          {
            id: '7',
            firstName: 'firstName',
            lastName: 'lastName',
            children: [],
          },
        ],
      },
    ],
  };

  const mutatedObject = {
    id: '1',
    fullName: 'firstName lastName',
    children: [
      {
        id: '2',
        fullName: 'firstName lastName',
        children: [
          {
            id: '3',
            fullName: 'firstName lastName',
            children: [
              {
                id: '4',
                fullName: 'firstName lastName',
                children: [
                  {
                    id: '8',
                    fullName: 'firstName lastName',
                    children: [],
                  },
                  {
                    id: '9',
                    fullName: 'firstName lastName',
                    children: [],
                  },
                ]
              }
            ],
          }
        ],
      },
      {
        id: '5',
        fullName: 'firstName lastName',
        children: [
          {
            id: '6',
            fullName: 'firstName lastName',
            children: [],
          },
          {
            id: '7',
            fullName: 'firstName lastName',
            children: [],
          },
        ],
      },
    ],
  };

  expect(changeKeyOfNestedObject(nestedObject))
    .toEqual(mutatedObject);
});
