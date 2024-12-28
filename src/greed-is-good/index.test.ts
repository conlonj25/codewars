import { assert, describe, expect, it, test } from "vitest";
import { score } from ".";

describe("Scorer Function", () => {
  it("should value this as worthless", () => {
    assert.strictEqual(
      score([2, 3, 4, 6, 2]),
      0,
      "Incorrect answer for dice = [2, 3, 4, 6, 2]"
    );
  });

  it("should value this triplet correctly", () => {
    assert.strictEqual(
      score([4, 4, 4, 3, 3]),
      400,
      "Incorrect answer for dice = [4, 4, 4, 3, 3]"
    );
  });

  it("should value this mixed set correctly", () => {
    assert.strictEqual(
      score([2, 4, 4, 5, 4]),
      450,
      "Incorrect answer for dice = [2, 4, 4, 5, 4]"
    );
  });
});
