export function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>();
	nums.forEach((x) => map.set(x, target - x));

	for (const x of map.keys()) {
		const y = map.get(x);
		if (y) {
			return [x, y];
		}
	}

	return [];
}
