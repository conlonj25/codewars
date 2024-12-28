const processArray = (nums) => {
	if (nums.length <= 2) {
		return `${nums.join(",")},`;
	}

	return `${nums.slice(0, 1)}-${nums.slice(-1)},`;
};

export function solution(list) {
	let str = "";
	let nums = [];

	list.forEach((x) => {
		if (nums.length === 0 || x === nums.slice(-1)[0] + 1) {
			nums.push(x);
			return;
		}

		str = str + processArray(nums);
		nums = [];
		nums.push(x);
	});

	str = str + processArray(nums);

	return str.slice(0, -1);
}
