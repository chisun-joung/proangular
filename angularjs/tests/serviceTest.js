/**
 * Created by csjoung on 2016. 10. 5..
 */
describe("Service Tests", function () {

    beforeEach(angular.mock.module("exampleAppTest"));

    it("Increments the counter", function () {
        angular.mock.inject(function (counterService) {
            expect(counterService.getCounter()).toEqual(0);
            counterService.incrementCounter();
            expect(counterService.getCounter()).toEqual(1);
        });
    });
});