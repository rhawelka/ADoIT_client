import {TasksService} from './tasks.service';
import * as Chai from 'chai';
import {HttpClient} from '@angular/common/http';
const expect = Chai.expect;

describe('TasksService', () => {
    let service : TasksService;
    let http : HttpClient;

    beforeEach(() => {

        service = new TasksService(http);
    });

    it('should be an object', () => {
        expect(service)
            .to
            .be
            .an('object');
    });
  });
