/**
 * Created by csjoung on 2016. 10. 4..
 */
describe("First Test", function () {
    //Arrange
    var counter;

    beforeEach(function () {
        counter = 0;
    });

    it("increments value", function() {
        counter++
        expect(counter).toEqual(1);
    })

    it("decrements value", function () {
        counter--;
        expect(counter).toEqual(-1);
    })
})