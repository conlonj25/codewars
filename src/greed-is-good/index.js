const processArray = (nums) => {
	console.log({ nums });
	if (nums.length <= 2) {
		return `${nums.join(",")},`;
	}

	return `${nums.slice(0, 1)}-${nums.slice(-1)},`;
};

export function solution(list) {
	let str = "";
	let nums = [];

	for (const x of list) {
		if (nums.length === 0 || x === nums.slice(-1)[0] + 1) {
			nums.push(x);
			return;
		}

		str = str + processArray(nums);
		nums = [];
		nums.push(x);
	}

	str = str + processArray(nums);

	return str.slice(0, -1);
}
