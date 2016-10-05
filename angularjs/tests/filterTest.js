/**
 * Created by csjoung on 2016. 10. 5..
 */
describe("Filter Tests", function() {
    var filterInstance;

    beforeEach(angular.mock.module("exampleAppTest"));

    beforeEach(angular.mock.inject(function($filter) {
        filterInstance = $filter("labelCase");
    }));

    it("Changes case", function() {
        var result =filterInstance("test phrase");
        expect(result).toEqual("Test phrase");
    });

    it("Reverse case", function () {
        var result = filterInstance("test phrase", true);
        expect(result).toEqual("tEST PHRASE");
    });
});