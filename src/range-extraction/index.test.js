import { describe, expect, it } from "vitest";
import { solution } from ".";

describe("Sample Tests", () => {
	it("Should pass sample tests", () => {
		expect(
			solution([
				-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
			]),
		).toEqual("-6,-3-1,3-5,7-11,14,15,17-20");
	});
});
