export const findByID = (array, id) => {

	return array.filter(function (item) {

		return item.id == id;
	})[0];
};