import ${NAME} from './${NAME}';
import {mock, MockProxy} from 'jest-mock-extended';

describe(${NAME}, function () {
    let todoRename:${NAME};
    
    beforeEach(function () {
        todoRename = new ${NAME}();
    });
});