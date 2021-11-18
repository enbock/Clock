import ${NAME},{Adapter} from './${NAME}';
import ${NAME}Model from './${NAME}Model';
import {render, RenderResult} from '@testing-library/react';
import {mock, MockProxy} from 'jest-mock-extended';

describe(${NAME}, function () {
    let model:${NAME}Model, adapter: Adapter & MockProxy<Adapter>;
    
    beforeEach(function () {
        adapter = mock<Adapter>();
        model = new ${NAME}Model();
    });
    
    function createUi(): RenderResult {
        return render(<${NAME} adapter={adapter} model={model}/>);
    }
});