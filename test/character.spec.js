// These test cases are all unfinished. We will finish them together.
describe("Character", function() {

    it("initializes with given values", function() {
        let player = new Character({
            name: "My Name",
            health: 40,
            minAttackDamage: 1,
            maxAttackDamage: 3
        });
        expect(player.name).toBe("My Name");
        expect(player.health).toBe(40);
        expect(player.minAttackDamage).toBe(1);
        expect(player.maxAttackDamage).toBe(3);
    });

    it("isDead when health at 0", function() {
        // Arrange
        let player = new Character({
            health: 0
        });
        expect(player.isDead()).toBeTrue();
        // Act & Assert
    });

    it("isDead when health below 0", function() {
        // You try this one
        let player = new Character({
            health: -1
        });
        expect(player.isDead()).toBeTrue();
    });

    it("not isDead when health above 0", function() {
        // You try this one
        let player = new Character({
            health: 10
        });
        expect(player.isDead()).toBeFalse();
    });

    it("receiveAttackDamage removes health", function() {
        // You try this one
        let player = new Character({
            health: 10
        });
        player.receiveAttackDamage(5);
        expect(player.health).toBeLessThan(10);
    });

    it("receiveAttackDamage does not take health below 0", function() {
        // You try this one
        let player = new Character({
            health: 10
        });
        player.receiveAttackDamage(11);
        expect(player.health).toBeGreaterThanOrEqual(0);
    });

    it("restoreHealth returns health to original value", function() {
        // Then you try this one
        let player = new Character({
            health = 5,
            startingHealth = 10
        });
        player.restoreHealth();
        expect(player.health).toBe(10);
    });

    it("generateAttackDamage calls generateRandomIntegerBetween with min and max damage", function() {
        // Arrange
        let player = new Character({
            minAttackDamage: 5,
            maxAttackDamage: 8
        });
        let spy = spyOn(player, "generateRandomIntegerBetween").and.returnValue(7);

        // Act
        let damage = player.generateAttackDamage();

        // Assert
        expect(damage).toBe(7);
        expect(spy).toHaveBeenCalledWith(5, 8);
    });

});