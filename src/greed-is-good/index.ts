export const score = (dice: number[]): number => {
	const nums: number[] = [0, 0, 0, 0, 0, 0, 0];
	const tripWeights: number[] = [0, 1000, 200, 300, 400, 500, 600];
	const singleWeights: number[] = [0, 100, 0, 0, 0, 50, 0];

	dice.forEach((x) => (nums[x] = nums[x] + 1));
	const trips = nums.map((x) => Math.floor(x / 3));
	const singles = nums.map((x) => x % 3);

	return (
		trips.reduce((acc, cv, i) => acc + cv * tripWeights[i], 0) +
		singles.reduce((acc, cv, i) => acc + cv * singleWeights[i], 0)
	);
};
